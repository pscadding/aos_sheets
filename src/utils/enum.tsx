export function getEnumKeys(enumToParse: { [key: string]: string | number }): string[] {
  return Object.keys(enumToParse).filter((key) => isNaN(Number(key)));
}
