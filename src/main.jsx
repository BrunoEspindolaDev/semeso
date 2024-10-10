import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import GlobalStyles from './GlobalStyles.js';

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <GlobalStyles />
  </>
);
