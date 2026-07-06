import { SButton } from "../Button.styled";
// 1. Принимаем переменую isOpen в круглых скобках функции через фигурные скобки
function PopUser({ isOpen }) {
  return (
    <div
      className="header__pop-user-set pop-user-set"
      id="user-set-target"
      // 2. Добавляем динамический стиль: если isOpen равен true — block, иначе — none
      style={{ display: isOpen ? "block" : "none" }}
    >
      <p className="pop-user-set__name">Ivan Ivanov</p>
      <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
      <div className="pop-user-set__theme">
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </div>
      <SButton
        type="button"
        $width="72px"
        $height="30px"
        $bg="transparent"
        $color="#565eef"
        $radius="4px"
        $border="1px solid #565eef"
        $linkColor="#565eef"
        $hoverBg="#33399b" // Фон при наведении (эффект _hover03)
        $mr="0"
      >
        <a href="#popExit">Выйти</a>
      </SButton>
    </div>
  );
}

export default PopUser;
