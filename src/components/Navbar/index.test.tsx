import React from 'react';
import {
  cleanup,
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
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

  it('should have 50px of height',()=>{
    fireEvent.mouseOver(screen.getByTestId('theme'))
    expect(screen.getByTestId('theme')).toHaveStyle('height: 50px')
  })

});