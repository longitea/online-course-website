import React from "react";
import { Link, NavLink } from "react-router-dom";
import { PATH } from "../config/path";
import { useAuth } from "../contexts/authContext";

export default function Header() {
  const { user, logout } = useAuth();
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
          <Link onClick={onCloseMenu} to={PATH.home} className="logo">
            <img src="/img/logo.svg" alt="" />
            <h1>Spacedev</h1>
          </Link>
          <div className="right">
            <div className="have-login">
              <div className="account">
                <Link to={PATH.profile.index} className="info">
                  <div className="name">{user.name || "Chưa Đăng Nhập"}</div>
                  <div className="avatar">
                    <img src="/img/avt.png" alt="" />
                  </div>
                </Link>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <Link to={PATH.profile.course}>Khóa học của tôi</Link>
                <Link to={PATH.profile.index}>Thông tin tài khoản</Link>
                <Link
                  to="#"
                  onClick={(ev) => {
                    ev.preventDefault();
                    logout();
                  }}
                >
                  Đăng xuất
                </Link>
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
            <a onClick={onCloseMenu} to={PATH.signin}>
              Đăng ký / Đăng nhập
            </a>
          </li>
          <li>
            <NavLink
              onClick={onCloseMenu}
              to={PATH.profile.index}
              className="account"
            >
              <div className="avatar">
                <img src="/img/avt.png" alt="" />
              </div>
              <div className="name">Đặng Thuyền Vương</div>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={onCloseMenu} to={PATH.home}>
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink onClick={onCloseMenu} to={PATH.team}>
              Spacedev Team
            </NavLink>
          </li>
          <li>
            <NavLink onClick={onCloseMenu} to={PATH.course}>
              Khóa Học
            </NavLink>
          </li>
          <li>
            <NavLink onClick={onCloseMenu} to={PATH.project}>
              Dự Án
            </NavLink>
          </li>
          <li>
            <NavLink onClick={onCloseMenu} to={PATH.faq}>
              Liên hệ
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="overlay_nav" onClick={onCloseMenu} />
    </div>
  );
}
