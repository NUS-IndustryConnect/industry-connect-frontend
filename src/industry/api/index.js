export const sendOTP = email => {
  console.log(`OTP sent to ${email}`);
  return Promise.resolve();
}

export const login = (email, OTP) => {
  console.log(`Logging into ${email} with ${OTP}`);
  return Promise.resolve();
}