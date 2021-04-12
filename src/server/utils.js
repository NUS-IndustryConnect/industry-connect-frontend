import axios from "axios";

export const BASE_URL = `https://winuat11-i.comp.nus.edu.sg/IR3`;
export const LOGIN_ADFS_LINK = "https://vafs.nus.edu.sg/adfs/oauth2/authorize?response_type=code&client_id=INC000002302194&resource=sg_edu_nus_oauth&redirect_uri=http%3A%2F%2Fwinuat11-i.comp.nus.edu.sg%3A3344%2Fstudent%2Flogin";

// ADFS Config
export const client_id = "INC000002302194";
export const redirect_uri = "http://winuat11-i.comp.nus.edu.sg:3344/login";

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
});
