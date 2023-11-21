import React from 'react';
import {
  FaSun,
  FaMoon,
  FaDiscord,
  FaTwitter,
  FaGithubAlt,
  FaBars,
  FaBookOpen,
} from 'react-icons/fa';
import { IoMdClose, IoMdSearch, IoMdLogIn } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { TextLogo, Icon, Navbar as LibNavbar } from 'anibook-ui';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Container } from './style';
import Sidebar from './Sidebar';
import openLink from '../../utils/openLink';
import { IconStyle } from './type';
import { useDarkMode } from '../../hooks/theme';
import mobile from '../../recoil/atoms/mobile';
import sidebar from '../../recoil/atoms/sidebar';
import { useLogin } from '../../hooks/login';

const Navbar: React.FC = () => {
  const appTheme = useTheme();
  const isMobile = useRecoilValue(mobile);
  const IconStyles = IconStyle(appTheme);
  const { theme, setTheme } = useDarkMode();
  const { user } = useLogin();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  const [sidebarState, setSidebarState] = useRecoilState(sidebar);
  const toggleSideBar = () => {
    setSidebarState(!sidebarState);
  };

  const Icons = {
    desktop: [
      <Link to="/search">
        <Icon
          color={IconStyles.color}
          icon={<IoMdSearch aria-label="Pesquisar" />}
          backgroundHover={IconStyles.backgroundHover}
          colorHover={IconStyles.colorHover}
          width={IconStyles.width}
          key="search"
        />
      </Link>,
      <Link to={user.name ? '/profile' : '/login'}>
        <Icon
          color={IconStyles.color}
          icon={user.name ? <CgProfile aria-label="Perfil" /> : <IoMdLogIn aria-label="Login" />}
          backgroundHover={IconStyles.backgroundHover}
          colorHover={IconStyles.colorHover}
          width={IconStyles.width}
          key="Perfil"
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
        onClick={toggleTheme}
        key="tema"
      />,
    ],
    mobile: [
      <Icon
        color={IconStyles.color}
        icon={
          sidebarState ? (
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

      {isMobile && <Sidebar />}
    </Container>
  );
};

export default Navbar;
