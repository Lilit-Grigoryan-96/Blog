import React from "react";
import bottom from "../../img/bottom.svg";
import right from "../../img/right.svg";

const MobileMenuItem = ({ item, topLevel, isOpen, onToggle }) => {
  const hasSubmenu = item.submenu && item.submenu.length > 0;
  const hasURL = item.url;

  return (
    <li className="menu__item" onClick={onToggle}>
      <div className="menu-item-title">
        {item.url ? (
          <a href={item.url}>{item.title}</a>
        ) : (
          <span>{item.title}</span>
        )}
        {hasSubmenu && topLevel && (
          <img src={bottom} alt="" className="arrow" />
        )}
      </div>

      {hasURL && !topLevel && <img src={right} alt="" className="arrow" />}
      {hasSubmenu && (
        <ul className={`dropdown ${isOpen ? "show" : ""}`}>
          {item.submenu.map((subItem, index) => (
            <MobileMenuItem key={index} item={subItem} topLevel={false} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MobileMenuItem;
