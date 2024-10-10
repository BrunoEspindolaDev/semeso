import { createGlobalStyle } from 'styled-components';

import '@fontsource/geist-sans/400.css';
import '@fontsource/geist-sans/600.css';
import '@fontsource/geist-sans/800.css';

export default createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Geist Sans', sans-serif;
  };

  ::-webkit-scrollbar-track {
    border-radius: 6px;
    background-color: #161616;
  };

  ::-webkit-scrollbar {
    width: 10px;
  };

  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.1);
  };
`;
