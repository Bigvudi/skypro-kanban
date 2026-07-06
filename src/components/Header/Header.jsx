import { useState } from "react";
import PopUser from "../PopUser/PopUser";
import { SButton } from "../Button.styled";
import { SLogo, DarkLogo } from "../Logo.styled";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const isDark = false;

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <SLogo $dark={isDark} className="_show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </SLogo>
          <DarkLogo $dark={isDark} className="_dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </DarkLogo>
          <nav className="header__nav">
            <SButton>
              <a href="#popNewCard">Создать новую задачу</a>
            </SButton>

            <a
              href="#user-set-target"
              className="header__user _hover02"
              onClick={toggleMenu}
            >
              Ivan Ivanov
            </a>

            <PopUser isOpen={isOpen} />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
