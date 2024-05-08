import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../config/path";
import { useAuth } from "../contexts/authContext";

export default function SignIn() {
  const [form, setForm] = useState({});
  const handleInputForm = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const { login } = useAuth();
  const navigate = useNavigate();
  const _onLogin = () => {
    login(form);
    navigate(PATH.profile.index);
  };
  return (
    <main id="main">
      <div className="auth">
        <div className="wrap">
          {/* login-form */}
          <div className="ct_login">
            <h2 className="title">Đăng nhập</h2>
            <input
              onChange={(e) => handleInputForm("email", e.target.value)}
              type="text"
              placeholder="Email / Số điện thoại"
            />
            <input
              onChange={(e) => handleInputForm("password", e.target.value)}
              type="password"
              placeholder="Mật khẩu"
            />
            <div className="remember">
              <label className="btn-remember">
                <div>
                  <input type="checkbox" />
                </div>
                <p>Nhớ mật khẩu</p>
              </label>
              <a href="./reset-password.html" className="forget">
                Quên mật khẩu?
              </a>
            </div>
            <button onClick={_onLogin} className="btn rect main btn-login">
              đăng nhập
            </button>
            <div className="text-register">
              <span>Nếu bạn chưa có tài khoản?</span>{" "}
              <a className="link" href="./signup.html">
                Đăng ký
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
