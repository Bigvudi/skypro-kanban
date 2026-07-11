import styled, { keyframes } from "styled-components";

// Добавляем анимацию из CSS
const cardAnimation = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
`;

// Цвета для тем в зависимости от названия топика
const topicThemes = {
  "Web Design": { bg: "#ffe4c2", color: "#ff6d00" },
  Research: { bg: "#b4fdd1", color: "#06b16e" },
  Copywriting: { bg: "#e9d4ff", color: "#9a48f1" },
};

export const CardsItem = styled.div`
  padding: ${({ $padding }) => $padding || "5px"};
  animation: ${cardAnimation} ${({ $duration }) => $duration || "500ms"} linear;

  @media screen and (max-width: 1200px) {
    padding: ${({ $paddingMobile }) => $paddingMobile || "5px"};
  }
`;

export const CardContainer = styled.div`
  width: ${({ $width }) => $width || "220px"};
  height: ${({ $height }) => $height || "130px"};
  background-color: ${({ $bg }) => $bg || "#ffffff"};
  border-radius: ${({ $radius }) => $radius || "10px"};
  display: flex;
  flex-direction: column;
  align-items: ${({ $align }) => $align || "flex-start"};
  justify-content: ${({ $justify }) => $justify || "stretch"};
  padding: ${({ $padding }) => $padding || "15px 13px 19px"};
  box-shadow: ${({ $shadow }) => $shadow || "0px 4px 14px rgba(0, 0, 0, 0.05)"};
  transition: all 0.3s ease;
  cursor: ${({ $cursor }) => $cursor || "default"};

  &:hover {
    transform: ${({ $hoverTransform }) =>
      $hoverTransform || "translateY(-2px)"};
    box-shadow: ${({ $hoverShadow }) =>
      $hoverShadow || "0px 8px 24px rgba(0, 0, 0, 0.1)"};
  }

  @media screen and (max-width: 1200px) {
    width: ${({ $widthMobile }) => $widthMobile || "220px"};
    height: ${({ $heightMobile }) => $heightMobile || "130px"};
    padding: ${({ $paddingMobile }) => $paddingMobile || "15px 13px 19px"};
  }
`;

export const CardGroup = styled.div`
  width: ${({ $width }) => $width || "100%"};
  height: ${({ $height }) => $height || "20px"};
  margin-bottom: ${({ $marginBottom }) => $marginBottom || "12px"};
  display: flex;
  align-items: ${({ $align }) => $align || "center"};
  justify-content: ${({ $justify }) => $justify || "space-between"};
  gap: ${({ $gap }) => $gap || "0"};
`;

export const CardTheme = styled.div`
  width: ${({ $width }) => $width || "auto"};
  height: ${({ $height }) => $height || "20px"};
  padding: ${({ $padding }) => $padding || "5px 14px"};
  border-radius: ${({ $radius }) => $radius || "18px"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $gap }) => $gap || "4px"};

  background-color: ${({ $topic, $bg }) =>
    $bg || topicThemes[$topic]?.bg || "#ffe4c2"};

  p {
    font-size: ${({ $fontSize }) => $fontSize || "10px"};
    font-weight: ${({ $fontWeight }) => $fontWeight || "600"};
    line-height: ${({ $lineHeight }) => $lineHeight || "10px"};
    color: ${({ $topic, $color }) =>
      $color || topicThemes[$topic]?.color || "#ff6d00"};
    margin: 0;
    white-space: nowrap;
  }
`;

export const CardBtn = styled.div`
  width: ${({ $width }) => $width || "24px"};
  height: ${({ $height }) => $height || "24px"};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: ${({ $padding }) => $padding || "2px"};
  cursor: pointer;
  border-radius: ${({ $radius }) => $radius || "4px"};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ $hoverBg }) => $hoverBg || "rgba(0, 0, 0, 0.05)"};
  }

  div {
    width: ${({ $dotSize }) => $dotSize || "4px"};
    height: ${({ $dotSize }) => $dotSize || "4px"};
    border-radius: 50%;
    background-color: ${({ $dotColor }) => $dotColor || "#94a6be"};
    transition: all 0.2s ease;
  }

  &:hover div {
    background-color: ${({ $dotHoverColor }) => $dotHoverColor || "#565eef"};
  }
`;

export const CardContent = styled.div`
  height: ${({ $height }) => $height || "64px"};
  display: flex;
  flex-direction: column;
  align-items: ${({ $align }) => $align || "flex-start"};
  justify-content: ${({ $justify }) => $justify || "space-between"};
  width: ${({ $width }) => $width || "100%"};
  gap: ${({ $gap }) => $gap || "0"};

  a {
    text-decoration: none;
    width: 100%;
  }
`;

export const CardTitle = styled.h3`
  font-size: ${({ $fontSize }) => $fontSize || "14px"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "500"};
  line-height: ${({ $lineHeight }) => $lineHeight || "18px"};
  color: ${({ $color }) => $color || "#000000"};
  margin-bottom: ${({ $marginBottom }) => $marginBottom || "10px"};
  margin-top: 0;
  display: -webkit-box;
  -webkit-line-clamp: ${({ $lines }) => $lines || "2"};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ $hoverColor }) => $hoverColor || "#565eef"};
  }
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ $justify }) => $justify || "flex-start"};
  gap: ${({ $gap }) => $gap || "6px"};
  width: 100%;

  svg {
    width: ${({ $iconSize }) => $iconSize || "13px"};
    height: ${({ $iconSize }) => $iconSize || "13px"};
    flex-shrink: 0;
  }

  p {
    font-size: ${({ $fontSize }) => $fontSize || "10px"};
    line-height: ${({ $lineHeight }) => $lineHeight || "13px"};
    color: ${({ $color }) => $color || "#94a6be"};
    letter-spacing: ${({ $letterSpacing }) => $letterSpacing || "0.2px"};
    margin: 0;
  }
`;

// Дополнительные компоненты для расширенной функциональности
export const CardBadge = styled.div`
  position: absolute;
  top: ${({ $top }) => $top || "-8px"};
  right: ${({ $right }) => $right || "-8px"};
  background: ${({ $bg }) => $bg || "#565eef"};
  color: ${({ $color }) => $color || "#ffffff"};
  font-size: ${({ $fontSize }) => $fontSize || "10px"};
  padding: ${({ $padding }) => $padding || "2px 8px"};
  border-radius: ${({ $radius }) => $radius || "12px"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "600"};
`;

export const CardWrapper = styled.div`
  position: relative;
  display: inline-block;
`;
