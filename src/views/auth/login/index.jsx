import React from "react";
import { useState } from "react";
import style from "../../auth/auth.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import imageLogin1 from "../../../assets/Group 29.png";
import imageLogin2 from "../../../assets/google.png";
import imageLogin3 from "../../../assets/Facebook.png";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/action/userAction";

export default function Login() {
  const router = useNavigate();
  const dispatch = useDispatch();

  const toResetPassword = () => {
    return router("/forgotpassword");
  };

  const toLoginAdmin = () => {
    return router("/login/admin");
  };

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(login, router));
  };

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div
            className={`col-lg-7 col-md-7 d-none d-md-block ${style.imageContainer}`}
          />
          <div className={`col-lg-5 col-md-5 ${style.formContainer}`}>
            <div
              className={`col-lg-8 col-md-12 col-sm-9 col-xs-12 ${style.formBox} text-start`}
            >
              <div className="logo">
                <img src={imageLogin1} width="150px" />
              </div>
              <div className="heading">
                <h1 className="fw-bold mt-4 mb-4">Login</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className={style.formInput}>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className={style.formInput}>
                  <input
                    type="password"
                    onChange={handleChange}
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="text-left mt-4">
                  <button type="submit" className={style.customBtn}>
                    Sign in
                  </button>
                </div>
                <div className="text-center mt-5">
                  <p>Did you forgot your password?</p>
                  <p></p>
                </div>
                <div className="text-center mb-3">
                  <button
                    type="button"
                    className={style.tapBtn}
                    onClick={toResetPassword}
                  >
                    Tap here for reset
                  </button>
                </div>
                {/* <div className="text-center mt-4">
                  <button type="button" className={style.tapBtn} onClick={toLoginAdmin}>
                    Login as admin
                  </button>
                </div> */}
                {/* <hr className="mt-4" />
                <div className="text-center mt-3">
                  <p>Or sign in with</p>
                </div> */}
                {/* <div className="text-center mb-3"> */}
                {/* <button type="button" className={style.socBtn} onClick={""}>
                    <img src={imageLogin2} />
                  </button> */}
                {/* <button type="button" className={style.socBtn} onClick={''}>
                    <img src={imageLogin3} />
                  </button> */}
                {/* </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
