import React from 'react';
import { Link } from 'react-router-dom';
import SidebarHeading from '../SidebarHeading';

const Sidebar = () => {
  const role = localStorage.getItem('role');
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/* Sidebar - Brand */}
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="bi bi-airplane-fill" />
        </div>
        <div className="sidebar-brand-text mx-3">Ankasa</div>
      </a>

      <hr className="sidebar-divider my-0" />

      {role === 'super_admin' ? (
        <>
          <hr className="sidebar-divider " />
          <SidebarHeading title="Super Admin" />

          <li className="nav-item">
            <Link className="nav-link" to="/su/users">
              <i className="bi bi-speedometer" />
              <span>User</span>
            </Link>
          </li>
          <hr className="sidebar-divider my-0" />

          <li className="nav-item">
            <Link className="nav-link" to="/su/menu">
              <i className="bi bi-speedometer" />
              <span>Menu Setting</span>
            </Link>
          </li>

          <hr className="sidebar-divider " />
          <SidebarHeading title="Dashboard" />
          <li className="nav-item">
            <Link className="nav-link" to="/admin">
              <i className="bi bi-speedometer" />
              <span>Dashboard</span>
            </Link>
          </li>

          <hr className="sidebar-divider my-0" />
          <li className="nav-item">
            <Link className="nav-link" to="/admin/airlines">
              <i className="bi bi-airplane" />
              <span>Airlines</span>
            </Link>
          </li>

          <hr className="sidebar-divider my-0" />
          <li className="nav-item">
            <Link className="nav-link" to="/admin/flight">
              <i className="bi bi-calendar-day-fill" />
              <span>Flight Schedule</span>
            </Link>
          </li>

          <hr className="sidebar-divider my-0" />
          <li className="nav-item">
            <Link className="nav-link" to="/admin/payment">
              <i className="bi bi-credit-card-2-back-fill" />
              <span>Payment</span>
            </Link>
          </li>

          <hr className="sidebar-divider my-0" />
          <li className="nav-item">
            <Link className="nav-link" to="/admin/city">
              <i className="bi bi-credit-card-2-back-fill" />
              <span>City</span>
            </Link>
          </li>

          <hr className="sidebar-divider" />
        </>
      ) : (
        <>
          <hr className="sidebar-divider " />
          <SidebarHeading title="Dashboard" />
          <li className="nav-item">
            <Link className="nav-link" to="/admin">
              <i className="bi bi-speedometer" />
              <span>Dashboard</span>
            </Link>
          </li>

          <hr className="sidebar-divider my-0" />
          <li className="nav-item">
            <Link className="nav-link" to="/admin/airlines">
              <i className="bi bi-airplane" />
              <span>Airlines</span>
            </Link>
          </li>

          <hr className="sidebar-divider my-0" />
          <li className="nav-item">
            <Link className="nav-link" to="/admin/flight">
              <i className="bi bi-calendar-day-fill" />
              <span>Flight Schedule</span>
            </Link>
          </li>

          <hr className="sidebar-divider my-0" />
          <li className="nav-item">
            <Link className="nav-link" to="/admin/payment">
              <i className="bi bi-credit-card-2-back-fill" />
              <span>Payment</span>
            </Link>
          </li>

          <hr className="sidebar-divider my-0" />
          <li className="nav-item">
            <Link className="nav-link" to="/admin/city">
              <i className="bi bi-credit-card-2-back-fill" />
              <span>City</span>
            </Link>
          </li>

          <hr className="sidebar-divider" />
        </>
      )}
    </ul>
  );
};

export default Sidebar;
