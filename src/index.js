import React from 'react';
import { render } from 'react-dom';
import './styles/index.css';
import '../node_modules/bulma/css/bulma.css';
import '../node_modules/bulma-extensions/bulma-carousel/dist/bulma-carousel.min.css';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { installAuthInterceptor } from './utils/auth';

installAuthInterceptor();

render((
  <BrowserRouter>
    <App />
  </BrowserRouter> 
), document.getElementById('root'));
