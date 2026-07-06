import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  background-color: ${({ $bg }) => $bg || "#eaeef6"};
`;

export const Container = styled.div`
  max-width: ${({ $maxWidth }) => $maxWidth || "1260px"};
  padding: ${({ $padding }) => $padding || "0 30px"};
  margin: 0 auto;

  @media screen and (max-width: 495px) {
    padding: ${({ $mdPadding }) => $mdPadding || "0 16px"};
  }
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: ${({ $padding }) => $padding || "25px 0 49px"};

  @media screen and (max-width: 1200px) {
    padding: ${({ $paddingMd }) => $paddingMd || "40px 0 64px"};
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  gap: ${({ $gap }) => $gap || "0"};

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

export const MainLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${({ $minHeight }) => $minHeight || "50vh"};
  font-size: ${({ $fontSize }) => $fontSize || "24px"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "bold"};
  color: ${({ $color }) => $color || "#565eef"};
`;
