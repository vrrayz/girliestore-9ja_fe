import React from "react";
import styled from "styled-components";
import { StarRatings } from "./StarRatings";
import { TextSmall } from "../Styled";

export const ReviewAndRating = () => {
  return (
    <div className="border-b-2 pb-3 my-3">
      <div className="mb-3">
        <Reviewer>John Doe</Reviewer>
        <StarRatings ratingsCount={5} hasDate ratingDate="06-20-2024" />
      </div>
      <TextSmall>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptates
        fugit error voluptatibus neque ea dolore provident eos ratione soluta
        fuga nihil aspernatur facilis quisquam, ex eveniet iusto! Fuga,
        laudantium.
      </TextSmall>
    </div>
  );
};

const Reviewer = styled.p`
  font-size: 14px;
`;
