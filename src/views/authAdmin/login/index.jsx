import React from 'react';
import { useState } from 'react';
import style from '../../authAdmin/auth.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import imageLogin1 from '../../../assets/Group 29.png';
import imageLogin2 from '../../../assets/google.png';
import imageLogin3 from '../../../assets/Facebook.png';
import axios from 'axios';
import Swal from 'sweetalert2';

const AdminLogin = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/admin/login`, form)
      .then((res) => {
        console.log(res.data.data);
        if (res.data.message !== 'login is successful') {
          Swal.fire({
            icon: 'error',
            title: `${res.data.message}`,
            text: 'Something went wrong!',
          });
        } else {
          Swal.fire(`${res.data.message}`, 'You clicked the button!', 'success');

          const token = res.data.data.token;
          const id = res.data.data.id;
          const fullname = res.data.data.fullname;
          const image = res.data.data.image;
          const admin = res.data.data;
          const email = res.data.data.email;
          const phone_number = res.data.data.phone_number;
          const role = res.data.data.admin_role;

          localStorage.setItem('token', token);
          localStorage.setItem('id', id);
          localStorage.setItem('fullname', fullname);
          localStorage.setItem('image', image);
          localStorage.setItem('admin', JSON.stringify(admin));
          localStorage.setItem('users', JSON.stringify(res.data.data));
          localStorage.setItem('email', email);
          localStorage.setItem('phone_number', phone_number);
          localStorage.setItem('role', role);

          navigate('/admin');
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  const toRegister = () => {
    return navigate('/register');
  };

  const toResetPassword = () => {
    return navigate('/forget');
  };

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className={`col-lg-7 col-md-7 d-none d-md-block ${style.imageContainer}`} />
          <div className={`col-lg-5 col-md-5 ${style.formContainer}`}>
            <div className={`col-lg-8 col-md-12 col-sm-9 col-xs-12 ${style.formBox} text-start`}>
              <div className="logo text-center">
                <img src={imageLogin1} width="150px" />
              </div>
              <div className="heading">
                <h1 className={`fw-bold mt-5 mb-5 text-center ${style.titleHeader}`}>Admin Login</h1>
              </div>
              <form onSubmit={handleLogin}>
                <div className={style.formInput}>
                  <input type="text" onChange={(e) => setForm({ ...form, email: e.target.value })} name="email" placeholder="Email" required />
                </div>
                <div className={style.formInput}>
                  <input type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} name="password" placeholder="Password" required />
                </div>
                <div className="text-left my-3">
                  <button type="submit" className={style.customBtn}>
                    Signin
                  </button>
                </div>
                <div className="text-center mt-4">
                  <p>Did you forgot your password?</p>
                  <p></p>
                </div>
                <div className="text-center mb-3">
                  <button type="button" className={`${style.tapBtn}`} onClick={toResetPassword}>
                    Tap here for reset
                  </button>
                </div>
                <hr className="mt-5" />
                <div className="text-center mt-2">
                  <p>Or sign in with</p>
                </div>
                <div className="text-center mb-3">
                  <button type="button" className={style.socBtn} onClick={toRegister}>
                    <img src={imageLogin2} />
                  </button>
                  <button type="button" className={style.socBtn} onClick={toRegister}>
                    <img src={imageLogin3} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
