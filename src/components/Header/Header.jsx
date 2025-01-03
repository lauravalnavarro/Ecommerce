import React, { useState } from 'react';
import { Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import '../../styles/components/Header.css';  // Asegúrate de que la ruta sea correcta
import Logo from './Logo';

const Header = () => {
  const [valueTerm, setValueTerm] = useState('');


  return (
    <div className="navbar-root">
      <div className="navbar-appBar">
        <div className="navbar-toolbar">
          <div className="navbar-logo">
            <Link to="/" className="navbar-logo-link">
              <Logo />
            </Link>
          </div>
          <div className="header-rigth">
            <div className="navbar-button">
                <Link to="/checkout-page">
                <div className="navbar-cart-icon">
                    <Badge overlap="rectangular" badgeContent={2} color="secondary">
                    <ShoppingCart fontSize="large" />
                    </Badge>
                </div>
                </Link>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
