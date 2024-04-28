import React, { useState } from "react";

export default function ControlForm() {
  const [form, setForm] = useState({});
  // Tạo thêm 1 cái State Handle Lỗi nữa

  const [error, setError] = useState({});
  const HandleClick = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const HandleEnter = (e) => {
    if (e.key === 13) {
      HandleClick(e);
    }
  };

  const handle = (e) => {
    console.log(123);
    console.log(123);
  };

  // define một hàm register sử dụng lại
  const register = (name) => {
    return {
      value: form[name] || "",
      onChange: (e) => setForm({ ...form, [name]: e.target.value }),
    };
  };

  return (
    <div>
      <div>
        <main id="main">
          <div className="register-course">
            <section className="section-1 wrap container">
              {/*SECTION FORM HERE */}

              <form className="form">
                <label>
                  <p>
                    Họ và tên<span>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Họ và tên bạn"
                    {...register("name")}
                  />
                </label>
                <label>
                  <p>Số điện thoại</p>
                  <input
                    type="text"
                    placeholder="Số điện thoại"
                    {...{
                      value: form.phone || "",
                      onChange: (e) =>
                        setForm({ ...form, phone: e.target.value }),
                    }}
                  />
                </label>
                <label>
                  <p>
                    Email<span>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Email của bạn"
                    value={form.email || ""}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </label>
                <label>
                  <p>Website</p>
                  <input
                    type="text"
                    placeholder="Đường dẫn website http://"
                    value={form.website || ""}
                    onChange={(e) =>
                      setForm({ ...form, website: e.target.value })
                    }
                  />
                </label>
                <label>
                  <p>
                    Tiêu đề<span>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Tiêu đề liên hệ"
                    value={form.title || ""}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                  />
                </label>
                <label>
                  <p>
                    Nội dung<span>*</span>
                  </p>
                  <textarea
                    cols={30}
                    rows={10}
                    defaultValue={""}
                    onChange={(e) =>
                      setForm({ ...form, content: e.target.value })
                    }
                  />
                </label>
                <button
                  className="btn main rect"
                  onClick={HandleClick}
                  onKeyUp={HandleEnter}
                >
                  đăng ký
                </button>
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
                  Tòa nhà Robot, 308, Điện Biên Phủ, Phường 4, Quận 3, TP. Hồ
                  Chí Minh
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
                  <img
                    src="./img/nav-caret.svg"
                    style={{ marginTop: "13px" }}
                  />
                </div>
              </div>
              <p>Được thiết kế và lập trình bởi Spacedev Team</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
