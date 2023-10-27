import checkedBtn from "../img/checked.png";
import uncheckedBtn from "../img/unchecked.png";
import "../css/TodoModal.css";
import { useState } from "react";

const CheckboxTodo = ({ id, date, latest_watered_date }) => {
  const [imageSrc, setImageSrc] = useState(uncheckedBtn);
  const [isClicked, setIsClicked] = useState(false);

  const doneClick = () => {
    if (isClicked) {
      setImageSrc(uncheckedBtn);
      setIsClicked(false);
    } else {
      setImageSrc(checkedBtn);
      setIsClicked(true);
    }
  };
  return (
    <>
      <div type="checkbox" className="checkbox-todo" onClick={doneClick}>
        <img src={imageSrc} alt="" className="unchecked-btn" />
        {id}
      </div>
    </>
  );
};

export default CheckboxTodo;
