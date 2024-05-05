import React, { useState } from "react";
import Field from "../../components/Field";

{
  /* --=============== CONTENT =============== */
}

// Đây là kiểu set form bằng object chứa value sử dụng useState
export default function ContactComponent() {
  const [form, setForm] = useState({});
  const [error, setError] = useState({});
  const handleSetForm = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  // sử dụng spread operator để copy ra một object mới
  const controlForm = (name) => {
    return {
      error: error[name],
      value: form[name] || "",
      onChange: (e) => handleSetForm(name, e.target.value),
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorObject = {};
    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const urlRegex =
      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

    {
      /* --=============== VALIDATE FORM  =============== */
    }

    if (!form.full_name?.trim()) {
      errorObject.name = "Vui lòng điền họ và tên";
    }
    if (!form.phone?.trim()) {
      errorObject.phone = "Vui lòng điền SDT";
    } else if (!phoneRegex.test(form.phone)) {
      errorObject.phone = "Số điện thoại không hợp lệ";
    }

    if (!form.email?.trim()) {
      errorObject.email = "Vui lòng điền email";
    } else if (!emailRegex.test(form.email)) {
      errorObject.email = "Email không hợp lệ";
    }

    if (form.website?.trim() && !urlRegex.test(form.website)) {
      errorObject.website = "Vui lòng điền đúng định dạng website";
    }
    if (!form.title?.trim()) {
      errorObject.title = "Vui lòng điền tiêu đề liên hệ";
    }
    if (!form.content?.trim()) {
      errorObject.content = "Vui lòng điền nội dung cần hỗ trợ";
    }

    setError(errorObject);

    if (!Object.keys(error).length === 0) {
      console.log("success");
      console.log("form", form);
    } else {
      console.log("error", error);
      console.log("form", form);
    }
  };

  return (
    <>
      <header id="header">
        <div className="wrap">
          <div className="menu-hambeger">
            <div className="button">
              <span />
              <span />
              <span />
            </div>
            <span className="text">menu</span>
          </div>
          <a href="./" className="logo">
            <img src="img/logo.svg" alt="" />
            <h1>Spacedev</h1>
          </a>
          <div className="right">
            <div className="have-login">
              <div className="account">
                <a href="./profile.html" className="info">
                  <div className="name">Đặng Thuyền Vương</div>
                  <div className="avatar">
                    <img src="img/avt.png" alt="" />
                  </div>
                </a>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <a href="#">Khóa học của tôi</a>
                <a href="#">Thông tin tài khoản</a>
                <a href="#">Đăng xuất</a>
              </div>
            </div>
            {/* <div class="not-login bg-none">
              <a href="#" class="btn-register">Đăng nhập</a>
              <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
          </div> */}
          </div>
        </div>
        <div className="progress" />
      </header>
      <nav className="nav">
        <ul>
          <li>
            <a href="./signin.html">Đăng ký / Đăng nhập</a>
          </li>
          <li>
            <a href="./profile.html" className="account">
              <div className="avatar">
                <img src="img/avt.png" alt="" />
              </div>
              <div className="name">Đặng Thuyền Vương</div>
            </a>
          </li>
          <li>
            <a className="active" href="./">
              Trang chủ
            </a>
          </li>
          <li>
            <a href="./team.html">Spacedev Team</a>
          </li>
          <li>
            <a href="./course-list.html">Khóa Học</a>
          </li>
          <li>
            <a href="./project.html">Dự Án</a>
          </li>
          <li>
            <a href="./contact.html">Liên hệ</a>
          </li>
        </ul>
      </nav>
      <div className="overlay_nav" />
      <main id="main">
        <div className="register-course">
          <section className="section-1 wrap container">
            {/* <div class="main-sub-title">liên hệ</div> */}
            <h2 className="main-title">Thanh Long Form</h2>
            <p className="top-des">
              Đừng ngần ngại liên hệ với <strong>Spacedev</strong> để cùng nhau
              tạo ra những sản phẩm giá trị, cũng như việc hợp tác với các đối
              tác tuyển dụng và công ty trong và ngoài nước.
            </p>

            {/* --=============== FORM =============== */}
            <form className="form" onSubmit={handleSubmit}>
              <Field
                label="Họ và tên"
                placeholder="Họ và tên bạn"
                required
                error={error.name}
                value={form.full_name || ""}
                onChange={(e) => handleSetForm("full_name", e.target.value)}
              />
              <Field
                label="Số điện thoại"
                required
                placeholder="Số điện thoại"
                {...controlForm("phone")}
              />
              <Field
                label="Email"
                required
                placeholder="Email của bạn"
                value={form.email || ""}
                error={error.email}
                onChange={(e) => handleSetForm("email", e.target.value)}
              />
              <Field
                label="Website"
                placeholder="Đường dẫn website http://"
                value={form.website || ""}
                error={error.website}
                onChange={(e) => handleSetForm("website", e.target.value)}
              />
              <Field
                label="Tiêu đề liên hệ"
                required
                placeholder="Tiêu đề liên hệ"
                value={form.title || ""}
                error={error.title}
                onChange={(e) => handleSetForm("title", e.target.value)}
              />

              {/* 
              * --=============== SELECT ===============
              * Ở đây sử dụng kỹ thuật renderProps để truyền vào một function 

               */}
              <Field
                label=" Nội dung"
                required
                placeholder=" Nội dung"
                value={form.content || ""}
                error={error.content}
                onChange={(e) => handleSetForm("content", e.target.value)}
                renderProps={(props) => {
                  return <textarea {...props} cols={30} rows={10} />;
                }}
              />

              <button className="btn main rect">đăng ký</button>
            </form>
          </section>
          {/* <div class="register-success">
          <div class="contain">
              <div class="main-title">đăng ký thành công</div>
              <p>
                  <strong>Chào mừng Vương Đặng đã trở thành thành viên mới của Spacedev Team.</strong> <br>
                  Cảm ơn bạn đã đăng ký khóa học tại <strong>Spacedev</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                  hoặc số điện thoại của bạn.
              </p>
          </div>
          <a href="/" class="btn main rect">về trang chủ</a>
      </div> */}
        </div>
      </main>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-5 left">
              <p className="des">Kiến Thức mở Ra Trang Mới Cuộc Đời Bạn</p>
              <p className="address">
                Tòa nhà Robot, 308, Điện Biên Phủ, Phường 4, Quận 3, TP. Hồ Chí
                Minh
              </p>
              <p className="phone">(+84) 949 816 596</p>
              <div className="social">
                <a href="#">
                  <img src="img/fb-icon.png" alt="" />
                </a>
                <a href="#">
                  <img src="img/email-icon.png" alt="" />
                </a>
                <a href="#">
                  <img src="img/skype-icon.png" alt="" />
                </a>
              </div>
            </div>
            <div className="right">
              <nav>
                <ul>
                  <li>
                    <a href="./">Trang chủ</a>
                  </li>
                  <li>
                    <a href="./course-list.html">Khóa Học</a>
                  </li>
                  <li>
                    <a href="#">Thanh toán</a>
                  </li>
                  <li>
                    <a href="#">Điều khoản</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <a href="#" className="back-to-top">
            <div className="line" />
            CUỘN LÊN
          </a>
        </div>
        <div className="copy-right">
          <div className="container">
            <div className="flex gap-2">
              2020 spacedev.vn
              <div className="select flex gap-1 cursor-pointer items-center">
                <img width={15} src="./img/icon-lang.svg" alt="" />
                Tiếng Việt
                <img src="./img/nav-caret.svg" style={{ marginTop: 13 }} />
              </div>
            </div>
            <p>Được thiết kế và lập trình bởi Spacedev Team</p>
          </div>
        </div>
      </footer>
    </>
  );
}
