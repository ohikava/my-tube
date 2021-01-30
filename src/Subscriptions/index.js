import React,{useEffect, useState} from "react";
import MainList from "../Home/MainList";
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {getSubscriptionsAll} from "../services/SubscribeReducer/actions";
import ChannelThumb from "./ChannelThumb";
import SkeletonChannelThumb from "./SkeletonChannelThumb";

const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  width: 80%;
  flex-wrap: wrap;
  margin: auto;
  @media(min-width: 768px) {
    margin: 0;
  }
`;

const Subscriptions = () => {
  const dispatch = useDispatch();
  const token = useSelector(s => s.user.token);
  const subscriptions = useSelector(s => s.subs.subs);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(getSubscriptionsAll(token, () => setLoading(false)));
  }, [token])
  return (
    <MainList>
    <Wrapper>
      { !loading ? subscriptions.map(i => <ChannelThumb {...i} />) : <SkeletonChannelThumb />}
    </Wrapper>
    </MainList>
  )
};

export default Subscriptions;
