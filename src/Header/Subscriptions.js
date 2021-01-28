import React,{useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import Item from "./NotificationItem";
import {useTranslation} from "react-i18next";
import {getSubscriptions} from '../services/SubscribeReducer/actions';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
`;


const Title = styled.span`
  font-size: 1.3rem;
`;

const More = styled.span`
  font-size: 1rem;
  cursor: pointer;
  text-transform: uppercase
  text-align: center;
  color: ${props => props.theme.activecold};
  @media(min-width: 768px) {
    text-align: start;
  }
`;

const Subscriptions = () => {
  const {i18n, t} = useTranslation();
  const dispatch = useDispatch();
  const subscriptions = useSelector(s => s.subs.subsShort);
  const token = useSelector(s => s.user.token);

  useEffect(() => {
    dispatch(getSubscriptions(token));
  })
  return (
    <Wrapper>
    <Title>{t('My Followings')}</Title>
      {
        subscriptions.map((i, index) => <Item i={i} />)
      }
      {subscriptions.length > 0 ? <More>{t('More')}</More> : <More>{t('Empty')}</More>}
    </Wrapper>
  )
};

export default Subscriptions;
