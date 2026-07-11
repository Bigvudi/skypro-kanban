import Card from "../Card/Card";
import { ColumnWrapper, ColumnTitle, CardsContainer } from "./Column.styled";

function Column({
  title,
  cards,
  $width,
  $margin,
  $titleColor,
  $titleFontSize,
  $titleFontWeight,
  ...props
}) {
  return (
    <ColumnWrapper $width={$width} $margin={$margin} {...props}>
      <ColumnTitle
        $color={$titleColor}
        $fontSize={$titleFontSize}
        $fontWeight={$titleFontWeight}
      >
        <p>{title}</p>
      </ColumnTitle>
      <CardsContainer>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </CardsContainer>
    </ColumnWrapper>
  );
}

export default Column;
