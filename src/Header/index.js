import React,{useState} from 'react';
import styled from 'styled-components';
import Burger from "./Burger";
import MobileMenuContainer from "./MobileMenuContainer";
import Search from "./Search";
import HideFromMobile from "../utils/HideFromMobile";
import Notifications from "./Notifications";
import Item from "./Item";
import Navigation from "./Navigation";
import Subscriptions from "./Subscriptions";
import Playlists from "./Playlists";

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

const Header = () => {
  const [isMobileMenuOpen, openMobileMenu] = useState(false);
  const [isOpenNotifications, openNotifications] = useState(false);

  return (
    <Wrapper>
      <Logo>LETUBE</Logo>
      <HideFromMobile border={760}>
        <Search />
        <div>
        <Icon src="create-video.svg" />
        <Icon src="bell.svg" onClick={() => openNotifications(!isOpenNotifications)}/>
        <Notifications isOpenNotifications={isOpenNotifications}/>
        <Icon src="user-profile.svg" />
        <Icon src="settings.svg" />
        </div>
      </HideFromMobile>
      <Burger cb={() => openMobileMenu(!isMobileMenuOpen)} />
      <MobileMenuContainer isOpen={isMobileMenuOpen}>
        <Search />
        <Title>Уведомления</Title>
        <Notifications/>
        <Navigation>
          {navigation.map(i => <Item>{i.body}</Item>)}
        </Navigation>
        <Subscriptions />
        <Playlists />
        <Item>Загрузить</Item>
        <Item>Аккаунт</Item>
        <Item>Настройки</Item>
      </MobileMenuContainer>
    </Wrapper>
  )
}

export default Header;
