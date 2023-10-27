import React from "react";

import { useNavigate } from "react-router-dom";
import CropProfile from "./CropProfile";

const SelectCropProfile = ({ items }) => {
  const navigate = useNavigate();
  const navigateToAnotherCropItem = () => {
    navigate("/{item.id}");
  };

  return (
    <>
      <div className="select-crop-profile-container">
        {items.map((item) => (
          <CropProfile
            key={item.id}
            name={item.name}
            onClick={navigateToAnotherCropItem}
          />
        ))}
      </div>
    </>
  );
};

export default SelectCropProfile;
