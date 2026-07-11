import { useState } from "react";
import PopUser from "../PopUser/PopUser";
import { SButton } from "./Button.styled";
import { SLogo, DarkLogo } from "./Logo.styled";
import {
  StyledHeader,
  Container,
  HeaderBlock,
  HeaderNav,
  HeaderUser,
} from "./Header.styled";

function Header({
  user = "Ivan Ivanov",
  showNewCardBtn = true,
  children,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = false;

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <StyledHeader {...props}>
      <Container>
        <HeaderBlock>
          {/* Блок с логотипами */}
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

          {/* Блок навигации */}
          <HeaderNav>
            {children}
            {showNewCardBtn && (
              <SButton
                $width="178px"
                $height="30px"
                $bg="#565eef"
                $color="#ffffff"
                $hoverBg="#33399b"
                $radius="4px"
                $size="14px"
                $mr="0"
                $mobilePos="fixed"
                $mobileLeft="16px"
                $mobileBottom="30px"
                $mobileWidth="calc(100vw - 32px)"
                $mobileHeight="40px"
                $zIndex="3"
              >
                <a href="#popNewCard" target="_self">
                  Создать новую задачу
                </a>
              </SButton>
            )}

            {/* Имя пользователя с переключением меню */}
            <HeaderUser href="#user-set-target" onClick={toggleMenu}>
              {user}
            </HeaderUser>

            {/* Компонент попапа пользователя */}
            <PopUser isOpen={isOpen} />
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </StyledHeader>
  );
}

export default Header;
