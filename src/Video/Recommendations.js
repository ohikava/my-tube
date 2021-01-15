import React from 'react';
import styled from 'styled-components';
import ThumbnailRecommendation from "./ThumbnailRecommendations";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 10px;
`;

const Recommendations = ({a = []}) => {
  return (
    <Wrapper>
      {
        a.map(i => <ThumbnailRecommendation i={i} />)
      }
    </Wrapper>
  )
};

export default Recommendations;
