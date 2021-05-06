import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Page from '../../../common/Page';
import { getIndustryIndustryThunk } from '../../../redux/industry';
import { loginCompanyWithOTP } from '../../../redux/user/userActions';
import { userSelector } from '../../../redux/user/userSelectors';
import authenticationApi from '../../../server/authenticationApi';
import './index.css';

const ADMIN_EMAIL = "industry@comp.nus.edu.sg"
const ADMIN_EMAIL_LINK = <a href={`mailto:${ADMIN_EMAIL}`}>{ADMIN_EMAIL}</a>

const ERRORS = {
  INVALID_EMAIL: <p>Please enter a valid email address.</p>,
  INVALID_OTP: <p>Please enter a valid OTP.</p>,
  EMAIL_NOT_RECOGNISED: <p>We don't recognise this email address. Please contact {ADMIN_EMAIL_LINK} if you have an issue accessing your account.</p>,
  INCORRECT_OTP: <p>Incorrect OTP. Your account will be locked after 5 incorrect attempts.</p>,
  LOCKED: <p>More than 5 incorrect OTP attempts. Your account has been locked for 24 hours. You may contact {ADMIN_EMAIL_LINK} to unlock it.</p>
}

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [OTP, setOTP] = useState("");
  const [isOTPSent, setOTPSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const history = useHistory();
  const { isLoggedIn } = useSelector(userSelector);
  
  if (isLoggedIn) {
    history.push('/industry/posts');
  }

  const handleSendOTP = async event => {
    event.preventDefault();
    if (isOTPSent) {
      // there are 2 forms on the page
      // so the user may press enter to submit the login form, not this form
      return;
    } else if (email.length > 0) {
      await authenticationApi.sendOTP(email)
        .then(res => {
          setOTPSent(true);
          setErrorMessage(null);
        })
        .catch(error => { // not a registered company user email
          setErrorMessage(ERRORS.EMAIL_NOT_RECOGNISED)
        })
    } else {
      setErrorMessage(ERRORS.INVALID_EMAIL);
    }
  }

  const handleBack = event => { // go from OTP-stage to email address stage
    event.preventDefault();
    setOTP("");
    setOTPSent(false);
  }

  const handleLogin = async event => {
    event.preventDefault();
    if (OTP) {
      const data = {
        email: email,
        otp: OTP
      }
      await dispatch(loginCompanyWithOTP(data)).then(res => {
        dispatch(getIndustryIndustryThunk());
        history.push("/industry/posts");
      }).catch(error => {
        setErrorMessage(ERRORS.INCORRECT_OTP);
      })
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
          autoFocus
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
            autoFocus
            required
          />
          <div className="button-row">
            <button type="button" className="secondary" onClick={handleBack}>Back</button>
            <button type="submit" className="primary right">Login</button>
          </div>
        </form>
        : null }
      { errorMessage || null }
    </Page>
  )
}
