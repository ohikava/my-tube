import React from 'react';
import styled from 'styled-components';
import Thumb from "./Thumb";
import Recommendations from "./Recommendations";
import Comments from "./Comments";

const Wrapper = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
`;

const Video = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  )
};

export default Video;
