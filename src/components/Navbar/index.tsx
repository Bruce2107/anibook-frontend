import React, { useContext } from 'react';
import {
  FaSun,
  FaMoon,
  FaDiscord,
  FaTwitter,
  FaGithubAlt,
  FaBookOpen,
  FaHome,
} from 'react-icons/fa';
import { GoDeviceDesktop } from 'react-icons/go';
import { StyledNavbar, StyledLogo, StyledButton } from './styles';
import { ThemeContext } from 'styled-components';

interface Props {
  toggleTheme(): void;
}
const Navbar: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);
  return (
    <>
      <StyledNavbar>
        <StyledLogo>AniBook</StyledLogo>
        <div>
          <StyledButton>
            <FaHome title="Home" />
          </StyledButton>
          <StyledButton>
            <GoDeviceDesktop title="Animes" />
          </StyledButton>
          <StyledButton>
            <FaBookOpen title="Mangás" />
          </StyledButton>
          <StyledButton
            href="https://twitter.com/AniBookOficial"
            target="_blank"
          >
            <FaTwitter title="Twitter" />
          </StyledButton>
          <StyledButton href="https://discord.gg/TsuMHBd" target="_blank">
            <FaDiscord title="Discord" />
          </StyledButton>
          <StyledButton
            href="https://github.com/Bruce2107/anibook-frontend"
            target="_blank"
          >
            <FaGithubAlt title="GitHub" />
          </StyledButton>
          <StyledButton onClick={toggleTheme}>
            {title === 'light' ? (
              <FaMoon title="Alterar Tema" />
            ) : (
              <FaSun title="Aterar Tema" />
            )}
          </StyledButton>
        </div>
      </StyledNavbar>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Navbar;
