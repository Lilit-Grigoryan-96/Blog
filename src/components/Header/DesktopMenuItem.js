import React, { useState } from "react";

import toBottom from "../../img/bottom.svg";
import toRight from "../../img/right.svg";

const DesktopMenuItem = ({ item, topLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  const hasSubmenu = item.submenu && item.submenu.length > 0;
  const hasURL = item.url;

  return (
    <li
      className="menu__item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.url ? (
        <a href={item.url}>{item.title}</a>
      ) : (
        <span>{item.title}</span>
      )}
      {hasSubmenu && topLevel && (
        <img src={toBottom} alt="" className="arrow" />
      )}
      {hasURL && !topLevel && <img src={toRight} alt="" className="arrow" />}

      {hasSubmenu && (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
          {item.submenu.map((subItem, index) => (
            <DesktopMenuItem key={index} item={subItem} topLevel={false} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default DesktopMenuItem;
