import React from "react";
import styled from 'styled-components';
import HideFromMobile from "../utils/HideFromMobile";
import Navigation from "../Header/Navigation";
import Item from "../Header/Item";
import Subscriptions from "../Header/Subscriptions";
import Playlists from "../Header/Playlists";
import Videos from "./Videos";

const Wrapper = styled.div`
  @media(min-width: 468px) {
    padding: 80px 0 80px 50px;
  }
`;


const NavigationPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const navigation = [
  {
    body: "Главная",
    link: ""
  },
  {
    body: "В тренде",
    link: ""
  },
  {
    body: "Подписки",
    link: ""
  },
  {
    body: "Ваши видео",
    link: ""
  },
  {
    body: "Смотреть позже",
    link: ""
  },
  {
    body: "Понравившиеся",
    link: ""
  }
];

const Home = () => (
  <Wrapper>
    <HideFromMobile border={426}>
      <NavigationPanel>
        <Navigation>
          {navigation.map(i => <Item>{i.body}</Item>)}
        </Navigation>
        <Subscriptions />
        <Playlists />
      </NavigationPanel>
    </HideFromMobile>
    <Videos />
  </Wrapper>
);

export default Home;
