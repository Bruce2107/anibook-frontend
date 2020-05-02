import React, { useContext, useState } from 'react';
import {
  FaSun,
  FaMoon,
  FaDiscord,
  FaTwitter,
  FaGithubAlt,
  FaBookOpen,
  FaBars,
} from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { GoDeviceDesktop } from 'react-icons/go';
import { ThemeContext } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { StyledNavbar, StyledLogo, StyledButton } from './styles';
import { ToggleTheme } from '../../redux/actions/Theme';
import { Theme } from '../../constants/Types';
import Sidebar from './Sidebar';

const Navbar: React.FC = () => {
  const { title } = useContext(ThemeContext);
  const tema = useSelector((state: Theme) => state.theme.darkMode);
  const dispacth = useDispatch();
  const themeChange = () => {
    localStorage.setItem('theme', `${tema ? 'light' : 'dark'}`);
    dispacth(ToggleTheme());
  };
  const [sideOpen, setSideOpen] = useState(false);
  const toggleSideBar = () => {
    setSideOpen(!sideOpen);
  };
  return (
    <>
      <Sidebar title={title} themeChange={themeChange} visible={sideOpen} />
      <StyledNavbar>
        <StyledLogo title="Anibook" data-testid="logo">AniBook</StyledLogo>
        <ul>
          <li>
            <StyledButton>
              <GoDeviceDesktop title="Animes" />
            </StyledButton>
          </li>
          <li>
            <StyledButton>
              <FaBookOpen title="Mangás" />
            </StyledButton>
          </li>
          <li>
            <StyledButton
              href="https://twitter.com/AniBookOficial"
              target="_blank"
            >
              <FaTwitter title="Twitter" />
            </StyledButton>
          </li>
          <li>
            <StyledButton href="https://discord.gg/TsuMHBd" target="_blank">
              <FaDiscord title="Discord" />
            </StyledButton>
          </li>
          <li>
            <StyledButton
              href="https://github.com/Bruce2107/anibook-frontend"
              target="_blank"
            >
              <FaGithubAlt title="GitHub" />
            </StyledButton>
          </li>
          <li>
            <StyledButton
              onClick={() => themeChange()}
              as="button"
              data-testid="theme"
            >
              {title === 'light' ? (
                <FaMoon title="Alterar Tema" />
              ) : (
                <FaSun title="Aterar Tema" />
              )}
            </StyledButton>
          </li>
        </ul>
        <StyledButton id="bars" onClick={() => toggleSideBar()}>
          {sideOpen ? <IoMdClose /> : <FaBars />}
        </StyledButton>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
