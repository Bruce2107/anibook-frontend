import React from 'react';
import {
  cleanup, render, screen, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

afterEach(cleanup);

beforeEach(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
});

describe('Navbar', () => {
  it('should toggle theme', () => {
    expect(screen.getByTestId('Sun')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('theme'));
    expect(screen.getByTestId('Moon')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('theme'));
    expect(screen.getByTestId('Sun')).toBeInTheDocument();
  });

  it('should open side menu', () => {
    expect(screen.getByTestId('sidebar')).toHaveStyle(
      'transform: translateX(-100%);',
    );
    fireEvent.click(screen.getByTestId('sidemenu-icon'));
    expect(screen.getByTestId('sidebar')).toHaveStyle(
      'transform: translateX(0);',
    );
    fireEvent.click(screen.getByTestId('sidemenu-icon'));
    expect(screen.getByTestId('sidebar')).toHaveStyle(
      'transform: translateX(-100%);',
    );
  });

  it('should open side menu and toggle theme', () => {
    fireEvent.click(screen.getByTestId('sidemenu-icon'));
    expect(screen.getByTestId('sidebar')).toHaveStyle(
      'transform: translateX(0);',
    );
    fireEvent.click(screen.getByTestId('theme'));
    expect(screen.getByTestId('Moon')).toBeInTheDocument();
  });
});
