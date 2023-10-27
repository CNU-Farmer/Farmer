import React from "react";
import CropItems from "./CropItems";
// import Card from "../UI/Card";

const Crops = ({ items }) => {
  return (
    // <Card className="crops">
    <>
      {items.map((item) => (
        <CropItems key={item.id} id={item.id} species={item.species} name={item.name} />
      ))}
      {/* </Card> */}
    </>
  );
};

export default Crops;
