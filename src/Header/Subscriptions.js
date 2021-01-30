import React,{useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import Item from "./NotificationItem";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
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

const Subscriptions = ({close}) => {
  const {i18n, t} = useTranslation();
  const dispatch = useDispatch();
  const subscriptions = useSelector(s => s.subs.subsShort);
  const token = useSelector(s => s.user.token);

  useEffect(() => {
    dispatch(getSubscriptions(token));
  }, [token])
  return (
    <Wrapper>
    <Title>{t('My Followings')}</Title>
      {
        subscriptions.map((i, index) => <Item i={i} cb={close} />)
      }
      {subscriptions.length > 0 ? <Link to="/subscriptions"><More onClick={close}>{t('More')}</More></Link> : <More>{t('Empty')}</More>}
    </Wrapper>
  )
};

Subscriptions.propTypes = {
  close: PropTypes.func
};

export default Subscriptions;
