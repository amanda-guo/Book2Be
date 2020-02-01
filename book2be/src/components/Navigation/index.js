import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <div>
     <ul>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.BORROW}>Borrow</Link>
      </li>
      <li>
        <Link to={ROUTES.LEND}>Lend</Link>
      </li>
      <li>
        <Link to={ROUTES.SEARCH}>Search</Link>
      </li>
    </ul>
  </div>
);
export default Navigation;