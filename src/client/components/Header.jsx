import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import redeemLogo from '../assets/images/redeemLogo.png';

export const Header = () => (
  <Container>
    <div className="ui secondary menu pv4">
      <Link to="#">
        <img src={redeemLogo} alt="logo" className="appLogo" />
      </Link>
      <Link to="#" className="item f2 fw8">
        Sermons
      </Link>
      <Link to="#" className="item f2 fw8">
        Contact us
      </Link>
      <Link to="#" className="item f2 fw8">
        Stream service
      </Link>
      <Link to="#" className="item f2 fw8">
        Member login
      </Link>
    </div>
  </Container>
);

export default Header;
