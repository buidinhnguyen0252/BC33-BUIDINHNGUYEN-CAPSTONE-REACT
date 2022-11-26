import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import axios from "axios";
import { registerApi } from "../../redux/productReducer/userReducer";
import { Result } from "antd";
import { http } from "../../util/config";

export default function Register() {
  // const { register } = useSelector((state) => state.productReducer);

  // const dispatch = useDispatch();
  // // const stateA = useSelector(state => state.productReducer.stateA);

  // useEffect(() => {
  //   //Hàm này sẽ 1 lần sau khi component load xong giao diện
  //   //Gọi api
  //   const action = getDataRegisterApi();

  //   dispatch(action);
  // }, []);
  const navigate = useNavigate(); // Hook chuyển hướng trang
  const dispatch = useDispatch();

  // const [register, setRegister] = useState({
  //   email: "",
  //   password: "",
  //   name: "",
  //   gender: true,
  //   phone: "",
  // });
  const frm = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordconfirm: "",
      name: "",
      gender: true,
      phone: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email("Email không đúng định dạng !")
        .required("Email không được bỏ trống"),
      // password:
      password: yup.string().required("Password không được bỏ trống"),
      // .matches(
      //   "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$"
      // ),
      passwordconfirm: yup
        .string()
        .required("Password confirm không được bỏ trống")
        .oneOf([yup.ref("password"), null], "Chưa trùng khớp với password"),
      phone: yup
        .string()
        .required("Số điện thoại không được bỏ trống")
        .min(10, "Ít nhất 10 kí tự"),
      name: yup
        .string()
        .matches(/[a-z]/, "Phải là chữ")
        .required("Tên không được bỏ trống"),
    }),
    enableReinitialize: true,
    validateOnMount: true,
    onSubmit: async (values) => {
      const result = await http.post("/api/users/signup", values);

      const action = registerApi(values);
      console.log(values);
      console.log(registerApi);
      if (result.data.statusCode === 200) {
        alert(result.data.message);
        navigate("/login");
      }

      dispatch(action);
    },
  });

  // const handleChange = (e) => {
  //   const { value, id } = e.target;
  //   setRegister({
  //     ...register,
  //     [id]: value,
  //   });
  // };

  // const handleSubmit = (e, value) => {
  //   e.preventDefault();
  //   console.log(register);

  //   //api
  //   axios({
  //     url: "https://shop.cyberlearn.vn/api/Users/signup",
  //     method: "POST",
  //     data: {
  //       email: register.email,
  //       password: register.password,
  //       name: register.name,
  //       gender: register.gender,
  //       phone: register.phone,
  //     },
  //   })
  //     .then((res) => {
  //       console.log(res.data);
  //       if (res.data.statusCode === 200) {
  //         alert(res.data.message);
  //         navigate("/login");
  //       }
  //     })
  //     .catch((err) => {
  //       alert(err.response.data.message);
  //       console.log(err);
  //     });
  // };

  return (
    <div className="register">
      <div className="container">
        <nav className="menu">
          <a href="#">Home</a>
          <a href="#">Men</a>
          <a href="#">Woman</a>
          <a href="#">Kid</a>
          <a href="#">Sport</a>
        </nav>
        <h3 className="title">Register</h3>

        <form className="form" onSubmit={frm.handleSubmit}>
          <div className="form-group">
            <p>Email</p>
            <input
              className="form-control"
              id="email"
              name="email"
              // onChange={handleChange}
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
              value={frm.values.email}
            />
            {frm.touched.email && <p className="error">{frm.errors.email}</p>}
          </div>
          <div className="form-group">
            <p>Name</p>
            <input
              className="form-control"
              id="name"
              name="name"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
              value={frm.values.name}
            />
            {frm.touched.name && <p className="error">{frm.errors.name}</p>}
          </div>
          <div className="form-group">
            <p>Password</p>
            <input
              className="form-control"
              id="password"
              name="password"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
              type="password"
              value={frm.values.password}
            />
            {frm.touched.password && (
              <p className="error">{frm.errors.password}</p>
            )}
          </div>
          <div className="form-group">
            <p>Phone</p>
            <input
              className="form-control"
              id="phone"
              name="phone"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
              value={frm.values.phone}
            />
            {frm.touched.phone && <p className="error">{frm.errors.phone}</p>}
          </div>
          <div className="form-group">
            <p>Password confirm</p>
            <input
              className="form-control"
              id="passwordconfirm"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
              type="password"
              value={frm.values.passwordconfirm}
            />
            {frm.touched.passwordconfirm && (
              <p className="error">{frm.errors.passwordconfirm}</p>
            )}
          </div>
          <div className="form-group">
            <div className="gender">
              <div className="gender-col">
                <label className="text" htmlFor="gender">
                  Gender
                </label>
                <input
                  className="male"
                  type="radio"
                  name="genderS"
                  defaultValue="true"
                />
                <label className="text-male" htmlFor="text-male">
                  Male
                </label>
                <input
                  className="female"
                  type="radio"
                  name="genderS"
                  defaultValue="false"
                />
                <label className="text-female" htmlFor="text-female">
                  Female
                </label>
              </div>
            </div>
          </div>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
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
