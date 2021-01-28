import React, {useEffect} from 'react';
import styled from 'styled-components';
import Item from "./NotificationItem";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {getNotifications} from "../services/NotificationsReducer/actions";
import {useTranslation} from "react-i18next";

let data = [
  {
    body: "Новое видео о странный вещах",
    icon: "/users/user1.jpg",
    id: 0
  }, {
    body: "Еще одно тупое видео",
    icon: "/users/user2.jpg",
    id: 1
  },
  {
    body: "Очень тупое видео",
    icon: "/users/user3.jpg",
    id: 2
  }
];


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media(min-width: 768px) {
    display: ${props => props.open ? "flex" : "none"};
    flex-direction: column;
    position: absolute;
    top: 100%;
    z-index: 2;
    right: 0;
    width: 300px;
    background: #fff;
    padding: 10px 15px 10px 15px;
    box-shadow: 0px 0px 5px #000;
    div {
      font-size: 1.1rem;
      &:hover {
        color: ${props => props.theme.activecold};
      }
    }
  }
`;

const Error = styled.span`
  font-size: 1rem;
  opacity: .5;
`;

const Notifications = ({isOpenNotifications}) => {
  const notifications = useSelector(s => s.notifications.notifications);
  const token = useSelector(s => s.user.token);
  const dispatch = useDispatch();
  const {t} = useTranslation();
  useEffect(() => {
    dispatch(getNotifications(token));
  })
  return (
    <Wrapper open={isOpenNotifications} data-testid={'notifications'}>
      {
        notifications.length > 0 ? notifications.map(i => <Item key={i.id} i={i} />) : <Error>{t('Empty')}</Error>
      }
    </Wrapper>
  );
};

Notifications.propTypes = {
  isOpenNotifications: PropTypes.bool
};

export default Notifications;
