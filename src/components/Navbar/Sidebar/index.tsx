import React from 'react';
import {
  FaDiscord,
  FaTwitter,
  FaGithubAlt,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import { Sidebar as LibSidebar, Icon } from 'anibook-ui';
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { IoMdSearch } from 'react-icons/io';
import { Container } from './styles';
import openLink from '../../../utils/openLink';
import { IconStyle } from '../type';
import sidebar from '../../../recoil/atoms/sidebar';
import { useDarkMode } from '../../../hooks/theme';

const Sidebar: React.FC = () => {
  const appTheme = useTheme();
  const [sidebarState] = useRecoilState(sidebar);
  // const toggleSideBar = () => {
  //   setSidebarState(!sidebarState);
  // };
  const { theme, setTheme } = useDarkMode();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  const IconStyles = IconStyle(appTheme);

  const Icons = [
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
    // <Link to="/list/animes">
    //   <Icon
    //     color={IconStyles.color}
    //     icon={<GoDeviceDesktop aria-label="Animes" />}
    //     backgroundHover={IconStyles.backgroundHover}
    //     colorHover={IconStyles.colorHover}
    //     width={IconStyles.width}
    //     key="animes"
    //   />
    // </Link>,
    // <Link to="/list/mangas">
    //   <Icon
    //     color={IconStyles.color}
    //     icon={<FaBookOpen aria-label="Mangás" />}
    //     backgroundHover={IconStyles.backgroundHover}
    //     colorHover={IconStyles.colorHover}
    //     width={IconStyles.width}
    //     key="mangas"
    //   />
    // </Link>,
    <a
      href="https://twitter.com/AniBookOficial"
      onClick={(e) => {
        e.preventDefault();
      }}
      key="twitter_sidebar"
    >
      <Icon
        color={IconStyles.color}
        icon={<FaTwitter aria-label="Twitter" />}
        backgroundHover={IconStyles.backgroundHover}
        colorHover={IconStyles.colorHover}
        width={IconStyles.width}
        onClick={() => openLink('https://twitter.com/AniBookOficial')}
      />
    </a>,
    <a
      href="https://discord.gg/TsuMHBd"
      onClick={(e) => {
        e.preventDefault();
      }}
      key="discord_sidebar"
    >
      <Icon
        color={IconStyles.color}
        icon={<FaDiscord aria-label="Discord" />}
        backgroundHover={IconStyles.backgroundHover}
        colorHover={IconStyles.colorHover}
        width={IconStyles.width}
        onClick={() => openLink('https://discord.gg/TsuMHBd')}
      />
    </a>,
    <a
      href="https://github.com/Bruce2107/anibook-frontend"
      onClick={(e) => {
        e.preventDefault();
      }}
      key="github_sidebar"
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
      />
    </a>,
    <Icon
      color={IconStyles.color}
      icon={
        theme === 'light' ? (
          <FaSun aria-label="Alterar para tema escuro" />
        ) : (
          <FaMoon aria-label="Alterar para tema claro" />
        )
      }
      backgroundHover={IconStyles.backgroundHover}
      colorHover={IconStyles.colorHover}
      width={IconStyles.width}
      onClick={toggleTheme}
      key="alterarTema_sidebar"
    />,
  ];
  return (
    <Container visible={sidebarState} role="complementary">
      <LibSidebar
        bgColor={appTheme.colors.primary}
        icons={Icons}
        height="100vh"
        width="100vw"
        opacity={0.9}
        gap="20px 0"
      />
    </Container>
  );
};

export default Sidebar;
