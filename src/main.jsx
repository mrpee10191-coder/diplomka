import { createRoot } from 'react-dom/client'
import './assets/scss/main.scss'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

import "./i18n/index.js";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
