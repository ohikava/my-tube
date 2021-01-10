import React from 'react';
import styled from 'styled-components';
import Item from "./Item";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const data = [
  {
    body: "Playlist 1",
    id: 0
  }, {
    body: "Playlist 2",
    id: 1
  },
  {
    body: "Playlist 3",
    id: 2
  }
];

const Title = styled.span`
  font-size: 1.3rem;
`;

const More = styled.span`
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  color: ${props => props.theme.activecold};
  @media(min-width: 768px) {
    text-align: start;
  }
`;

const Playlists = () => {
  return (
    <Wrapper>
    <Title>Мои Плейлисты</Title>
      {
        data.map(i => <Item img="playlist.svg">{i.body}</Item>)
      }
    <More>Показать больше</More>
    </Wrapper>
  )
};

export default Playlists;
