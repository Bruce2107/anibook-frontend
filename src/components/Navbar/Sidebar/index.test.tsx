import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import dark from '../../../styles/themes/dark';
import Sidebar from '.';
import store from '../../../store';

describe('Sidebar', () => {
  const renderComponent = () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={dark}>
          <BrowserRouter>
            <Sidebar themeChange={() => {}} title="dark" visible={false} />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  };
  afterEach(cleanup);
  beforeEach(() => {
    renderComponent();
  });
  it('should have a Moon icon', () => {
    expect(screen.getByTestId('Moon')).toBeInTheDocument();
  });
});
