import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'     
import {Provider} from 'react-redux';                                                                                                                                                                                                                                                                       
import App from './App';
import store from './redux/store';
import ScrollToTop from './components/ScrollTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop/>
      <App />
    </BrowserRouter>
  </Provider>
);

