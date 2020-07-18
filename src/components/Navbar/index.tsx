import React, { useContext } from 'react';
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
import { Link } from 'react-router-dom';
import { GoDeviceDesktop } from 'react-icons/go';
import { ThemeContext, useTheme } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { TextLogo, Icon } from 'anibook-ui';
import { StyledNavbar, StyledButton } from './styles';
import { ToggleTheme } from '../../redux/actions/Theme';
import { ToggleSidebar as ToggleSidebarAction } from '../../redux/actions/Sidebar';
import {
  Theme,
  MobileScreen,
  Sidebar as ISidebar,
} from '../../constants/Types';
import Sidebar from './Sidebar';
import openLink from '../../utils/openLink';

const Navbar: React.FC = () => {
  const { title } = useContext(ThemeContext);
  const appTheme = useTheme();
  const theme = useSelector((state: Theme) => state.theme.darkMode);
  const isOpen = useSelector((state: ISidebar) => state.sidebar.isOpen);
  const isMobile = useSelector((state: MobileScreen) => state.mobileScreen);

  const dispatch = useDispatch();

  const themeChange = () => {
    localStorage.setItem('theme', `${theme ? 'light' : 'dark'}`);
    dispatch(ToggleTheme());
  };

  const toggleSideBar = () => {
    dispatch(ToggleSidebarAction());
  };

  return (
    <>
      <StyledNavbar data-testid="navbar" id="navbar">
        <Link to="/">
          <TextLogo
            isGradient
            text="AniBook"
            fontStyle="oblique"
            lineHeight="1.6rem"
            size="1.6rem"
            gradient={`-webkit-linear-gradient(90deg,${appTheme.colors.upColor},${appTheme.colors.downColor})`}
            gradientHover={`-webkit-linear-gradient(90deg,${appTheme.colors.upColorInverted},${appTheme.colors.downColorInverted})`}
            weight="700"
          />
        </Link>
        <ul>
          <li>
            <Link to="/list/animes">
              <StyledButton>
                <GoDeviceDesktop aria-label="Animes" />
              </StyledButton>
            </Link>
          </li>
          <li>
            <Link to="/list/mangas">
              <StyledButton>
                <FaBookOpen aria-label="Mangás" />
              </StyledButton>
            </Link>
          </li>
          <li>
            <StyledButton
              onClick={() => openLink('https://twitter.com/AniBookOficial')}
              lang="en"
            >
              <FaTwitter aria-label="Twitter" />
            </StyledButton>
          </li>
          <li>
            <StyledButton
              onClick={() => openLink('https://discord.gg/TsuMHBd')}
              lang="en"
            >
              <FaDiscord aria-label="Discord" />
            </StyledButton>
          </li>
          <li>
            <StyledButton
              onClick={() =>
                openLink('https://github.com/Bruce2107/anibook-frontend')
              }
              lang="en"
            >
              <FaGithubAlt aria-label="GitHub" />
            </StyledButton>
          </li>
          <li>
            <StyledButton onClick={() => themeChange()} data-testid="theme">
              {title === 'light' ? (
                <FaSun aria-label="Alterar para tema escuro" />
              ) : (
                <FaMoon aria-label="Alterar para tema claro" />
              )}
            </StyledButton>
          </li>
        </ul>
        <StyledButton
          id="sidemenu-icon"
          data-testid="sidemenu-icon"
          onClick={() => toggleSideBar()}
        >
          {isOpen ? (
            <IoMdClose title="Fechar menu" />
          ) : (
            <FaBars title="Abrir menu" />
          )}
        </StyledButton>
      </StyledNavbar>
      {isMobile && (
        <Sidebar title={title} themeChange={themeChange} visible={isOpen} />
      )}
    </>
  );
};

export default Navbar;
