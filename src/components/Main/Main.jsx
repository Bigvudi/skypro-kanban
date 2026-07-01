import { useState, useEffect } from "react"; // 1. Импортируем хуки
import Column from "../Column/Column";
import { cardList } from "../../data.js";

function Main() {
  // 2. Создаем состояние загрузки. Изначально true — загрузка идет
  const [isLoading, setIsLoading] = useState(true);

  // 3. Эффект имитации загрузки данных
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Через 2 секунды выключаем загрузку
    }, 2000);

    return () => clearTimeout(timer); // Очищаем таймер при размонтировании
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
    <main className="main">
      <div className="container">
        <div className="main__block">
          {/* 4. Используем тернарный оператор */}
          {isLoading ? (
            // Если isLoading === true, показываем этот блок по центру
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "50vh",
                fontSize: "24px",
                fontWeight: "bold",
                color: "#565EEF", // Красивый синий цвет (можете поменять на свой)
              }}
            >
              Данные загружаются...
            </div>
          ) : (
            // Если isLoading === false, показываем ваши колонки
            <div className="main__content">
              <Column title="Без статуса" cards={noStatusCards} />
              <Column title="Нужно сделать" cards={todoStatusCards} />
              <Column title="В работе" cards={inProgressCards} />
              <Column title="Тестирование" cards={testingCards} />
              <Column title="Готово" cards={doneCards} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;
