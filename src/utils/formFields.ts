import MD5 from 'crypto-js/md5';

export function validEmail(value: string): boolean {
  const pattern = /^\w+([+.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return pattern.test(value);
}

export function passwordCrypto(value: string): string {
  return MD5(value).toString();
}
