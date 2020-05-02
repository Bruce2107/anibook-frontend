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
  it('should have a Bars Icon', () => {
    expect(screen.getByTestId('Sun')).toBeInTheDocument();
  });
  it('should have toggle theme button', () => {
    expect(screen.getByTestId('theme')).toBeVisible();
  });
  it('should have logo', () => {
    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });
});
