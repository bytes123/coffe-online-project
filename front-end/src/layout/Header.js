import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Layout, Menu, Row, Col } from "antd";
import { MdOutlineNavigateNext } from "react-icons/md";
import Modal from "../utils/components/Modal";
import { ReactComponent as StarBucksIcon } from "../assets/icons/starbucks.svg";
import HeaderBar from "../components/Header/HeaderBar";
import HeaderMenuItem from "../components/Header/HeaderMenuItem";
import useHeaderBar from "../utils/hooks/useHeaderBar";
import { DesktopMenu, MobileMenu, MobileMenuLogin } from "../static/HeaderMenu";
import { path } from "../static/Router";
import SubMenuMobile from "../components/Header/SubMenuMobile";
import useMobileSubMenu from "../utils/hooks/useMobileSubMenu";
import HeaderBarIcon from "../components/Header/HeaderBarIcon";

const { Header: AntdHeader } = Layout;

const desktopMenuClass =
  "hidden md:flex flex-nowrap w-full h-full caret-transparent px-3 text-[14px] font-bold flex items-center header-color header-bg-color";

const mobileMenuClass =
  "w-full caret-transparent px-3 text-[16px] font-bold  header-color header-bg-color";

export default function Header() {
  let navigate = useNavigate();
  const location = useLocation();

  const activeMenuClass = (link) => {
    if (link === location.pathname) {
      return " active ";
    } else {
      return "";
    }
  };

  const seperateMenuClass = (link) => {
    if (link === path.login) {
      return " ml-auto ";
    } else {
      return "";
    }
  };

  // HANDLE HEADER BAR ON MOBILE
  const [isBarActive, setIsBarActive] = useHeaderBar();
  const [isOpenMobileSubMenu, setIsOpenMobileSubMenu] = useMobileSubMenu();

  const handleMobileBar = () => {
    setIsBarActive(!isBarActive);
  };
  const handleSubMenuMobile = (item) => {
    if (item.children) {
      return setIsOpenMobileSubMenu(!isOpenMobileSubMenu);
    } else {
      navigate(item.link);
    }
  };

  return (
    <div className="header bg-white">
      {/*  // HEADER */}
      <AntdHeader className="z-[999]  md:w-full pc flex items-center justify-between header-bg-color  header md:h-20">
        <StarBucksIcon
          className="cursor-pointer"
          onClick={() => navigate("/")}
        />
        <HeaderBarIcon active={isBarActive} onClick={handleMobileBar} />
        <Menu className={desktopMenuClass}>
          {DesktopMenu.map((item) => {
            return (
              <Menu.Item
                key={item.key}
                style={{ width: "auto" }}
                onClick={(e) => navigate(item.link)}
                className={
                  activeMenuClass(item.link) + seperateMenuClass(item.link)
                }
              >
                <span className="header_menu-title">{item.value}</span>
                <HeaderMenuItem items={item.children} />
              </Menu.Item>
            );
          })}
        </Menu>
      </AntdHeader>
      {/*  // MOBILE BAR HEADER */}
      <HeaderBar active={isBarActive}>
        <Menu className={mobileMenuClass}>
          {MobileMenu.map((item) => {
            return (
              <Menu.Item
                key={item.key}
                style={{ width: "auto" }}
                onClick={() => handleSubMenuMobile(item)}
                className={`header_bar_menu-top p-0 my-4 bg-transparent ${activeMenuClass(
                  item.link
                )}`}
              >
                <div className="header_bar_menu-title">
                  <span className="header_menu-title">{item.value}</span>
                  {item.children && <MdOutlineNavigateNext />}
                </div>
                {item.children && (
                  <SubMenuMobile
                    onBack={() => setIsOpenMobileSubMenu(false)}
                    active={isOpenMobileSubMenu}
                    items={item.children}
                  />
                )}
              </Menu.Item>
            );
          })}
        </Menu>
        <Menu className={mobileMenuClass + " flex"}>
          {MobileMenuLogin.map((item) => {
            return (
              <Menu.Item
                key={item.key}
                style={{ width: "auto" }}
                onClick={(e) => navigate(item.link)}
                className={`header_bar_menu-bottom bg-transparent`}
              >
                <span className="header_menu-title">{item.value}</span>
              </Menu.Item>
            );
          })}
        </Menu>
      </HeaderBar>
      <Modal active={isBarActive} />
    </div>
  );
}
