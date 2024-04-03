import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import style from "./style.css"
import Dashboard from './Dashboard.css';
import { BrowserRouter } from "react-router-dom";
import { Splide } from '@splidejs/react-splide';
import {bootstrap} from "../node_modules/bootstrap/dist/css/bootstrap.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

  <BrowserRouter>
  <App/>
  </BrowserRouter>
  </>
);

