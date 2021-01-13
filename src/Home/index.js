import React from "react";
import styled from 'styled-components';
import HideFromMobile from "../utils/HideFromMobile";
import Navigation from "../Header/Navigation";
import Item from "../Header/Item";
import Subscriptions from "../Header/Subscriptions";
import Playlists from "../Header/Playlists";
import Videos from "./Videos";
import {useTranslation} from "react-i18next";

const Wrapper = styled.div`
  padding: 100px 0 0 0;
  @media(min-width: 768px) {
    padding: 80px 0 80px 50px;
    display: flex;
    gap: 30px;
  }
`;


const NavigationPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  gap: 30px;
`;

const navigation = [
  {
    body: "Main",
    link: ""
  },
  {
    body: "Followings",
    link: ""
  },
  {
    body: "My Video",
    link: ""
  },
  {
    body: "Watch Later",
    link: ""
  },
  {
    body: "Favourite",
    link: ""
  }
];

const Home = () => {
  const {i18n, t} = useTranslation();
  return (
    <Wrapper>
      <HideFromMobile border={426}>
        <NavigationPanel>
          <Navigation>
            {navigation.map(i => <Item>{t(`${i.body}`)}</Item>)}
          </Navigation>
          <Subscriptions />
          <Playlists />
        </NavigationPanel>
      </HideFromMobile>
      <Videos />
    </Wrapper>
  );
}

export default Home;
