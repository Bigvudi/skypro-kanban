import { useState, useEffect } from "react";
import Column from "../Column/Column";
import { cardList } from "../../data.js";
import {
  StyledMain,
  Container,
  MainBlock,
  MainContent,
  MainLoader,
} from "../Main.styled";

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const noStatusCards = cardList.filter(
    (card) => card.status === "Без статуса",
  );
  const todoStatusCards = cardList.filter(
    (card) => card.status === "Нужно сделать",
  );
  const inProgressCards = cardList.filter((card) => card.status === "В работе");
  const testingCards = cardList.filter(
    (card) => card.status === "Тестирование",
  );
  const doneCards = cardList.filter((card) => card.status === "Готово");

  return (
    <StyledMain>
      <Container>
        <MainBlock>
          {isLoading ? (
            <MainLoader>Данные загружаются...</MainLoader>
          ) : (
            <MainContent>
              <Column title="Без статуса" cards={noStatusCards} />
              <Column title="Нужно сделать" cards={todoStatusCards} />
              <Column title="В работе" cards={inProgressCards} />
              <Column title="Тестирование" cards={testingCards} />
              <Column title="Готово" cards={doneCards} />
            </MainContent>
          )}
        </MainBlock>
      </Container>
    </StyledMain>
  );
}

export default Main;
