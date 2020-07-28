import React from 'react';
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
import { useTheme } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { TextLogo, Icon, Navbar as LibNavbar } from 'anibook-ui';
import { Container } from './style';
import { ToggleTheme as ToggleThemeAction } from '../../redux/actions/Theme';
import { ToggleSidebar as ToggleSidebarAction } from '../../redux/actions/Sidebar';
import {
  Theme,
  MobileScreen,
  Sidebar as ISidebar,
} from '../../constants/Types';
import Sidebar from './Sidebar';
import openLink from '../../utils/openLink';
import { IconStyle } from './type';

const Navbar: React.FC = () => {
  const appTheme = useTheme();
  const isDarkMode = useSelector((state: Theme) => state.theme.darkMode);
  const isOpen = useSelector((state: ISidebar) => state.sidebar.isOpen);
  const isMobile = useSelector((state: MobileScreen) => state.mobileScreen);
  const IconStyles = IconStyle(appTheme);

  const dispatch = useDispatch();

  const toggleTheme = () => {
    localStorage.setItem('theme', `${isDarkMode ? 'light' : 'dark'}`);
    dispatch(ToggleThemeAction());
  };

  const toggleSideBar = () => {
    dispatch(ToggleSidebarAction());
  };

  const Icons = {
    desktop: [
      <Link to="/list/animes">
        <Icon
          color={IconStyles.color}
          icon={<GoDeviceDesktop aria-label="Animes" />}
          backgroundHover={IconStyles.backgroundHover}
          colorHover={IconStyles.colorHover}
          width={IconStyles.width}
          key="animes"
        />
      </Link>,
      <Link to="/list/mangas">
        <Icon
          color={IconStyles.color}
          icon={<FaBookOpen aria-label="Mangás" />}
          backgroundHover={IconStyles.backgroundHover}
          colorHover={IconStyles.colorHover}
          width={IconStyles.width}
          key="mangas"
        />
      </Link>,
      <a
        href="https://twitter.com/AniBookOficial"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <Icon
          color={IconStyles.color}
          icon={<FaTwitter aria-label="Twitter" />}
          backgroundHover={IconStyles.backgroundHover}
          colorHover={IconStyles.colorHover}
          width={IconStyles.width}
          onClick={() => openLink('https://twitter.com/AniBookOficial')}
          key="twitter"
        />
      </a>,
      <a
        href="https://discord.gg/TsuMHBd"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <Icon
          color={IconStyles.color}
          icon={<FaDiscord aria-label="Discord" />}
          backgroundHover={IconStyles.backgroundHover}
          colorHover={IconStyles.colorHover}
          width={IconStyles.width}
          onClick={() => openLink('https://discord.gg/TsuMHBd')}
          key="discord"
        />
      </a>,
      <a
        href="https://github.com/Bruce2107/anibook-frontend"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <Icon
          color={IconStyles.color}
          icon={<FaGithubAlt aria-label="GitHub" />}
          backgroundHover={IconStyles.backgroundHover}
          colorHover={IconStyles.colorHover}
          width={IconStyles.width}
          onClick={() => {
            openLink('https://github.com/Bruce2107/anibook-frontend');
          }}
          key="github"
        />
      </a>,
      <Icon
        color={IconStyles.color}
        icon={
          appTheme.title === 'light' ? (
            <FaSun aria-label="Alterar para tema escuro" />
          ) : (
            <FaMoon aria-label="Alterar para tema claro" />
          )
        }
        backgroundHover={IconStyles.backgroundHover}
        colorHover={IconStyles.colorHover}
        width={IconStyles.width}
        onClick={() => toggleTheme()}
        key="tema"
      />,
    ],
    mobile: [
      <Icon
        color={IconStyles.color}
        icon={
          isOpen ? (
            <IoMdClose title="Fechar menu" />
          ) : (
            <FaBars title="Abrir menu" />
          )
        }
        backgroundHover={IconStyles.backgroundHover}
        colorHover={IconStyles.colorHover}
        width={IconStyles.width}
        onClick={() => toggleSideBar()}
        key="abrir_menu"
      />,
    ],
  };
  const logo = (
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
  );

  return (
    <Container>
      <LibNavbar
        bgColor={appTheme.colors.primary}
        logo={logo}
        icons={isMobile ? Icons.mobile : Icons.desktop}
      />

      {isMobile && (
        <Sidebar
          title={appTheme.title}
          toggleTheme={toggleTheme}
          visible={isOpen}
        />
      )}
    </Container>
  );
};

export default Navbar;
