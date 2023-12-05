import React from 'react';
import Header from './components/Header';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import App from "./App";
import { Login } from "./pages/login";
import { Map } from "./pages/map";
import { Register } from "./pages/register";

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/app" element={<App />} />
      <Route path="/map" element={<Map />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
