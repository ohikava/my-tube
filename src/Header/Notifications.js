import React from 'react';
import styled from 'styled-components';
import Item from "./NotificationItem";
import PropTypes from "prop-types";

let data = [
  {
    body: "Новое видео о странный вещах",
    icon: "users/user1.jpg",
    id: 0
  }, {
    body: "Еще одно тупое видео",
    icon: "users/user2.jpg",
    id: 1
  },
  {
    body: "Очень тупое видео",
    icon: "users/user3.jpg",
    id: 2
  }
];


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media(min-width: 768px) {
    display: ${props => props.isOpenNotifications ? "flex" : "none"};
    position: fixed;
    background: white;
    border: 1px solid rgb(238, 238, 238);
    padding: 10px;
    right: 15px;
    top: 70px;
  }
`;

const Error = styled.span`
  font-size: 1rem;
  opacity: .5;
`;

const Notifications = ({isOpenNotifications}) => {
  if(data.length === 0) {
    return (
      <Wrapper isOpenNotifications={isOpenNotifications} data-testid={'notifications'}>
        <Error>Notification box is empty</Error>
      </Wrapper>
    )
  };

  return (
    <Wrapper isOpenNotifications={isOpenNotifications} data-testid={'notifications'}>
      {
        data.map(i => <Item key={i.id} i={i} />)
      }
    </Wrapper>
  );
};

Notifications.propTypes = {
  isOpenNotifications: PropTypes.bool
};

export default Notifications;
