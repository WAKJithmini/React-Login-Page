import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Axios from 'axios';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';

import {
  Form, Button, Row, Col, Card, Image,
} from 'react-bootstrap';
import { login } from '../Features/userSlice';
import loginImage from './Logo.jpg';
import './login.css';

function LoginForm() {
  const navigate = useNavigate();

  const url = 'http://restapi.adequateshop.com/api/authaccount/login';

  const [details, setDetails] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      login({
        ...details,
        [e.target.name]: e.target.value,
        loggedIn: true,
      }),
    );

    if (!details.email && !details.password) {
      setErrors('Email and Password is required');
    } else if (!details.password) {
      setErrors('Password is required');
    } else if (!details.email) {
      setErrors('Email is required');
    } else {
      Axios.post(url, details).then((res) => {
        setErrors(res.data.message);
        if (details.email !== '' && details.password !== '') {
          navigate('/home', {
            state: {
              email: res.data.data.Name,
            },
          });
        }
      });
    }
  };

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="Login">
      <Card className="loginCard">
        <Row>
          <Col>
            <Image className="loginImage" src={loginImage} />
          </Col>

          <Col>
            <div>
              <Form className="form" onSubmit={submitHandler}>
                <p className="loginLogo">
                  <AccountCircleIcon />
                </p>
                <h1 className="loginTitle">
                  <b>LOGIN</b>
                </h1>
                <Form.Group controlId="email">
                  <Form.Label className="loginLable">Email:</Form.Label>
                  <Form.Control
                    className="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={details.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <br />
                <Form.Group controlId="password">
                  <Form.Label className="loginLable">Password:</Form.Label>
                  <Form.Control
                    className="loginInput"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={details.password}
                    onChange={handleChange}
                  />
                  {errors && <div className="error">{errors}</div>}
                </Form.Group>
                <br />
                <Button
                  className=" loginButton"
                  type="submit"
                  variant="primary"
                  value="Login"
                  onClick={submitHandler}
                >
                  Login
                </Button>
              </Form>

              <Row>
                <Col>
                  <Link to="/forgotpassword">Forgotten password?</Link>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default LoginForm;
