export function replaceSpace(value: string): string {
  return value.replaceAll(/ /g, '_');
}

export function replaceUnderscore(value: string) {
  return value.replaceAll('_', ' ');
}

export function capitalize(value: string): string {
  return value
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase().concat(word.slice(1)))
    .join(' ');
}

export function replaceQuote(value: string) {
  return value.replaceAll("'", '<>');
}
