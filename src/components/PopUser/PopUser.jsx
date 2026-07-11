import { SButton } from "../Header/Button.styled";
import {
  PopUserWrapper,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserCheckbox,
} from "./PopUser.styled";

function PopUser({
  isOpen,
  userName = "Ivan Ivanov",
  userMail = "ivan.ivanov@gmail.com",
}) {
  return (
    <PopUserWrapper $isOpen={isOpen}>
      <PopUserName>{userName}</PopUserName>
      <PopUserMail>{userMail}</PopUserMail>
      <PopUserTheme>
        <p>Темная тема</p>
        <PopUserCheckbox type="checkbox" name="checkbox" />
      </PopUserTheme>
      <SButton
        type="button"
        $width="72px"
        $height="30px"
        $bg="transparent"
        $color="#565eef"
        $radius="4px"
        $border="1px solid #565eef"
        $linkColor="#565eef"
        $hoverBg="#33399b"
        $mr="0"
      >
        <a href="#popExit">Выйти</a>
      </SButton>
    </PopUserWrapper>
  );
}

export default PopUser;
