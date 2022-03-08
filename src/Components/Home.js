import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Home() {
  const Logout = (state) => {
    state.user = null;
  };

  const location = useLocation();

  return (
    <div className="logout">
      <h1>
        Welcome
        {' '}
        <span className="email">{location.state.email}</span>
      </h1>
      <Link to="/">
        <Button
          className=" loginButton"
          type="submit"
          variant="primary"
          onClick={Logout}
        >
          Logout
        </Button>
      </Link>
    </div>
  );
}

export default Home;
