import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const SkeletonChannelThumb = () => (
  <>
    {
      Array(9).fill().map(i => (
        <Wrapper>
          <Skeleton circle={true} height="100px" width="100px" />
          <Skeleton width="100px"  height="30px"/>
          <Skeleton width="120px" height="15px"/>
        </Wrapper>
      ))
    }
  </>
);

export default SkeletonChannelThumb;
