import logoImg from "../../img/Logo.svg";

import Search from "./Search";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Header = ({ onSearch }) => {
  return (
    <header className={`header sticky`}>
      <div className={`header__inner logo__bar`}>
        <div className="container logo__bar-container">
          <img src={logoImg} alt="LOGOTYPE" />
          <Search onSearch={onSearch} />
        </div>
      </div>
      <DesktopMenu />
      <MobileMenu onSearch={onSearch} />
    </header>
  );
};

export default Header;
