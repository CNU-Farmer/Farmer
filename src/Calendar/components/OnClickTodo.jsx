import btnImg from "../img/plus.png";

const OnClickTodo = ({ id }) => {
  return (
    <>
      <div type="onclick" className="onclick-todo">
        <img src={btnImg} alt="" className="plus-btn" />
        {id}
      </div>
    </>
  );
};
export default OnClickTodo;
