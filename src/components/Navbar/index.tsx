import React from 'react';
import Switch from 'react-switch';
import { StyledNavbar, StyledLogo } from './styles';
interface Props {
  toggleTheme(): void;
}
const Navbar: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <StyledNavbar>
      <StyledLogo>AniBook</StyledLogo>
      <Switch onChange={toggleTheme} checked={false} />
    </StyledNavbar>
  );
};

export default Navbar;
