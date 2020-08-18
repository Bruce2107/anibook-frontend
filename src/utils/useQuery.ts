import { useLocation } from 'react-router-dom';

export default function () {
  return new URLSearchParams(useLocation().search);
}
