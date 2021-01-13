const sendOTP = email => {
  console.log(`OTP sent to ${email}`);
  return Promise.resolve();
}

const login = (email, OTP) => {
  console.log(`Logging into ${email} with ${OTP}`);
  return Promise.resolve();
}

const authApi = {
  sendOTP,
  login
}

export default authApi;