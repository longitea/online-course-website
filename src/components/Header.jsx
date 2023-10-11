import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const onOpenMenu = () => {
    document.body.classList.toggle("menu-is-show");
  };
  const onCloseMenu = () => {
    document.body.classList.remove("menu-is-show");
  };

  return (
    <div>
      <header id="header">
        <div className="wrap">
          <div className="menu-hambeger" onClick={onOpenMenu}>
            <div className="button">
              <span />
              <span />
              <span />
            </div>
            <span className="text">menu</span>
          </div>
          <Link to="/" className="logo">
            <img src="/img/logo.svg" alt="" />
            <h1>Spacedev</h1>
          </Link>
          <div className="right">
            <div className="have-login">
              <div className="account">
                <Link to="/profile" className="info">
                  <div className="name">Đặng Thuyền Vương</div>
                  <div className="avatar">
                    <img src="/img/avt.png" alt="" />
                  </div>
                </Link>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <Link to="/profile/course">Khóa học của tôi</Link>
                <Link to="/profile">Thông tin tài khoản</Link>
                <a to="#">Đăng xuất</a>
              </div>
            </div>
            {/* <div class="not-login bg-none">
              <a to="#" class="btn-register">Đăng nhập</a>
              <a to="login.html" class="btn main btn-open-login">Đăng ký</a>
          </div> */}
          </div>
        </div>
        <div className="progress" />
      </header>
      <nav className="nav">
        <ul>
          <li>
            <NavLink onClick={onCloseMenu} to="/signin">
              Đăng ký / Đăng nhập
            </NavLink>
          </li>
          <li>
            <NavLink onClick={onCloseMenu} to="/profile" className="account">
              <div className="avatar">
                <img src="/img/avt.png" alt="" />
              </div>
              <div className="name">Đặng Thuyền Vương</div>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={onCloseMenu} to="/">
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink onClick={onCloseMenu} to="/team">
              Spacedev Team
            </NavLink>
          </li>
          <li>
            <NavLink onClick={onCloseMenu} to="/course">
              Khóa Học
            </NavLink>
          </li>
          <li>
            <NavLink onClick={onCloseMenu} to="/project">
              Dự Án
            </NavLink>
          </li>
          <li>
            <NavLink onClick={onCloseMenu} to="/faq">
              Liên hệ
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="overlay_nav" onClick={onCloseMenu} />
    </div>
  );
}
