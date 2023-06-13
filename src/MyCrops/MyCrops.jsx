import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import BottomNav from "../BottomNav/BottomNav";
import Header from "../Header/Header";
import Crops from "./components/Crops";
import "./css/MyCrops.css";
import btnImg from "./img/regist-crop-btn.png";

const data = [
  {
    id: "1",
    species: "상추",
    name: "상추도사",
    harvesting: "1",
    latest_watered_date: "2022.04.11",
  },
  {
    id: "2",
    species: "상추",
    name: "상추도사",
    harvesting: "2",
    latest_watered_date: "2022.04.11",
  },
];

const MyCrops = () => {
  const navigate = useNavigate();
  const [cropList, setCropList] = useState([]);
  const navigateToRegistCrop = () => {
    navigate("/register");
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/`)
      .then((response) => {
        console.log(response);
        setCropList(response.data.crops);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

 
  return (
    <div className="my-crops">
      <Header text="내 작물" />
      <div className="my-crops-container">
        <Crops items={cropList} />
      </div>
      <img
          src={btnImg}
          className="regist-crop-btn"
          onClick={navigateToRegistCrop}
          alt=""
        />
      <BottomNav />
    </div>
  );
};

export default MyCrops;
