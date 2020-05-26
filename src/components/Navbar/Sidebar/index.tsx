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
import { Container, StyledButton } from './styles';
import openLink from '../../../utils/openLink';

type SideBarProps = {
  title: string;
  themeChange: Function;
  visible: boolean;
};

const Sidebar: React.FC<SideBarProps> = ({ title, themeChange, visible }) => (
  <Container visible={visible} data-testid="sidebar">
    <ul aria-hidden={!visible}>
      <li>
        <StyledButton>
          <GoDeviceDesktop aria-label="Animes" />
        </StyledButton>
      </li>
      <li>
        <StyledButton>
          <FaBookOpen aria-label="Mangás" />
        </StyledButton>
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
          onClick={() => openLink('https://github.com/Bruce2107/anibook-frontend')}
          lang="en"
        >
          <FaGithubAlt aria-label="Github" />
        </StyledButton>
      </li>
      <li>
        <StyledButton onClick={() => themeChange()} as="button">
          {title === 'light' ? (
            <FaSun data-testid="Sun" aria-label="Alterar para escuro" />
          ) : (
            <FaMoon data-testid="Moon" aria-label="Alterar para claro" />
          )}
        </StyledButton>
      </li>
    </ul>
  </Container>
);

export default Sidebar;
