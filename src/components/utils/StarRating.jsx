import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const StarRating = ({ rate, bgColor }) => {
  const filledStars = Math.floor(rate);
  const hasHalfStar = rate - filledStars >= 0.5;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < filledStars; i++) {
      stars.push(<StarIcon key={i} />);
    }
    if (hasHalfStar) {
      stars.push(<StarBorderIcon key="half" />);
    }
    return stars;
  };

  return <div style={{ color: bgColor }}>{renderStars()}</div>;
};

export default StarRating;
