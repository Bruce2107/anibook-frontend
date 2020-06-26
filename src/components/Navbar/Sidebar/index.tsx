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
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, StyledButton } from './styles';
import openLink from '../../../utils/openLink';
import { ToggleSidebar } from '../../../redux/actions/Sidebar';

type SideBarProps = {
  title: string;
  themeChange: Function;
  visible: boolean;
};

const Sidebar: React.FC<SideBarProps> = ({ title, themeChange, visible }) => {
  const dispacth = useDispatch();

  const toggleSideBar = () => {
    dispacth(ToggleSidebar());
  };

  return (
    <Container visible={visible} data-testid="sidebar" role="complementary">
      <ul aria-hidden={!visible}>
        <li>
          <Link to="/list/animes" onClick={() => toggleSideBar()}>
            <StyledButton>
              <GoDeviceDesktop aria-label="Animes" />
            </StyledButton>
          </Link>
        </li>
        <li>
          <Link to="/list/mangas" onClick={() => toggleSideBar()}>
            <StyledButton>
              <FaBookOpen aria-label="Mangás" />
            </StyledButton>
          </Link>
        </li>
        <li>
          <StyledButton
            role="link"
            onClick={() => openLink('https://twitter.com/AniBookOficial')}
            lang="en"
          >
            <FaTwitter aria-label="Twitter" />
          </StyledButton>
        </li>
        <li>
          <StyledButton
            role="link"
            onClick={() => openLink('https://discord.gg/TsuMHBd')}
            lang="en"
          >
            <FaDiscord aria-label="Discord" />
          </StyledButton>
        </li>
        <li>
          <StyledButton
            role="link"
            onClick={() => {
              openLink('https://github.com/Bruce2107/anibook-frontend');
            }}
            lang="en"
          >
            <FaGithubAlt aria-label="Github" />
          </StyledButton>
        </li>
        <li>
          <StyledButton onClick={() => themeChange()} as="button">
            {title === 'light' ? (
              <FaSun data-testid="Sun" aria-label="Alterar para tema escuro" />
            ) : (
              <FaMoon data-testid="Moon" aria-label="Alterar para tema claro" />
            )}
          </StyledButton>
        </li>
      </ul>
    </Container>
  );
};

export default Sidebar;
