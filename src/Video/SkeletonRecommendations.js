import React from 'react';
import styled from 'styled-components';
import Skeleton from "react-loading-skeleton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 0 0;
  gap: 15px;
  width: 100%;
  max-width: 100%;

`;
const Item = styled.div`
  display: flex;
  width: 100%;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 50%;
  padding: 5px;
  &:last-child {
    padding-left: 10px;
  }
`;


const SkeletonThumb = () => (
  <Wrapper>
    {
      Array(9)
        .fill()
        .map((i, index) => (
          <Item>
            <Column>
              <Skeleton  height="150px" />
            </Column>
            <Column>
              <Skeleton  height="40px" />
              <Skeleton  height="20px" />
              <Skeleton height="20px" />
            </Column>
          </Item>
        ))
    }
  </Wrapper>
);

export default SkeletonThumb;
