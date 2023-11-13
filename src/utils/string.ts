export function replaceSpace(value: string): string {
  return value.replace(/ /g, '_');
}

export function replaceUnderscore(value: string) {
  return value.replace('_', ' ');
}

export function capitalize(value: string): string {
  return value
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase().concat(word.slice(1)))
    .join(' ');
}
