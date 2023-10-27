import CheckboxTodo from "./CheckboxTodo";
import OnClickTodo from "./OnClickTodo";

const TodoListItem = ({ id, type, date, latest_watered_date }) => {
  return type === "onClick" ? (
    <OnClickTodo id={id} onClick="" />
  ) : (
    <CheckboxTodo
      id={id}
      date={date}
      latest_watered_date={latest_watered_date}
    />
  );
};

export default TodoListItem;
