import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Page from '../../../common/Page';
import { sendOTP, login } from '../../api';
import './index.css';

const ADMIN_EMAIL = "placeholder@nus.edu.sg"
const ADMIN_EMAIL_LINK = <a href={`mailto:${ADMIN_EMAIL}`}>{ADMIN_EMAIL}</a>

const ERRORS = {
  INVALID_EMAIL: <p>Please enter a valid email address.</p>,
  INVALID_OTP: <p>Please enter a valid OTP.</p>,
  NOT_RECOGNISED: <p>We don't recognise this email address. Would you like to request for an account with {ADMIN_EMAIL_LINK} instead?</p>,
  INCORRECT: <p>Incorrect OTP. Your account will be locked after 5 incorrect attempts.</p>,
  LOCKED: <p>More than 5 incorrect OTP attempts. Your account has been locked for 24 hours. You may contact {ADMIN_EMAIL_LINK} to unlock it.</p>
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [OTP, setOTP] = useState("");
  const [isOTPSent, setOTPSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const history = useHistory();

  const handleSendOTP = event => {
    event.preventDefault();
    if (email.length > 0) {
      sendOTP(email).then(() => {
        setOTPSent(true);
        setErrorMessage(null);
      });
    } else {
      setErrorMessage(ERRORS.INVALID_EMAIL);
    }
  }

  const handleBack = event => { // go from OTP-stage to email address stage
    event.preventDefault();
    setOTP("");
    setOTPSent(false);
  }

  const handleLogin = event => {
    event.preventDefault();
    if (OTP) {
      login(email, OTP).then(() => {
        history.push("/industry");
      });
    } else {
      setErrorMessage(ERRORS.INVALID_OTP);
    }
  }
  return (
    <Page title="Industry Posts" className="login-container">
      <h3>Login</h3>
      <form onSubmit={handleSendOTP}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email address"
          disabled={isOTPSent}
          required
        />
        { !isOTPSent ? 
          <input type="submit" value="Send OTP" />
          : null }
      </form>
      { isOTPSent ?
        <form onSubmit={handleLogin}>
          <p>An email with your OTP has been sent to the email address <b>{email}</b>.</p>
          <input
            type="text"
            value={OTP}
            onChange={e => setOTP(e.target.value)}
            placeholder="OTP"
            required
          />
          <div className="button-row">
            <button className="secondary" onClick={handleBack}>Back</button>
            <button className="primary" onClick={handleLogin}>Login</button>
          </div>
        </form>
        : null }
      { errorMessage || null}
    </Page>
  )
}