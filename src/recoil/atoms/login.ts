import { atom } from 'recoil';

export type User = {
  name: string;
  email: string;
  password: string;
};

let login: User = {
  name: '',
  email: '',
  password: '',
};

if (typeof window !== 'undefined') {
  const savedLogin = window.localStorage.getItem('user');
  if (savedLogin) {
    login = JSON.parse(savedLogin) as User;
  }
}

export default atom({
  key: 'login',
  default: login,
});
