import { useState } from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ date, latest_watered_date }) => {
  const [list, setList] = useState([
    { id: "물 주기", type: "onClick" },
    { id: "수확하기", type: "onClick" },
  ]);

  return (
    <>
      {list.map((elem, i) => (
        <div
          onClick={() =>
            setList((list) =>
              list.map((elem2) => {
                if (elem2 === elem) elem2.type = "checkbox";
                return elem2;
              })
            )
          }
        >
          <TodoListItem
            key={i}
            id={elem.id}
            type={elem.type}
            date={date}
            latest_watered_date={latest_watered_date}
          />
        </div>
      ))}
    </>
  );
};

export default TodoList;
