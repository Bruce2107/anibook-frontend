import { toast, ToastOptions } from 'react-toastify';

const toastOptions: ToastOptions = {
  position: 'top-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

export function showToast(
  type: 'warn' | 'error' | 'success' | 'info',
  value: string
) {
  toast[type](value, toastOptions);
}

export function showToastWithCallback(
  type: 'warn' | 'error' | 'success' | 'info',
  value: string,
  callback: () => void
) {
  toast[type](value, { ...toastOptions, autoClose: 2000, onClose: callback });
}

export default showToast;
