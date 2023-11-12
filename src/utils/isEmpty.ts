export default (value: string | undefined) =>
  value === null || !value || value === '' || value === undefined;
