import React from 'react';
import styled from 'styled-components';
import Skeleton from "react-loading-skeleton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 5px 15px 5px;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.fontcolor};
  @media(min-width: 726px) {
    padding: 15px;
  }
`;


const Video = styled.div`
  height: 200px;
  margin: 0 -5px;
  @media(min-width: 425px) {
    height: 230px;
  }
  @media(min-width: 768px) {
    height: 300px;
  }
  @media(min-width: 1024px) {
    height: 400px;
  }
  @media(min-width: 1440px) {
    height: 450px;
  }
`;
const TitleWrapper = styled.div`
  width: 100%;
`;



const Row = styled.div`
  display: flex;
  gap: 20px;
`;

const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Flex = styled.div`
  display: flex;
  gap: 10px;
`;

const MobileToggler = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${props => props.theme.fontcolor};
  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 3fr;
    align-items: center;
  }
`;

const Column = styled.div`
  &:last-child {
    width: 80%;
  }
`;

const SkeletonThumb = () => (
  <Wrapper>
    <Video>
      <Skeleton height="100%"  />
    </Video>
    <TitleWrapper>
      <Skeleton height="30px"/>
    </TitleWrapper>
    <Skeleton height="10px" width="30%"/>
    <Skeleton height="40px"/>
    <Row>
      <Column>
        <Skeleton circle={true} width="50px" height="50px" />
      </Column>
      <Column>
        <Skeleton height="50px"/>
      </Column>
    </Row>
  </Wrapper>
);

export default SkeletonThumb;
