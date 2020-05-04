import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import dark from '../../../styles/themes/dark';
import Sidebar from '.';

describe('Sidebar', () => {
  const renderComponent = () =>
    render(
      <ThemeProvider theme={dark}>
        <Sidebar themeChange={() => {}} title="dark" visible={false} />
      </ThemeProvider>
    );
  afterEach(cleanup);
  beforeEach(() => {
    renderComponent();
  });
  it('should have a Moon icon', () => {
    expect(screen.getByTestId('Moon')).toBeInTheDocument();
  });
//   it('sidebar', () => {
//     const headerClass = Sidebar({themeChange = ()=>{}, })?.type.styledComponentId;
//     const MyHeaderRoots = document.getElementsByClassName(headerClass);
//     const style = window.getComputedStyle(MyHeaderRoots[0])
//     console.log(style)
//     expect(screen.getByTestId('navbar')).toBeVisible();
//   });
});
