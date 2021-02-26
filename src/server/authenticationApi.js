const sendOTP = email => {
  console.log(`OTP sent to ${email}`);
  return Promise.resolve();
}

const login = (email, OTP) => {
  console.log(`Logging into ${email} with ${OTP}`);
  return Promise.resolve();
}

const authenticationApi = {
  sendOTP,
  login
}

export default authenticationApi;
