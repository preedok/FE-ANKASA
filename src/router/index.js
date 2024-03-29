import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import io from "socket.io-client";
import swal from "sweetalert";
import Login from "../views/auth/login";
import Register from "../views/auth/register";
import ForgotPassword from "../views/auth/forgotPassword";
import Home from "../views/home/index";
import Search from "../views/search";
import BookingDetail from "../views/bookingDetail";
import FlightDetail from "../views/flightDetail";

import Profile from "../views/profile";
import UpdateProfile from "../views/updateProfile";
import Admin from "../views/admin/dashboard";
import Airlines from "../views/admin/adminAirlines";
import AdminFlight from "../views/admin/adminFlight";
import AdminPayment from "../views/admin/adminPayment";
import VerifEmail from "../views/emailVerification";
import Page404 from "../views/Page404";
import AdminLogin from "../views/authAdmin/login";
import Destination from "../views/destination";
import DetailDestination from "../views/detailDestination";
import Chat from "../views/chat/index";
import AdminCity from "../views/admin/adminCity";
import MyBooking from "../views/myBooking";
import Users from "../views/superAdmin/users";
import MenuSetting from "../views/superAdmin/menuSetting";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

// Private routing
const Auth = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    swal({
      title: "Denied!",
      text: `Access Denied, Please Login!`,
      icon: "error",
    });
    return <Navigate to="/login" replace />;
  }
  return children;
};

const Router = () => {
  // const [socket, setSocket] = useState(null);
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!socket && token) {
  //     const res = io(`https://ankasa-backend-production.up.railway.app`, {
  //       query: {
  //         token: token,
  //       },
  //       transports: ["websocket", "polling"],
  //     });
  //     setSocket(res);
  //   }
  // }, [socket]);
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/verifEmail" element={<VerifEmail />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/search" element={<Search />} />
          <Route path="/booking/:id" element={<Auth> <BookingDetail /></Auth>} />
          <Route path="/flight/:id" element={<Auth> <FlightDetail /></Auth>} />
          <Route path="/profile/:id" element={<Auth><Profile /></Auth>} />
          <Route path="/mybooking/:id" element={<Auth><MyBooking /></Auth>} />
          <Route path="/updateProfile/:id" element={<Auth> <UpdateProfile /></Auth>} />
          <Route path="/admin" element={<Auth> <Admin /></Auth>} />
          <Route path="/admin/airlines" element={<Auth> <Airlines /> </Auth>} />
          <Route path="/admin/flight" element={<Auth><AdminFlight /></Auth>} />
          <Route path="/admin/payment" element={<Auth> <AdminPayment /></Auth>} />
          <Route path="/login/admin" element={<AdminLogin />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/destination/:id" element={<DetailDestination />} />
          {/* <Route path="/chat/:id" element={<Auth><Chat socket={socket} /></Auth>} /> */}
          <Route path="/admin/city" element={<Auth> <AdminCity /></Auth>} />
          <Route path="/su/users" element={<Auth> <Users /> </Auth>} />
          <Route path="/su/menu" element={<Auth> <MenuSetting /></Auth>} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
