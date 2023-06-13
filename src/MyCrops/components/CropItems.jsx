import React from "react";
import axios from "axios";
// import Card from "../../UI/Card";
import "../css/CropItems.css";

const CropItems = ({ id, species, name }) => {
  const cropMap = {"lettuce" : "상추"};
  const onDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_API_KEY}/my_crops?id=${id}`)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <div className="crop-item">
      <div className="crop-item__type">{cropMap[species]}</div>
      <div className="crop-item__title">{name}</div>
      <button
        className="delete-crop-btn"
        onClick={onDelete}>
        삭제
      </button>
    </div>
  );
};

export default CropItems;
