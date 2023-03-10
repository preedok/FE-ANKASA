import React from 'react';
import style from './style.module.css';
import Navbar from '../../../components/navbar';
import FormInputProfile from '../../../components/FormInputProfile';

import image from '../../../assets/profile.png';

const SettingBooking = () => {
  return (
    <body className={style.body}>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <div className={style.wrapper}>
              <div className={style.wrapperImg}>
                <img src={image} className={style.imageProfile} alt="imgProfile" />
              </div>
              <input type="file" className={style.formUpload} />
              <p className={style.titleName}>Mike Kowalski</p>
              <span className={style.location}>Medan, Indonesia</span>

              <div className={style.wrapperButtonCard}>
                <span className={style.heading}>Cards</span>
                <button className={style.buttonAdd}>+ Add</button>
              </div>

              <div className={style.wrapperCC}>
                <p className={style.numberCredit}>4441 1235 5512 5551</p>

                <div className={style.wrapperCardName}>
                  <span className={style.typeCard}>X Card</span>
                  <span className={style.saldo}>Rp. 5.000.000</span>
                </div>
              </div>

              <ul className={style.listsMenu}>
                <li className={style.listMenu}>
                  <a href="/myBooking" className={style.listLink}>
                    <i className="bi bi-person-circle me-5 fs-4" />
                    <span className={style.titleMenu}>Profile</span>
                  </a>
                </li>

                <li className={style.listMenu}>
                  <a href="" className={style.listLink}>
                    <i className="bi bi-sliders me-5 fs-4" />
                    <span className={style.titleMenu}>Settings</span>
                  </a>
                </li>

                <li className={style.listMenu}>
                  <a href="" className={style.listLinkLogout}>
                    <i className="bi bi-box-arrow-left me-5 fs-4" />
                    <span className={style.titleMenu}>Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-8 col-md-7">
            <div className={style.wrapperMain}>
              <span className={style.subHeader}>Profile</span>
              <p className={style.titleHeader}>Setting Profile</p>

              <form>
                <div className="container p-0">
                  <div className="row">
                    <div className="col-lg-6">
                      <span className={style.subHeading}>Contact</span>

                      <FormInputProfile label="email" type="email" placeholder="example@gmail.com" children="Phone Number" value="" change={''} />

                      <FormInputProfile label="no_telp" type="text" placeholder="Your phone number" children="Phone Number" value="" change={''} />
                    </div>

                    <div className="col-lg-6">
                      <span className={style.subHeading}>Biodata</span>

                      <FormInputProfile label="fullname" type="text" placeholder="Your Fullname" children="Fullname" value="" change={''} />

                      <FormInputProfile label="address" type="text" placeholder="Ex: Jakarta, Indonesia" children="Address" value="" change={''} />

                      <FormInputProfile label="postCode" type="text" placeholder="Ex: 13730" children="Post Code" value="" change={''} />

                      <div className="wrapperButton d-flex justify-content-end mt-5">
                        <button className={style.buttonSave} onSubmit={''}>
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default SettingBooking;