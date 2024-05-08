import { createContext, useContext, useEffect, useState } from "react";
import { AuthService } from "../../services/auth.service";
import { message } from "antd";

const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  //   Lắng nghe mỗi lần user thay đổi
  useEffect(() => {
    console.log("User changed: ", user);
  }, [user]);

  const login = async (data) => {
    try {
      const res = await AuthService.login(data);
      if (res?.data) {
        setUser(res.data);
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        message.error(error?.response?.data?.message);
      }
    }
  };
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
