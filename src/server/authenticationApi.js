import { api } from "./utils";

const sendOTP = (email) => {
  console.log(`OTP sent to ${email}`);
  const data = {
    email: email
  }
  return api.post("/account/login/company", data)
		.then(response => response.data)
		.catch(error => { throw error });
}

const verifyOTP = (data) => {
  console.log(`Logging into ${data.email} with ${data.otp}`);
  return api.post("/account/login/company/otp", data)
		.then(response => response.data)
		.catch(error => { throw error });
}

const authenticationApi = {
  sendOTP,
  verifyOTP
}

export default authenticationApi;
