import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoLocation, IoHome, IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/AuthSlice";

import "./Sidebar.css";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div>
      <aside className="menu has-shadow pl-6 py-5 sidebar has-text-weight-bold">
        <ul className="menu-list has-text-weight-bold has-text-weight-bold">
          <li>
            <NavLink to="/dashboard">
              <IoHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">
              <IoPerson /> User
            </NavLink>
          </li>
          <li>
            <NavLink to="/locations">
              <IoLocation /> Locations
            </NavLink>
          </li>
        </ul>

        {user && user.role === "admin" && (
          <div>
            <p className="menu-label has-text-weight-bold">Admin</p>
            <ul className="menu-list has-text-weight-bold">
              <li>
                <NavLink to="/users">
                  <IoPerson /> Users
                </NavLink>
              </li>
            </ul>
          </div>
        )}

        <ul className="menu-list">
          <li>
            <button onClick={logout} className="button is-white">
              <IoLogOut /> Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
