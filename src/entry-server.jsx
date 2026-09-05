import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';

import App from './App.jsx';
import i18n from './app/internationalization/i18n.js';

export async function render() {
  await i18n.changeLanguage('pt');

  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
