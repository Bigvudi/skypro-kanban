import * as S from "./Calendar.styles";

function Calendar({
  width,
  marginBottom,
  textColor,
  weekendColor,
  otherMonthColor,
  activeBgColor,
  activeTextColor,
  currentBgColor,
  spanColor,
  cellSize,
  mdCellSize,
  paddingHorizontal,
}) {
  // Данные для вывода заголовков дней недели
  const dayNames = [
    { name: "пн", isWeekend: false },
    { name: "вт", isWeekend: false },
    { name: "ср", isWeekend: false },
    { name: "чт", isWeekend: false },
    { name: "пт", isWeekend: false },
    { name: "сб", isWeekend: true },
    { name: "вс", isWeekend: true },
  ];

  // Данные для вывода всех ячеек календаря из вашего HTML-шаблона
  const calendarDays = [
    { day: 28, isOtherMonth: true, isWeekend: false },
    { day: 29, isOtherMonth: true, isWeekend: false },
    { day: 30, isOtherMonth: true, isWeekend: false },
    { day: 31, isOtherMonth: false, isWeekend: false },
    { day: 1, isOtherMonth: false, isWeekend: false },
    { day: 2, isOtherMonth: false, isWeekend: true },
    { day: 3, isOtherMonth: false, isWeekend: true },
    { day: 4, isOtherMonth: false, isWeekend: false },
    { day: 5, isOtherMonth: false, isWeekend: false },
    { day: 6, isOtherMonth: false, isWeekend: false },
    { day: 7, isOtherMonth: false, isWeekend: false },
    { day: 8, isOtherMonth: false, isWeekend: false, isCurrent: true }, // Текущий день
    { day: 9, isOtherMonth: false, isWeekend: true, isActive: true }, // Активный день
    { day: 10, isOtherMonth: false, isWeekend: true },
    { day: 11, isOtherMonth: false, isWeekend: false },
    { day: 12, isOtherMonth: false, isWeekend: false },
    { day: 13, isOtherMonth: false, isWeekend: false },
    { day: 14, isOtherMonth: false, isWeekend: false },
    { day: 15, isOtherMonth: false, isWeekend: false },
    { day: 16, isOtherMonth: false, isWeekend: true },
    { day: 17, isOtherMonth: false, isWeekend: true },
    { day: 18, isOtherMonth: false, isWeekend: false },
    { day: 19, isOtherMonth: false, isWeekend: false },
    { day: 20, isOtherMonth: false, isWeekend: false },
    { day: 21, isOtherMonth: false, isWeekend: false },
    { day: 22, isOtherMonth: false, isWeekend: false },
    { day: 23, isOtherMonth: false, isWeekend: true },
    { day: 24, isOtherMonth: false, isWeekend: true },
    { day: 25, isOtherMonth: false, isWeekend: false },
    { day: 26, isOtherMonth: false, isWeekend: false },
    { day: 27, isOtherMonth: false, isWeekend: false },
    { day: 28, isOtherMonth: false, isWeekend: false },
    { day: 29, isOtherMonth: false, isWeekend: false },
    { day: 30, isOtherMonth: false, isWeekend: true },
    { day: 1, isOtherMonth: true, isWeekend: true },
  ];

  return (
    <S.CalendarWrapper
      $width={width}
      $marginBottom={marginBottom}
      $mdMaxWidth="340px"
    >
      <S.CalendarTtl
        $ttlMarginBottom="14px"
        $paddingHorizontal={paddingHorizontal}
        className="subttl"
      >
        Даты
      </S.CalendarTtl>

      <S.CalendarBlock>
        <S.CalendarNav
          $navMarginTop="14px"
          $paddingHorizontal={paddingHorizontal}
        >
          <S.CalendarMonth
            $textColor={textColor}
            $monthFontSize="14px"
            $monthLineHeight="25px"
            $monthFontWeight="600"
          >
            Сентябрь 2023
          </S.CalendarMonth>

          <div className="nav__actions">
            <div className="nav__action" data-action="prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </div>
            <div className="nav__action" data-action="next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </div>
          </div>
        </S.CalendarNav>

        <S.CalendarContent $contentMarginBottom="12px">
          {/* Отрендерили названия дней с помощью .map() */}
          <S.CalendarDaysNames
            $daysNamesMargin="7px 0"
            $paddingHorizontal={paddingHorizontal}
          >
            {dayNames.map((item, index) => (
              <S.CalendarDayName
                key={index}
                $weekend={item.isWeekend}
                $weekendColor={weekendColor}
                $textColor={textColor}
              >
                {item.name}
              </S.CalendarDayName>
            ))}
          </S.CalendarDaysNames>

          {/* Отрендерили ячейки чисел с помощью .map() */}
          <S.CalendarCells
            $width={width}
            $cellsHeight="126px"
            $mdCellsWidth="344px"
          >
            {calendarDays.map((item, index) => (
              <S.CalendarCell
                key={index}
                $otherMonth={item.isOtherMonth}
                $otherMonthColor={otherMonthColor}
                $weekend={item.isWeekend}
                $current={item.isCurrent}
                $currentBgColor={currentBgColor}
                $active={item.isActive}
                $activeBgColor={activeBgColor}
                $activeTextColor={activeTextColor}
                $textColor={textColor}
                $cellSize={cellSize}
                $mdCellSize={mdCellSize}
              >
                {item.day}
              </S.CalendarCell>
            ))}
          </S.CalendarCells>
        </S.CalendarContent>

        <input type="hidden" id="datepick_value" value="08.09.2023" />

        <S.CalendarPeriod $paddingHorizontal={paddingHorizontal}>
          <S.CalendarP $textColor={textColor} $spanColor={spanColor}>
            Срок исполнения: <span>09.09.23</span>
          </S.CalendarP>
        </S.CalendarPeriod>
      </S.CalendarBlock>
    </S.CalendarWrapper>
  );
}

export default Calendar;
