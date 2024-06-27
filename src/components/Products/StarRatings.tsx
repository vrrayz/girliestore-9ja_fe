import { Colors } from "@/styles";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { InlineTextSmall } from "../Styled";

interface Props {
  ratingsCount: number;
  hasReviewersCount?: boolean;
  reviewersCount?: number;
  hasDate?: boolean;
  ratingDate?: string;
}

export const StarRatings = ({
  ratingsCount,
  hasReviewersCount,
  reviewersCount,
  hasDate,
  ratingDate,
}: Props) => {
  const starRatings = new Array(ratingsCount).fill(0);
  return (
    <StarRatingsContainer>
      {starRatings.map((rating, i) => (
        <FontAwesomeIcon
          icon={faStar}
          color={Colors.red}
          key={i}
          className="my-auto"
        />
      ))}
      {hasReviewersCount && reviewersCount && (
        <InlineTextSmall className="text-darkslategray mt-1 ml-1">
          ({reviewersCount})
        </InlineTextSmall>
      )}
      {hasDate && ratingDate && (
        <InlineTextSmall className="text-darkslategray mt-1 ml-1">
          {ratingDate}
        </InlineTextSmall>
      )}
    </StarRatingsContainer>
  );
};

const StarRatingsContainer = styled.div`
  display: flex;
  gap: 2px;
`;
