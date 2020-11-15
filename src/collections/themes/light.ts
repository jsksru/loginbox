import styled, { createGlobalStyle, css } from 'styled-components';

export const COLOR_PRIMARY = '#64A1A5';
export const COLOR_PRIMARY_LIGHT = '#B4D8DA';
export const COLOR_LIGHT = '#F2F2F0';
export const COLOR_DARK = '#333';
export const COLOR_WHITE = '#FFFFFF';
export const COLOR_BLACK = '#000000';
export const SIZE_MAIN = '16px';

export const globalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  html {
    font-size: ${SIZE_MAIN};
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${COLOR_LIGHT};
    color: ${COLOR_DARK};
  }

  img {
    max-width: 100%;
    height: auto;
  }

`;

export const button = css`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1rem;
  text-transform: uppercase;
  border-radius: 10rem;
  border: none;
  cursor: pointer;
`;

export const primaryButton = css`
  ${button}
  background-color: ${COLOR_PRIMARY};
  color: ${COLOR_LIGHT};
`;

export const borderBox = css`
  padding: 1rem;
  border: 1px solid ${COLOR_PRIMARY_LIGHT};
  background-color: ${COLOR_WHITE};
`;

export const title = css`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  color: ${COLOR_PRIMARY};
  letter-spacing: 0.1rem;
  font-family: Arial, Helvetica, sans-serif;
`;

export const inputTextField = css`
  margin: 0;
  font-size: 1rem;
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid ${COLOR_PRIMARY};
  background-color: ${COLOR_PRIMARY_LIGHT};
  outline: none;
  color: ${COLOR_PRIMARY};
`;