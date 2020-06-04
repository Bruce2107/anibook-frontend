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
});
