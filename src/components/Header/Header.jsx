import { useState } from "react";
import PopUser from "../PopUser/PopUser";

function Header() {
  // 2. Создали состояние видимости окна
  const [isOpen, setIsOpen] = useState(false);

  // 3. Создали функцию переключения
  const toggleMenu = (e) => {
    e.preventDefault(); // Отменяем переход по ссылке #user-set-target
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>

            {/* 4. Добавили onClick={toggleMenu} на имя пользователя */}
            <a
              href="#user-set-target"
              className="header__user _hover02"
              onClick={toggleMenu}
            >
              Ivan Ivanov
            </a>

            {/* 5. Передаем состояние isOpen внутрь компонента окна */}
            <PopUser isOpen={isOpen} />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
