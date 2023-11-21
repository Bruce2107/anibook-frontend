import { useRecoilState } from 'recoil';
import atomLogin, { User } from '../recoil/atoms/login';

export interface HookLogin {
  user: User;
  setUser: (user: User) => void;
}

export function useLogin(): HookLogin {
  const [login, setLogin] = useRecoilState(atomLogin);

  const saveLogin = (user: User) => {
    setLogin(user);
    window.localStorage.setItem('user', JSON.stringify(user));
  };

  return { user: login, setUser: saveLogin };
}
