function _upperFirst(s: string) {
  return s.slice(0, 1).toUpperCase() + s.slice(1, s.length);
}

export function snakeToPascal(s: string) {
  const sections = s.split('_');
  return sections.map((sec) => _upperFirst(sec)).join('');
}

export function removeQuotes(s: string) {
  return s.replace(/['"]+/g, '');
}

export function removeQuotesArray(s: string[]) {
  return s.map((i) => removeQuotes(i));
}
