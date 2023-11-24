import { useRecoilState } from 'recoil';
import atomLogin, { User } from '../recoil/atoms/login';

export interface HookLogin {
  user: User;
  setUser: (user: User) => void;
  logoff: () => void;
}

export function useLogin(): HookLogin {
  const [login, setLogin] = useRecoilState(atomLogin);

  const saveLogin = (user: User) => {
    setLogin(user);
    window.localStorage.setItem('user', JSON.stringify(user));
  };

  const logoff = () => {
    window.localStorage.removeItem('user');
    setLogin({ email: '', name: '', password: '' });
  };

  return { user: login, setUser: saveLogin, logoff };
}
