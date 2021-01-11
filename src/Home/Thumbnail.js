import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import {formatViews, formatDate} from "../utils/format";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  gap: 5px;
  cursor: pointer;
  padding-bottom: 25px;
  @media(min-width: 768px) {
    padding: 0;
  }
`;
const Thumb = styled.img`
  max-width: 100%;
  width: 100%;
`;
const Icon = styled.img`
  width: 2.4rem;
  border-radius: 50%;
`;
const Title = styled.span`
  font-size: 1rem;
  display: block;
  @media(min-width: 768px) {
    height: 70px;
  }
`;
const Views = styled.span`
  font-size: .8rem;
    opacity: .6;
  padding-right: 5px;
`;
const Date = styled.span`
  font-size: 0.8rem;
  opacity: .6;
`;
const Duration = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  padding: 2px 5px;
  background: #000;
  color: #fff;
  font-size: .8rem;
`;
const Channel = styled.span`
  font-size: .8rem;
  color: ${props => props.theme.activecold};
  padding-right: 10px;
`;

const ThumbContainer = styled.div`
  position: relative;
  z-index: 2;
  grid-column-start: 1;
  grid-column-end: 3;
`;
const Column = styled.div`
  padding: 5px;
`;

const Thumbnail = ({ i: {img, icon, channel, title, views, date, duration}}) => (
    <Wrapper>
      <ThumbContainer>
        <Thumb src={`thumbnails/${img}`} />
        <Duration>{duration}</Duration>
      </ThumbContainer>
      <Column>
        <Icon src={`users/${icon}`} />
      </Column>
      <Column>
        <Title>{title}</Title>
        <div>
          <Channel>{channel}</Channel>
          <Views>{formatViews(views)}</Views>
          <Date>{formatDate(date)}</Date>
        </div>
      </Column>
    </Wrapper>
);

Thumbnail.propTypes = {
  i: PropTypes.exact({
    img: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    channel: PropTypes.string.isRequired
  })
};

export default Thumbnail;
