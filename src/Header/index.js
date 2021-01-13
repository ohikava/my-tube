import React,{useState} from 'react';
import styled from 'styled-components';
import { useTranslation } from "react-i18next";
import Burger from "./Burger";
import {Link} from "react-router-dom";
import MobileMenuContainer from "./MobileMenuContainer";
import Search from "./Search";
import HideFromMobile from "../utils/HideFromMobile";
import Notifications from "./Notifications";
import Item from "./Item";
import Navigation from "./Navigation";
import Subscriptions from "./Subscriptions";
import Playlists from "./Playlists";
import Spoiler from "../utils/Spoiler";
import Languages from "./Languages";
import Settings from "./Settings";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px 15px;
  z-index: 5;
  @media(min-width: 768px) {
    padding: 15px 50px;
  }
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${props => props.theme.maincolor};
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  letter-spacing: 1.5px;
  cursor: pointer;
  color: #000;
`;

const Icon = styled.img`
  margin: 0 5px;
  cursor: pointer;
  opacity: .7;
  width: 1.7rem;
  @media(min-width: 1024px) {
    width: 1.9rem;
  }
  &:last-child {
    opacity: .8;
    filter: ${props => props.theme.activecoldfilter};
  }
`;

const Title = styled.span`
  font-size: 1.3rem;
  margin-top: 15px;
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

const Header = () => {
  const [isMobileMenuOpen, openMobileMenu] = useState(false);
  const [isOpenNotifications, openNotifications] = useState(false);
  const [isOpenSettings, openSettings] = useState(false);
  const [isOpenLanguages, openLanguages] = useState(false);
  const {t, i18n} = useTranslation();
  return (
    <Wrapper>
      <Link to="/">
        <Logo>LeTube</Logo>
      </Link>
      <HideFromMobile border={760}>
        <Search />
        <div>
        <Icon src="create-video.svg" />
        <Icon src="bell.svg" onClick={() => openNotifications(!isOpenNotifications)}/>
        <Notifications isOpenNotifications={isOpenNotifications}/>
        <Icon src="user-profile.svg" />
        <Icon src="settings.svg" onMouseOver={() => openSettings(true)} onMouseOut={() => openSettings(false)}/>
        <Settings open={isOpenSettings} cbover={() => openSettings(true)} cbout={() => openSettings(false)}>
          <Item cb={() => openLanguages(true)}>{t('Language')}</Item>
        </Settings>
        </div>
      </HideFromMobile>
      <Burger cb={() => openMobileMenu(!isMobileMenuOpen)} />
      <Languages open={isOpenLanguages} close={() => openLanguages(false)}/>
      <MobileMenuContainer isOpen={isMobileMenuOpen}>
        <Search />
        <Title>{t('Notifications')}</Title>
        <Notifications/>
        <Navigation>
          {navigation.map(i => <Item>{t(`${i.body}`)}</Item>)}
        </Navigation>
        <Subscriptions />
        <Playlists />
        <Item>{t('Upload')}</Item>
        <Item>{t('Account')}</Item>
        <Spoiler title={t('Settings')} open={isOpenSettings} height={50} cb={() => openSettings(!isOpenSettings)}>
          <Item cb={() => openLanguages(true)}>{t('Language')}</Item>
        </Spoiler>
      </MobileMenuContainer>
    </Wrapper>
  )
}

export default Header;
