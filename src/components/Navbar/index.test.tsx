import React from 'react';
import { cleanup, render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/themes/dark';
import Navbar from '.';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Navbar', () => {
  const renderComponent = () =>
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Navbar />
        </ThemeProvider>
      </Provider>
    );
  afterEach(cleanup);
  beforeEach(() => {
    renderComponent();
  });

  it('should haven a Moon Icon', () => {
    expect(screen.getByTestId('Moon')).toBeInTheDocument();
  });
  it('should have a visible toggle theme button', () => {
    expect(screen.getByTestId('theme')).toBeVisible();
  });
  it('should have logo', () => {
    expect(screen.getByText('anibook', { exact: false })).toBeVisible();
  });

  // const resizeWindow = (x:number, y:number) => {
  //   window.innerWidth = x;
  //   window.innerHeight = y;
  //   window.dispatchEvent(new Event('resize'));
  // }

  it("should't have a visible bars button", () => {
    // resizeWindow(1024,1024)
    expect(screen.getByTestId('sidemenu-icon')).toBeVisible();
  });

  it('navbar', () => {
    const style = window.getComputedStyle(document.getElementById('navbar') as HTMLElement);
    console.log(style);
    expect(screen.getByTestId('navbar')).toBeVisible();
  });
});
