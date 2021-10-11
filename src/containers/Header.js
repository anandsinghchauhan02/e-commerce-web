import React from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faStore } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const cart = <FontAwesomeIcon icon={faShoppingCart} />
  const store = <FontAwesomeIcon icon={faStore} />
  return(
    <div className="bg-black text-light">
      <div className="d-flex justify-content-center">
        <div>
          <Link to="/" className="nav-link text-light">{store}</Link>
        </div>
        <div>
          <Link to="/" className="nav-link text-light">{cart}</Link>
        </div>
      </div>
    </div>
  )
};

export default Header;
