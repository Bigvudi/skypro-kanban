import styled from "styled-components";

export const ColumnWrapper = styled.div`
  width: ${({ $width }) => $width || "20%"};
  margin: ${({ $margin }) => $margin || "0 auto"};
  display: ${({ $display }) => $display || "block"};

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;

export const ColumnTitle = styled.div`
  padding: ${({ $padding }) => $padding || "0 10px"};
  margin: ${({ $margin }) => $margin || "15px 0"};

  p {
    color: ${({ $color }) => $color || "#94a6be"};
    font-size: ${({ $fontSize }) => $fontSize || "14px"};
    font-weight: ${({ $fontWeight }) => $fontWeight || "600"};
    line-height: 1;
    text-transform: uppercase;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: ${({ $display }) => $display || "block"};
  position: relative;

  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`;
