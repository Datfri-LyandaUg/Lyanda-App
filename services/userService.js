import { BASE_URL } from '../config/config';
import http from './httpService';


export function registerUser(data) {
  return http.post(`${BASE_URL}/api/signup`, data);
}

export function reSendOtp(data) {
  return http.post(`${BASE_URL}/api/signup/resend-otp`, data);
}

export function verifyOtp(otp) {
  return http.get(`${BASE_URL}/api/signup/verify/${otp}`);
}

export function updateManufacturer(_id, data) {
  return http.patch(`${BASE_URL}/api/signup/${_id}`, data);
}

