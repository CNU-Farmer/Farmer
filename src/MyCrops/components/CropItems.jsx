import React, { useState } from "react";
// import Card from "../../UI/Card";
import "../css/CropItems.css";

const CropItems = ({ type, title }) => {
  // const deleteCrop = () => {
  //   navigate("/register");
  // };

  //   const [type, setType] = useState(props.type);
  //   const [title, setTitle] = useState(props.title);

  //   const clickHandler = () => {
  //     setTitle("Updated");
  //     console.log(title);
  //   };

  return (
    <div className="crop-item">
      <div className="crop-item__type">{type}</div>
      <div className="crop-item__title">{title}</div>
      <div
        className="delete-crop-btn"
        // onClick={deleteCrop}>
      >
        삭제
      </div>
    </div>
  );
};

export default CropItems;
