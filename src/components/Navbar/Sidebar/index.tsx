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

type SideBarProps = {
  title: string;
  themeChange: Function;
  visible: boolean;
};

const Sidebar: React.FC<SideBarProps> = ({ title, themeChange, visible }) => {
  return (
    <Container visible={visible} data-testid="sidebar">
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
          <StyledButton onClick={() => themeChange()} as="button">
            {title === 'light' ? (
              <FaSun title="Aterar Tema" data-testid="Sun" />
            ) : (
              <FaMoon title="Alterar Tema" data-testid="Moon" />
            )}
          </StyledButton>
        </li>
      </ul>
    </Container>
  );
};

export default Sidebar;
