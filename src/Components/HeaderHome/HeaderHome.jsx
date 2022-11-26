import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../assets/scss/components/_HeaderHome.scss";
import { ACCESSTOKEN, settings, USER_LOGIN } from "../../util/config";

export default function HeaderHome() {
  // const { userLogin } = useSelector((state) => state.userReducer);
  // const renderLogin = () => {
  //   if (userLogin.email) {
  //     return (
  //       <NavLink className="nav-link" to="/profile">
  //         Hello ! {userLogin.email}
  //       </NavLink>
  //     );
  //   }
  //   return (
  //     <NavLink className="nav-link" to="/login">
  //       Login
  //     </NavLink>
  //   );
  // };
  const { userLogin } = useSelector((state) => state.userReducer);
  const renderLogin = () => {
    if (userLogin.email) {
      return (
        <>
          <NavLink className="nav-link" to="/profile">
            Hello ! {userLogin.email}
          </NavLink>
          <button
            className="nav-link"
            style={{ background: "none", border: "none", paddingLeft: "15px" }}
            onClick={() => {
              settings.eraseCookie(ACCESSTOKEN, 0);
              localStorage.removeItem(USER_LOGIN);
              localStorage.removeItem(ACCESSTOKEN);
              //Sau khi đăng xuất xong chuyển về trang login đồng thời reload lại page clear redux
              window.location.href = "/login";
            }}
          >
            Đăng xuất
          </button>
        </>
      );
    }
    return (
      <NavLink className="nav-link" to="/login">
        Login
      </NavLink>
    );
  };
  return (
    //
    <header className="header">
      <div className="container">
        <a className="logo" href="./index.html">
          <img src="./img/image 3.png" alt />
        </a>
        <div className="login">
          <a className="buy" href="#">
            <img src="./img/image 8.png" alt />
          </a>
          <p className="text-1">(1)</p>
          <a href="/login" className="button-login">
            {renderLogin()}
          </a>
          <a href="/register" className="button-register">
            Register
          </a>
        </div>
      </div>
    </header>
  );
}
