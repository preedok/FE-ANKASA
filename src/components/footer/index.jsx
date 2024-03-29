import React from "react";
import style from "./footer.module.css";
import imgVector1 from "../../assets/vector 02.png";
import imgVector2 from "../../assets/apple-app-store-travel-awards-globestamp-7 2.png";
import imgVector3 from "../../assets/apple-app-store-travel-awards-globestamp-7 3.png";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-white">
        <div
          className={`container-fluid bg-white p-4 ${style.mobileOuterFooter}`}
        >
          <div className={`row p-md-5 ${style.mobileInnerFooter}`}>
            <div className="col-px-4 col-md-4">
              <h4>
                <img src={imgVector1} width="30" alt="" />
                Ankasa
              </h4>
              <p className="px-4 mt-3 ms-3 text-muted">
                Find your Flight and explore the world with us. We will take
                care of the rest
              </p>
            </div>
            <div className="col-px-4 col-md-3">
              <h5 className="ms-4">Features</h5>
              <ul className={`${style.listStyle}`}>
                <li className="py-1 ml-2">
                  <a href={"/#"}>Find Ticket</a>
                </li>
                <li className="py-1 ml-2">
                  <a href={"/#"}>My Booking</a>
                </li>
                <li className="py-1 ml-2">
                  <a href={"/#"}>Chat</a>
                </li>
                <li className="py-1 ml-2">
                  <a href={"/#"}>Notification</a>
                </li>
              </ul>
            </div>
            <div className="col-px-4 col-md-3">
              <h5 className="ms-4">Download Angkasa App</h5>
              <ul className={`${style.listStyle}`}>
                <a href={"/#"} className={`${style.imgFooter}`}>
                  <img src={imgVector2} alt="" className="mb-3 ml-4" />
                </a>
                <a href={"/#"} className={`${style.imgFooter}`}>
                  <img src={imgVector3} alt="" className="mb-3 ml-4" />
                </a>
              </ul>
            </div>
            <div className="col-px-4 col-md-2">
              <h5 className={`ms-4 ${style.iconFooter}`}>Follow Us</h5>
              <ul className={`${style.iconFooter} d-flex flex-row`}>
                <ul className="px-2 ml-3">
                  <a href={"/#"}>
                    <i className="fa fa-facebook"></i>
                  </a>
                </ul>
                <ul className="px-2">
                  <a href={"/#"}>
                    <i className="fa fa-twitter"></i>
                  </a>
                </ul>
                <ul className="px-2">
                  <a href={"/#"}>
                    <i className="fa fa-instagram"></i>
                  </a>
                </ul>
                <ul className="px-2">
                  <a href={"/#"}>
                    <i className="fa fa-youtube"></i>
                  </a>
                </ul>
              </ul>
            </div>
          </div>
          <div className={`${style.footerDown} px-5`}>
            <div className="container">
              <div className="row text-muted">
                <div className="col-12 col-md-6">
                  <p>© 2023 Company, Inc. All rights reserved.</p>
                </div>
                <div className="col-12 col-md-6">
                  <p className="text-end mx-5">
                    <i className="fa fa-map-marker"></i>
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
