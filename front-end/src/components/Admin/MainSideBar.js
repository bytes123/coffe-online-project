import React, { useEffect } from "react";
import { ReactComponent as StarBucksIcon } from "../../assets/icons/starbucks.svg";
import { useLocation, useNavigate, Link, useParams } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { sideBarList } from "../../static/AdminData";

export default function MainSideBar({ isBarActive, onBarActive }) {
  let navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={`sidebar p-4 fixed top-0 bottom-0 z-20 bg-white lg:relative ${
        isBarActive ? "active" : ""
      }`}
    >
      <div
        className="sidebar_close-wrapper hv p-3 absolute right-4 top-4"
        onClick={onBarActive}
      >
        <AiOutlineCloseCircle className="sidebar_close-ico block cursor-pointer text-xl header_bar-color  text-sky-300 text-4xl" />
      </div>
      <div
        className="sidebar_icon inline-block cursor-pointer mb-12"
        onClick={() => navigate("/")}
      >
        <div className="flex items-center">
          <StarBucksIcon className="inline" />
          <span className="ml-4 font-bold text-3xl">StarBuck</span>
        </div>
      </div>
      {sideBarList.map((item, index) => (
        <ul className="sidebar-list">
          <li className="sidebar-item py-6" key={item.key}>
            <h2 className="text-2xl opacity-40">{item.text}</h2>
            <ul className="sidebar_sub-list mt-5">
              {item.list.map((item) => (
                <li
                  key={item.key}
                  className={`sidebar_sub-item rounded-lg m-4 ${
                    location.pathname == "/admin/" + item.link
                      ? "bg-sky-500 text-white active"
                      : ""
                  }`}
                >
                  <Link
                    to={"/admin/" + item.link}
                    className="flex p-5 items-center text-xl  "
                  >
                    <span>{item.icon}</span>
                    <span className="ml-5">{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      ))}
    </div>
  );
}
