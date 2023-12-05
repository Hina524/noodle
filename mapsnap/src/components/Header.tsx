import React from 'react';
import LOGO from './logo192.png'
import { Link } from 'react-router-dom';
import './Header.css'; // Headerコンポーネントに対応するCSSファイルをインポート

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="app">
        <img src={LOGO} className="AppLogo" alt="logo" />
        <h2 className="logoname">
          Map Snap
        </h2>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link className='MAP' to="/map">MAP</Link>
          </li>
          <li>
            <Link className='REGISTER' to="/register">SAVE</Link>
          </li>
          <li>
            <Link to="/gallery">GALLERY</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
