import { api, client_id, redirect_uri } from "./utils";

const fetchAuth = async (code) => {
  console.log("posting to BE...")
  const data = {
    code: code,
    client_id: client_id,
    redirect_uri: redirect_uri,
    grant_type: "authorization_code"
  }
  console.log(data)
  await api.post("/account/login/soc", data)
  .then(res => {
    // TODO: wait for backend to host the updated src with adfs
    console.log(res);
    return res.data;
  }).catch(err => {
    console.log("User not authenticated");
    throw err;
  })
}

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
  fetchAuth,
  sendOTP,
  verifyOTP
}

export default authenticationApi;
