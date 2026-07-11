import styled from "styled-components";

export const SButton = styled.button`
  /* Добавляем $ ко всем пропсам */
  width: ${({ $width }) => $width || "178px"};
  height: ${({ $height }) => $height || "30px"};
  background-color: ${({ $bg }) => $bg || "#565eef"};
  color: ${({ $color }) => $color || "#ffffff"};
  border-radius: ${({ $radius }) => $radius || "4px"};
  border: ${({ $border }) => $border || "none"};
  cursor: pointer;
  outline: none;
  font-size: ${({ $size }) => $size || "14px"};
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-right: ${({ $mr }) => $mr || "20px"};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ $hoverBg }) => $hoverBg || "#33399b"};
  }

  a {
    text-decoration: none;
    color: ${({ $linkColor }) => $linkColor || "#ffffff"};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 495px) {
    position: ${({ $mobilePos }) => $mobilePos || "fixed"};
    left: ${({ $mobileLeft }) => $mobileLeft || "16px"};
    bottom: ${({ $mobileBottom }) => $mobileBottom || "30px"};
    top: ${({ $mobileTop }) => $mobileTop || "auto"};
    width: ${({ $mobileWidth }) => $mobileWidth || "calc(100vw - 32px)"};
    height: ${({ $mobileHeight }) => $mobileHeight || "40px"};
    margin-right: ${({ $mobileMr }) => $mobileMr || "0"};
    z-index: ${({ $zIndex }) => $zIndex || "3"};
  }
`;
