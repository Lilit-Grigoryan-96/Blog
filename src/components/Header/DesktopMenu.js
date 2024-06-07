import React, { useState, useEffect, useCallback } from "react";
import { menuItems } from "../../menuitems";
import DesktopMenuItem from "./DesktopMenuItem";

const DesktopMenu = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 200 && currentScrollY > lastScrollY) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={`header__inner menu__bar  ${isHidden ? "hidden" : ""}`}>
      <div className="container">
        <nav className="desktop__menu">
          <ul className="menu">
            {menuItems.map((item, index) => (
              <DesktopMenuItem key={index} item={item} topLevel={true} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DesktopMenu;
