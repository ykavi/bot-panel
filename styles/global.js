import { css } from 'styled-components';

const globalCSS = css`
  ::-webkit-scrollbar {
    display: none;
  }

  html {
    height: 100%;
    font-family: 'Roboto', Arial, sans-serif;
    overflow: hidden;
  }

  body {
    color: #333333;
    overflow: hidden;
  }

  p {
    margin: 0 !important;
  }

  ul,
  li {
    padding: 0;
    list-style-type: none;
    cursor: pointer;
  }
`;

export default globalCSS;
