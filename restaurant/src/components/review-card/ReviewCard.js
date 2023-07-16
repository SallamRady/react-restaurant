import React from "react";
import "./ReviewCard.css";
import imgSrc from "../../assets/avatar3.png";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const ReviewCard = () => {
  return (
    <div className="reviewCard">
      <div className="top">
        <img src={imgSrc} alt="User Image" />
        <div className="personInfo">
          <h4>Tom ABC.</h4>
          <Stack spacing={1}>
            <Rating name="size-medium" defaultValue={2} />
          </Stack>
        </div>
      </div>
      <div className="body">
        ombucha chillwave fanny pack 3 wolf moon street art photo booth before
        they sold out organic viral.
      </div>
    </div>
  );
};

export default ReviewCard;
