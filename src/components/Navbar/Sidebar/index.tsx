import React from 'react';
import {
  FaDiscord,
  FaBookOpen,
  FaTwitter,
  FaGithubAlt,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import { GoDeviceDesktop } from 'react-icons/go';
import { Sidebar as LibSidebar, Icon } from 'anibook-ui';
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container } from './styles';
import openLink from '../../../utils/openLink';
import { ToggleSidebar } from '../../../redux/actions/Sidebar';
import { IconStyle } from '../type';

type SideBarProps = {
  title: string;
  toggleTheme: () => void;
  visible: boolean;
};

const Sidebar: React.FC<SideBarProps> = ({ title, toggleTheme, visible }) => {
  const appTheme = useTheme();
  const dispacth = useDispatch();
  const toggleSideBar = () => {
    dispacth(ToggleSidebar());
  };
  const IconStyles = IconStyle(appTheme);

  const Icons = [
    <Link to="/list/animes" key="animes_sidebar">
      <Icon
        color={IconStyles.color}
        icon={<GoDeviceDesktop aria-label="Animes" />}
        backgroundHover={IconStyles.backgroundHover}
        colorHover={IconStyles.colorHover}
        width={IconStyles.width}
        onClick={() => toggleSideBar()}
      />
    </Link>,
    <Link to="/list/mangas" key="mangas_sidebar">
      <Icon
        color={IconStyles.color}
        icon={<FaBookOpen aria-label="Mangás" />}
        backgroundHover={IconStyles.backgroundHover}
        colorHover={IconStyles.colorHover}
        width={IconStyles.width}
        onClick={() => toggleSideBar()}
      />
    </Link>,
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
        title === 'light' ? (
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
    <Container visible={visible} role="complementary">
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
