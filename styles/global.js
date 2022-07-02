import { css } from 'styled-components';

const globalCSS = css`
  html {
    height: 100%;
    font-family: 'Roboto', Arial, sans-serif;
    overflow-x: hidden;
  }

  body {
    color: #333333;
    overflow-x: hidden;
  }

  p {
    margin: 0;
  }

  ul,
  li {
    padding: 0;
    list-style-type: none;
    cursor: pointer;
  }
`;

export default globalCSS;
