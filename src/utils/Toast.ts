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

// export function showWarnToast(value: string) {
//   toast.warn(value, toastOptions);
// }
// export function showErrorToast(value: string) {}

// export function showSuccessToast(value: string) {}

export function showToast(
  type: 'warn' | 'error' | 'success' | 'info',
  value: string
) {
  toast[type](value, toastOptions);
}

export default showToast;
