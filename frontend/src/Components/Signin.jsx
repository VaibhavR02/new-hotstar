import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/signin.css';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Store } from '../Store';
const Signin = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/home';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/users/signin', {
        email,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });

      localStorage.setItem('userInfo', JSON.stringify(data));
      toast.success('sign in successfull');
      navigate(redirect || '/');
    } catch (err) {
      toast.error('invalid email or password');
      // alert('invalid email or password');
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <div className="body">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <div className="box">
        <form autoComplete="off" onSubmit={submitHandler}>
          <h2>Sign in</h2>
          <div className="inputBox">
            <input
              type="email"
              required="required"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>Email</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="password"
              required="required"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Password</span>
            <i></i>
          </div>
          <div className="links">
            <Link to="">Forgot Password ?</Link>
            <Link to={`/signup?redirect=${redirect}`}>Signup</Link>
          </div>
          <input type="submit" className="get-bundle-btn" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Signin;
