import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  flex-direction: column;
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
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
`;

const SkeletonVideos = () => (
  <>
    {Array(9)
      .fill()
      .map((item, index) => (
        <Item>
          <Skeleton height={180} />
          <Row>
          <Column>
            <Skeleton circle={true} height={50} width={50} />
          </Column>
          <Column>
            <Skeleton height={30} width={200} />
            <Skeleton width={200} height={15}/>
          </Column>
          </Row>
        </Item>
      ))}
  </>
);

export default SkeletonVideos;
