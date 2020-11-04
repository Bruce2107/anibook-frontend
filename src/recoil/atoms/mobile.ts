import { atom } from 'recoil';

let mobile = false;

if (typeof window !== 'undefined') {
  mobile = window.screen.width < 770;
}

export default atom({ key: 'mobile', default: mobile });
