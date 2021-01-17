import React from 'react';
import styled from 'styled-components';
import Skeleton from "react-loading-skeleton";

const Item = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media(min-width: 768px) {
    flex-direction: row;
  }
  gap: 5px;
  cursor: pointer;
  padding-bottom: 25px;
  @media(min-width: 768px) {
    padding: 0;
  }
`;
const Column = styled.div`
  padding: 5px;
  display: flex;
  @media(min-width: 768px) {
    width: 700px;
  }
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
`;

const Image = styled.div`
  width: 300px;
`;
const SkeletonThumbnails = () => (
  <>
    {Array(9)
      .fill()
      .map((item, index) => (
        <Item>
          <Image>
            <Skeleton height={180} width="100%" />
          </Image>
          <Column>
            <Skeleton width="100%" height="40px" />
            <Row>
              <Skeleton circle={true} width="50px" height="50px" />
              <Skeleton height="50px" width="100%"/>
            </Row>
          </Column>
        </Item>
      ))}
  </>
);


export default SkeletonThumbnails;
