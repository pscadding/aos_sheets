import requests
from bs4 import BeautifulSoup
import json

# Send an HTTP request to the web page
# url = 'https://wahapedia.ru/aos3/factions/orruk-warclans/Hobgrot-Slittaz'
# response = requests.get(url)

# Get the HTML content of the page
# html_content = response.content

import test_content
html_content = test_content.content
# print(html_content)
# Parse the HTML content using Beautiful Soup
soup = BeautifulSoup(html_content, 'html.parser')

def process_weapons(s):
    weapons = []
    weapon_type_raw = ""
    weapon_table = soup.find("div", class_="wsTable")

    for weapon_row in weapon_table.find_all("tr"):
        weapon_type_name_elem = weapon_row.find("span", class_="wsHeaderCellName_short")
        if weapon_type_name_elem:
            weapon_type_raw = weapon_type_name_elem.text.strip()
            continue

        nameElement = weapon_row.find("td", class_="wsDataCell_long")
        if not nameElement:
            continue
        weapon_name = weapon_row.find("td", class_="wsDataCell_long").text.strip()
        weapon_range = weapon_row.find_all("td")[2].text.strip()
        weapon_attacks = weapon_row.find_all("td")[3].text.strip()
        weapon_to_hit = weapon_row.find_all("td")[4].text.strip()
        weapon_to_wound = weapon_row.find_all("td")[5].text.strip()
        weapon_rend = weapon_row.find_all("td")[6].text.strip()
        weapon_damage = weapon_row.find_all("td")[7].text.strip()
        weapon_type = "Missile" if weapon_type_raw.lower() == 'missile weapons' else "Melee"

        weapons.append({
            "name": weapon_name,
            "type": weapon_type,
            "range": weapon_range,
            "attacks": weapon_attacks,
            "to_hit": weapon_to_hit,
            "to_wound": weapon_to_wound,
            "rend": weapon_rend,
            "damage": weapon_damage
        })
    return weapons

def process_keywords(s):
    keyword_table = soup.find("td", class_="wsKeywordLine")
    raw_keywords = keyword_table.text.split(",")
    return [ keyword.strip().title() for keyword in raw_keywords]


# Extract the relevant data
unit_name = soup.find("h3", class_="wsHeader").find('div').text.strip()
stats = soup.find("div", class_="AoS_profile")

wsMove = stats.find("div", class_="wsMove").text.strip()
wsWounds = stats.find("div", class_="wsWounds").text.strip()
wsSave = stats.find("div", class_="wsSave").text.strip()
wsBravery = stats.find("div", class_="wsBravery").text.strip()

weapons = process_weapons(soup)
keywords = process_keywords(soup)
print(keywords)
# Create the JSON object
data = {
    "name": unit_name,
    "stats": {
        "move": wsMove,
        "wounds": wsWounds,
        "save": wsSave,
        "bravery": wsBravery
    },
    "weapons": weapons,
    "keywords": keywords
}

# Print the JSON object
print(json.dumps(data, indent=4))