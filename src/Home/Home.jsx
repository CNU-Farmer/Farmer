import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./css/Home.css";
import "./css/Slider.css";
import CropCard from "./components/CropCard";
import EmptyCard from "./components/EmptyCard";
import BottomNav from "../BottomNav/BottomNav";
import logo from "./img/logo.png";

const data = [
  {
    id: "1",
    species: "상추",
    name: "상추도사",
    harvesting: "1주전",
    latest_watered_date: "2022.04.11",
  },
  {
    id: "2",
    species: "상추",
    name: "상추도사",
    harvesting: "2주전",
    latest_watered_date: "2022.04.11",
  },
];

const Home = function () {
  const settings = {
    centerMode: true,
    infinite: false,
    centerPadding: "50px",
    slidesToShow: 1,
    speed: 500,
  };
  const [cropList, setCropList] = useState(data);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/`)
      .then((response) => {
        console.log(response);
        // setCropList(response.data.crops);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div className="home">
      <img className="home-log" src={logo} alt="Farmer" />
      {cropList.length === 0 ? (
        <EmptyCard />
      ) : (
        <Slider className="home-body" {...settings}>
          {cropList.map((e) => (
            <CropCard key={e.id} crop={e} />
          ))}
        </Slider>
      )}
      <BottomNav />
    </div>
  );
};

export default Home;
