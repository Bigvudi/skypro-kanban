import styled from "styled-components";

export const CalendarWrapper = styled.div`
  width: ${({ $width }) => $width || "182px"};
  margin-bottom: ${({ $marginBottom }) => $marginBottom || "20px"};

  @media screen and (max-width: 660px) {
    max-width: ${({ $mdMaxWidth }) => $mdMaxWidth || "340px"};
    width: 100%;
  }
`;

export const CalendarTtl = styled.p`
  margin-bottom: ${({ $ttlMarginBottom }) => $ttlMarginBottom || "14px"};
  padding: ${({ $paddingHorizontal }) =>
    $paddingHorizontal ? `0 ${$paddingHorizontal}` : "0 7px"};

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ $navMarginTop }) => $navMarginTop || "14px"};
  padding: ${({ $paddingHorizontal }) =>
    $paddingHorizontal ? `0 ${$paddingHorizontal}` : "0 7px"};

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const CalendarMonth = styled.div`
  color: ${({ $textColor }) => $textColor || "#94a6be"};
  font-size: ${({ $monthFontSize }) => $monthFontSize || "14px"};
  line-height: ${({ $monthLineHeight }) => $monthLineHeight || "25px"};
  font-weight: ${({ $monthFontWeight }) => $monthFontWeight || "600"};
`;

export const CalendarContent = styled.div`
  margin-bottom: ${({ $contentMarginBottom }) =>
    $contentMarginBottom || "12px"};
`;

export const CalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: ${({ $daysNamesMargin }) => $daysNamesMargin || "7px 0"};
  padding: ${({ $paddingHorizontal }) =>
    $paddingHorizontal ? `0 ${$paddingHorizontal}` : "0 7px"};
`;

export const CalendarDayName = styled.div`
  color: ${({ $weekend, $weekendColor, $textColor }) =>
    $weekend ? $weekendColor || "#e57373" : $textColor || "#94a6be"};
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;

  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`;

export const CalendarCells = styled.div`
  width: ${({ $width }) => $width || "182px"};
  height: ${({ $cellsHeight }) => $cellsHeight || "126px"};
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 660px) {
    width: ${({ $mdCellsWidth }) => $mdCellsWidth || "344px"};
    height: auto;
    justify-content: space-around;
  }
`;

export const CalendarCell = styled.div`
  width: ${({ $cellSize }) => $cellSize || "22px"};
  height: ${({ $cellSize }) => $cellSize || "22px"};
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;

  color: ${({
    $otherMonth,
    $otherMonthColor,
    $active,
    $activeTextColor,
    $textColor,
  }) => {
    if ($otherMonth) return $otherMonthColor || "#ced4da";
    if ($active) return $activeTextColor || "#ffffff";
    return $textColor || "#94a6be";
  }};

  background-color: ${({
    $active,
    $activeBgColor,
    $current,
    $currentBgColor,
  }) => {
    if ($active) return $activeBgColor || "#565ee5";
    if ($current) return $currentBgColor || "#eaf0fa";
    return "transparent";
  }};

  font-weight: ${({ $weekend }) => ($weekend ? "600" : "normal")};

  @media screen and (max-width: 660px) {
    width: ${({ $mdCellSize }) => $mdCellSize || "42px"};
    height: ${({ $mdCellSize }) => $mdCellSize || "42px"};
    font-size: 14px;
  }
`;

export const CalendarPeriod = styled.div`
  padding: ${({ $paddingHorizontal }) =>
    $paddingHorizontal ? `0 ${$paddingHorizontal}` : "0 7px"};

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const CalendarP = styled.p`
  color: ${({ $textColor }) => $textColor || "#94a6be"};
  font-size: 10px;
  line-height: 1;

  span {
    color: ${({ $spanColor }) => $spanColor || "#000000"};
  }

  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`;
