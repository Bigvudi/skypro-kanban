import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${({ $bg }) => $bg || "#ffffff"};
  box-shadow: ${({ $shadow }) => $shadow || "0px 2px 4px rgba(0, 0, 0, 0.05)"};
`;

export const Container = styled.div`
  max-width: ${({ $maxWidth }) => $maxWidth || "1260px"};
  padding: ${({ $padding }) => $padding || "0 30px"};
  margin: 0 auto;

  @media screen and (max-width: 495px) {
    padding: ${({ $mdPadding }) => $mdPadding || "0 16px"};
  }
`;

export const HeaderBlock = styled.div`
  height: ${({ $height }) => $height || "70px"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const HeaderNav = styled.nav`
  max-width: ${({ $navMaxWidth }) => $navMaxWidth || "290px"};
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ $gap }) => $gap || "20px"};

  @media screen and (max-width: 495px) {
    max-width: 100%;
    justify-content: flex-start;
  }
`;

export const HeaderUser = styled.a`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ $fontSize }) => $fontSize || "14px"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "500"};
  line-height: 20px;
  color: ${({ $userColor }) => $userColor || "#565eef"};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: ${({ $userHoverColor }) => $userHoverColor || "#33399b"};
  }

  &:hover::after {
    border-left-color: ${({ $userHoverColor }) => $userHoverColor || "#33399b"};
    border-bottom-color: ${({ $userHoverColor }) =>
      $userHoverColor || "#33399b"};
  }

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.5px solid ${({ $userColor }) => $userColor || "#565eef"};
    border-bottom: 1.5px solid ${({ $userColor }) => $userColor || "#565eef"};
    transform: rotate(-45deg);
    margin-left: 8px;
    margin-top: -3px;
    transition: all 0.2s ease;
  }
`;

export const HeaderPopUserSet = styled.div`
  display: none;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #fff;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;

  &.active {
    display: block;
  }
`;
