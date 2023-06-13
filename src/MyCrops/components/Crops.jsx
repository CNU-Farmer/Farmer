import React from "react";
import CropItems from "./CropItems";
// import Card from "../UI/Card";

const Crops = ({ items }) => {
  return (
    // <Card className="crops">
    <>
      {items.map((item) => (
        <CropItems key={item.id} type={item.type} title={item.title} />
      ))}
      {/* </Card> */}
    </>
  );
};

export default Crops;
