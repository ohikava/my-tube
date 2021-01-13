import React from 'react';
import styled from 'styled-components';
import Item from "./Item";
import {useTranslation} from "react-i18next";

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
  const {i18n, t} = useTranslation();
  return (
    <Wrapper>
    <Title>{t('My Playlists')}</Title>
      {
        data.map(i => <Item img="playlist.svg">{i.body}</Item>)
      }
    <More>{t('More')}</More>
    </Wrapper>
  )
};

export default Playlists;
