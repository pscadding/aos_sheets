function _upperFirst(string: string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
}

export function snakeToPascal(string: string) {
  return _upperFirst(string.split('_').join(''));
}
