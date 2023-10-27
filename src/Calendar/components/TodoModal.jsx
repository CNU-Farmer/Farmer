import Sheet from "react-modal-sheet";
import TodoList from "./TodoList";
import "../css/Calendar.css";
import { useState, useRef, useEffect } from "react";

const TodoModal = ({ isOpen, setOpen, date, latest_watered_date }) => {
  const userMenu = useRef();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const modalCloseHandler = ({ target }) => {
    if (isOpenModal && !userMenu.current.contains(target))
      setIsOpenModal(false);
  };

  useEffect(() => {
    window.addEventListener("click", modalCloseHandler);
    return () => {
      window.removeEventListener("click", modalCloseHandler);
    };
  });

  const formatDate = () => {
    const monthIndex = date.getMonth() + 1;
    const year = date.getFullYear();
    const day = date.getDate();
    return `${year}년 ${`${monthIndex}`.slice(-2)}월 ${day}일`;
  };

  return (
    <>
      <Sheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        detent="content-height"
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            {
              <div className="todo-container">
                <div style={{ height: 50 }} className="modal-date">
                  {formatDate()}
                </div>
                <div style={{ height: 150 }}>
                  <TodoList
                    date={date}
                    latest_watered_date={latest_watered_date}
                  />
                </div>
              </div>
            }
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
    </>
  );
};

export default TodoModal;
