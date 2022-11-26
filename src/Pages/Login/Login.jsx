import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import userReducer, {
  loginAction,
  loginApi,
  loginFacebookApi,
} from "../../redux/productReducer/userReducer";
import FacebookLogin from "react-facebook-login";
import { Result } from "antd";
import { useNavigate } from "react-router-dom";
import { http } from "../../util/config";
export default function Login() {
  const navigate = useNavigate(); // Hook chuyển hướng trang

  const dispatch = useDispatch();
  const frm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email("Email không đúng định dạng !"),
      // password:
    }),
    onSubmit: async (values) => {
      const result = await http.post("/api/users/signin", values);
      const action = loginAction(result.data.content);
      // const action = loginApi(values);
      // console.log(values);
      if (result.data.statusCode === 200) {
        navigate("/home");
      }
      dispatch(action);
      // window.location.href = "/home";
    },
  });
  const responseFacebook = (response) => {
    console.log(response);
    const action = loginFacebookApi(response.accessToken);
    if (response.accessToken === response.accessToken) {
      navigate("/home");
    }
    dispatch(action);
  };

  return (
    <div>
      <div className="login">
        <div className="container">
          <nav className="menu">
            <a href="#">Home</a>
            <a href="#">Men</a>
            <a href="#">Woman</a>
            <a href="#">Kid</a>
            <a href="#">Sport</a>
          </nav>
          <form className="form" onSubmit={frm.handleSubmit}>
            <h3 className="title">Login</h3>
            <div className="form-group">
              <p>Email</p>
              <input
                className="form-control"
                id="email"
                name="email"
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
              />
              {frm.errors.email ? (
                <p className="error">{frm.errors.email}</p>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <p>Password</p>
              <input
                className="form-control"
                id="password"
                name="password"
                type={"password"}
                onChange={frm.handleChange}
              />
            </div>
            <div className="form-group">
              <a className="signin" href="/register">
                Register now ?
              </a>
              <button className="login" type="login">
                Login
              </button>
            </div>
            <div className="form-group">
              <FacebookLogin
                appId="533324841707979"
                // autoLoad={true}
                fields="name,email,picture"
                // onClick={componentClicked}
                callback={responseFacebook}
                // render={(renderProps) => (
                //   <button
                //     onClick={(e) => {
                //       console.trace();
                //     }}
                //   >
                //     Login via FB
                //   </button>
                // )}
              />
              ,
            </div>
          </form>
        </div>
      </div>
      <section className="contact">
        <div className="container">
          <div className="register-row">
            <div className="col">
              <h2 className="col-title">GET HELP</h2>
              <p className="detail">Contact us</p>
              <p className="detail">Shopping</p>
              <p className="detail">NIKEiD</p>
              <p className="detail">Nike+</p>
            </div>
            <div className="col">
              <h2 className="col-title">ORDERS</h2>
              <p className="detail">Payment options</p>
              <p className="detail">Shipping and delivery</p>
              <p className="detail">Returns</p>
            </div>
            <div className="col">
              <h2 className="col-title">REGISTER</h2>
              <p className="detail">
                Create one account to manage everything you do with Nike, from
                your shopping preferences to your Nike+ activity.
              </p>
              <a className="path" href="#">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
