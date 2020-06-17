import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import dark from '../../../styles/themes/dark';
import Sidebar from '.';

describe('Sidebar', () => {
  const renderComponent = () => render(
    <ThemeProvider theme={dark}>
      <BrowserRouter>
        <Sidebar themeChange={() => {}} title="dark" visible={false} />
      </BrowserRouter>
    </ThemeProvider>,
  );
  afterEach(cleanup);
  beforeEach(() => {
    renderComponent();
  });
  it('should have a Moon icon', () => {
    expect(screen.getByTestId('Moon')).toBeInTheDocument();
  });

  it('should use the dark theme', () => {
    const headerClass = Sidebar({
      themeChange: () => {},
      title: 'dark',
      visible: false,
    })?.type.styledComponentId;

    const MyHeaderRoots = document.getElementsByClassName(headerClass);
    const style = window.getComputedStyle(MyHeaderRoots[0]);
    expect(style.backgroundColor).toBe('rgb(51, 51, 51)');
  });
});
