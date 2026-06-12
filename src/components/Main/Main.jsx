import Column from "../Column/Column";
import { cardList } from "../../data.js";

function Main() {
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
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column title="Без статуса" cards={noStatusCards} />
            <Column title="Нужно сделать" cards={todoStatusCards} />
            <Column title="В работе" cards={inProgressCards} />
            <Column title="Тестирование" cards={testingCards} />
            <Column title="Готово" cards={doneCards} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
