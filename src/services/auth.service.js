import { AUTHENTICATION_API, api } from "../config/api";

export const AuthService = {
  // này là define kiểu cũ rồi
  login(data) {
    return api.post(`${AUTHENTICATION_API}/login`, data);
  },
};
