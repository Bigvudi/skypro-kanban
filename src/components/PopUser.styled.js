import styled from "styled-components";

export const PopUserSet = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: absolute;
  top: ${({ $top }) => $top || "61px"};
  right: ${({ $right }) => $right || "0"};
  width: ${({ $width }) => $width || "213px"};
  height: ${({ $height }) => $height || "205px"};
  border-radius: ${({ $borderRadius }) => $borderRadius || "10px"};
  border: ${({ $border }) => $border || "0.7px solid rgba(148, 166, 190, 0.4)"};
  background: ${({ $bg }) => $bg || "#ffffff"};
  box-shadow: ${({ $shadow }) =>
    $shadow || "0px 10px 39px 0px rgba(26, 56, 101, 0.21)"};
  padding: ${({ $padding }) => $padding || "34px"};
  text-align: ${({ $textAlign }) => $textAlign || "center"};
  z-index: ${({ $zIndex }) => $zIndex || "2"};
`;

export const PopUserName = styled.p`
  color: ${({ $color }) => $color || "#000000"};
  font-size: ${({ $size }) => $size || "14px"};
  font-weight: ${({ $weight }) => $weight || "500"};
  line-height: ${({ $lineHeight }) => $lineHeight || "21px"};
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing || "-0.14px"};
  margin-bottom: ${({ $marginBottom }) => $marginBottom || "4px"};
`;

export const PopUserMail = styled.p`
  color: ${({ $color }) => $color || "#94a6be"};
  font-size: ${({ $size }) => $size || "14px"};
  line-height: ${({ $lineHeight }) => $lineHeight || "21px"};
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing || "-0.14px"};
  margin-bottom: ${({ $marginBottom }) => $marginBottom || "10px"};
`;

export const PopUserTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ $marginBottom }) => $marginBottom || "30px"};

  p {
    color: ${({ $color }) => $color || "#000000"};
    font-size: ${({ $size }) => $size || "14px"};
    line-height: ${({ $lineHeight }) => $lineHeight || "21px"};
    letter-spacing: ${({ $letterSpacing }) => $letterSpacing || "-0.14px"};
  }

  input[type="checkbox"] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: ${({ $trackBg }) => $trackBg || "#eaeef6"};
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    transition: 0.5s;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      top: 1px;
      left: 1px;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: ${({ $thumbBg }) => $thumbBg || "#94a6be"};
      transition: 0.5s;
    }

    &:checked::before {
      left: 12px;
    }
  }
`;
