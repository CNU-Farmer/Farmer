import "../css/CropProfile.css";

const CropProfile = ({ id, name }) => {
  return (
    <>
      <div className="select-crop-item">
        <div className="profile-color-img"></div>
        <div className="crop-title">{name}</div>
      </div>
    </>
  );
};

export default CropProfile;
