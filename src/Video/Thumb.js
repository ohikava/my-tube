import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import Icon from "./Icon";
import {useTranslation} from "react-i18next";
import {formatViews} from "../utils/format";
import HideFromMobile from "../utils/HideFromMobile";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media(min-width: 726px) {
    padding: 15px;
  }
`;

const Video = styled.video`
  width: 100%;
  max-width: 100%;
  position: fixed;
  z-index: 4;
  @media(min-width: 768px) {
    position: static;
    z-index: 1;
  }
`;
const VideoBox = styled.div`
  width: 100%;
  max-width: 100%;
  background: #fff;
  height: 180px;
  @media(min-width: 375px) {
    height: 210px;
  }
  @media(min-width: 425px) {
    height: 240px;
  }
  @media(min-width: 768px) {
    display: none;
  }
`;

const Title = styled.span`
  font-size: 1.2rem;
`;
const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
`;
const More = styled.img`
  width: 1.2rem;
  @media(min-width: 768px) {
    display: none;
  }
`;

const Views = styled.span`
  font-size: .9rem;
  opacity: .5;
  padding: 0 12px;
  margin-top: -10px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 12px 10px 12px;

`;

const Round = styled.img`
  border-radius: 50%;
  width: 2.5rem;
`;

const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const ChannelName = styled.span`
  font-size: 1rem;
`;
const ChannelSubscribers = styled.span`
  font-size: .8rem;
  opacity: .5;
`;

const Subscribe = styled.button`
  background: transparent;
  color: ${props => props.theme.activecold};
  font-size: .9rem;
  border: none;
  outline: none;
  text-transform: uppercase;
  @media(min-width: 768px) {
    background: ${props => props.theme.maincolor};
    cursor: pointer;
    padding: 5px 10px;
    color: ${props => props.theme.fontcolor};
  }
`;

const Flex = styled.div`
  display: flex;
  gap: 10px;
`;

const MobileToggler = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid ${props => props.theme.fontcolor};
  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 3fr;
    align-items: center;
  }
`;

const Description = styled.span``;

const Data = styled.span`
  font-size: .9rem;
  opacity: .5;
`;

const Thumb = ({ v: {id, author={}, likes, description, dislikes, data, title, views}}) => {
  const {i18n, t} = useTranslation();
  const {result: prettyViews, unit} = formatViews(views);
  return (
    <Wrapper>
      <Video src={`/videos/${id}.webm`}  controls="controls" autoplay />
      <VideoBox />
      <TitleWrapper>
        <Title>{title}</Title>
        <More src="/arrow-down.svg" />
      </TitleWrapper>
      <MobileToggler>
      <Views>{prettyViews} {t(unit)}{t('Views')}</Views>
      <HideFromMobile border="768">
        <Data>{data}</Data>
      </HideFromMobile>
      <Row>
        <Icon icon="/like.svg">{likes}</Icon>
        <Icon icon="/dislike.svg">{dislikes}</Icon>
        <Icon icon="/share.svg">{t('Share')}</Icon>
        <Icon icon="/playlist-save.svg">{t('Save')}</Icon>
      </Row>
      </MobileToggler>
      <Row>
        <Flex>
        <Round src={`/users/${author.id}.jpg`} />
        <ChannelInfo>
          <ChannelName>{author.name}</ChannelName>
          <ChannelSubscribers>{author.followers} {t('Subscribers')}</ChannelSubscribers>
        </ChannelInfo>
        </Flex>
        <Subscribe>{t('Subscribe')}</Subscribe>
      </Row>
      <Row>
        <Description>{description}</Description>
      </Row>
    </Wrapper>
  )
};

Thumb.propTypes = {
  v: PropTypes.exact({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    data: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    dislikes: PropTypes.number.isRequired,
    author: PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      followers: PropTypes.number.isRequired
    })
  })
}

export default Thumb;
