import { jsx as _jsx } from "react/jsx-runtime";
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProviders';
import App from './app/App';
import 'app/styles/index.scss';
import 'shared/config/i18n/i18n';
import { StoreProvider } from 'app/providers/StoreProvider';
render(_jsx(StoreProvider, { children: _jsx(BrowserRouter, { children: _jsx(ThemeProvider, { children: _jsx(App, {}) }) }) }), document.getElementById('root'));
