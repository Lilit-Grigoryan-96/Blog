import React, { useState } from "react";
import { menuItems } from "../../menuitems";
import MobileMenuItem from "./MobileMenuItem";
import Search from "./Search";

import logoImg from "../../img/Logo.svg";
import closeImg from "../../img/close.svg";
import barImg from "../../img/menu-bar.svg";

const MobileMenu = ({ onSearch }) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openItemIndex, setOpenItemIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenItemIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      <div className={`header__inner mobile__logo__bar`}>
        <div className="container mobile__logo-container">
          <img
            src={barImg}
            alt="Menu"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          />
          <img src={logoImg} alt="LOGOTYPE" />
          <Search onSearch={onSearch} />
        </div>
      </div>
      <div
        className={openMobileMenu ? "black__bg mobile__menu__container" : ""}
      >
        <nav className={`mobile__menu ${openMobileMenu ? "open" : ""}`}>
          <div className={`mobile__menu__header`}>
            <img src={logoImg} alt="LOGOTYPE" className="logo" />
            <img
              src={closeImg}
              alt="Close"
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
            />
          </div>
          <ul className="menu">
            {menuItems.map((item, index) => (
              <MobileMenuItem
                key={index}
                item={item}
                topLevel={true}
                isOpen={openItemIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
