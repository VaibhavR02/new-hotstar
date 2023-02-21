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
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Password does not match');
      return;
    }
    try {
      const { data } = await axios.post('/api/users/signup', {
        name,
        email,
        password,
        confirmPassword,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });

      localStorage.setItem('userInfo', JSON.stringify(data));
      toast.success('successfull created account');
      navigate(redirect || '/');
    } catch (err) {
      toast.error('invalid email or password');
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
        <title>Sign Up</title>
      </Helmet>
      <div className="box2">
        <form autoComplete="off" onSubmit={submitHandler}>
          <h2>Sign Up</h2>
          <div className="inputBox">
            <input
              type="text"
              required="required"
              onChange={(e) => setName(e.target.value)}
            />
            <span>Name</span>
            <i></i>
          </div>

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

          <div className="inputBox">
            <input
              type="password"
              required="required"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span>Confirm Password</span>
            <i></i>
          </div>

          <div className="links">
            <Link>&nbsp;</Link>
            <Link to={`/signin?redirect=${redirect}`}> Sign In</Link>
          </div>
          <input type="submit" className="get-bundle-btn" value="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default Signin;
