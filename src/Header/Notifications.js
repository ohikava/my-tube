import React from 'react';
import styled from 'styled-components';
import Item from "./NotificationItem";
import PropTypes from "prop-types";

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
  if(data.length === 0) {
    return (
      <Wrapper isOpenNotifications={isOpenNotifications} data-testid={'notifications'}>
        <Error>Notification box is empty</Error>
      </Wrapper>
    )
  };

  return (
    <Wrapper open={isOpenNotifications} data-testid={'notifications'}>
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
