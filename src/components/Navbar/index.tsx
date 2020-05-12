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
import openLink from '../../utils/openLink';

const Navbar: React.FC = () => {
  const { title } = useContext(ThemeContext);
  const theme = useSelector((state: Theme) => state.theme.darkMode);
  const dispacth = useDispatch();
  const themeChange = () => {
    localStorage.setItem('theme', `${theme ? 'light' : 'dark'}`);
    dispacth(ToggleTheme());
  };
  const [sideOpen, setSideOpen] = useState(false);
  const toggleSideBar = () => {
    setSideOpen(!sideOpen);
  };
  return (
    <>
      <StyledNavbar data-testid="navbar" id="navbar">
        <StyledLogo data-testid="logo" as="h1">
          AniBook
        </StyledLogo>
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
              onClick={() => openLink('https://twitter.com/AniBookOficial')}
            >
              <FaTwitter title="Twitter" />
            </StyledButton>
          </li>
          <li>
            <StyledButton
              onClick={() => openLink('https://discord.gg/TsuMHBd')}
            >
              <FaDiscord title="Discord" />
            </StyledButton>
          </li>
          <li>
            <StyledButton
              onClick={() => openLink('https://github.com/Bruce2107/anibook-frontend')}
            >
              <FaGithubAlt title="GitHub" />
            </StyledButton>
          </li>
          <li>
            <StyledButton onClick={() => themeChange()} data-testid="theme">
              {title === 'light' ? (
                <FaSun title="Aterar Tema" />
              ) : (
                <FaMoon title="Alterar Tema" />
              )}
            </StyledButton>
          </li>
        </ul>
        <StyledButton
          id="sidemenu-icon"
          data-testid="sidemenu-icon"
          onClick={() => toggleSideBar()}
        >
          {sideOpen ? <IoMdClose /> : <FaBars />}
        </StyledButton>
      </StyledNavbar>
      <Sidebar title={title} themeChange={themeChange} visible={sideOpen} />
    </>
  );
};

export default Navbar;
