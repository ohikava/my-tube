import React from 'react';
import styled from 'styled-components';
import Thumb from "./Thumb";
import Recommendations from "./Recommendations";
import Comments from "./Comments";
import HideFromMobile from "../utils/HideFromMobile";
import HideFromComputer from "../utils/HideFromComputer";

const Wrapper = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`;
const Column = styled.div``;

const Video = () => {
  return (
    <Wrapper>
      <HideFromComputer border="768">
      <Thumb v = {{
        title: "2000 баксов за сигарету",
        views: 153686,
        likes: 35636,
        dislikes: 5321,
        id: 1,
        author: {
          id: 1,
          name: "Гена Британец",
          subscribers: 35800
        }
      }} />
      <Recommendations />
      <Comments amount={1941}>
      </Comments>
      </HideFromComputer>
      <HideFromMobile border="768">
        <Column>
        <Thumb v = {{
          title: "2000 баксов за сигарету",
          views: 153686,
          likes: 35636,
          dislikes: 5321,
          data: "12.01.20",
          id: 1,
          author: {
            id: 1,
            name: "Гена Британец",
            subscribers: 35800
          }
        }} />
        <Comments amount={1941}>
        </Comments>
        </Column>
        <Column>
          <Recommendations />
        </Column>
      </HideFromMobile>
    </Wrapper>
  )
};

export default Video;
