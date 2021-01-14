import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import {formatViews, formatDate} from "../utils/format";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 10px;
`;
const Thumb = styled.img`
  width: 100%;
  max-width: 100%;
`;
const Icon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
`;
const Title = styled.span`
  font-size: 1rem;
  height: 40px;
  @media(min-width: 375px) {
    height: 35px;
  }
  @media(min-width: 425px) {
    height: 30px;
  }
  @media(min-width: 768px) {
    height: 45px;
  }
`;
const Views = styled.span`
  font-size: .8rem;
    opacity: .6;
    padding: 0 10px;
`;
const Date = styled.span`
  font-size: 0.8rem;
  opacity: .6;
  text-transform: lowercase;
`;
const Duration = styled.span`
  padding: 2px 5px;
  background: #000;
  color: #fff;
  font-size: .8rem;
  position: absolute;
  right: 10px;
  bottom: 10px;
  @media(min-width: 768px) {
    right: 6px;
    bottom: 6px;
  }
`;
const Channel = styled.span`
  font-size: .8rem;
  color: ${props => props.theme.activecold};
`;

const ThumbContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Thumbnail = ({ i: {id, author, title, views, date, duration}}) => {
  const {i18n, t} = useTranslation();
  const {result: relativeDate, unit} = formatDate(date);
  return (
      <Wrapper>
        <Link to={`/video/${id}`} >
        <ThumbContainer>
          <Thumb src={`thumbnails/${id}.jpg`} />
          <Duration>{duration}</Duration>
        </ThumbContainer>
        <Row>
          <Icon src={`users/${author.id}.jpg`} />
          <Column>
            <Title>{title}</Title>
            <div>
              <Channel>{author.name}</Channel>
              <Views>{views} {t('Views')}</Views>
              <Date>{relativeDate}{t(unit)}{t("Ago")}</Date>
            </div>
          </Column>
          </Row>
          </Link>
      </Wrapper>
  );
};

Thumbnail.propTypes = {
  i: PropTypes.exact({
    img: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    channel: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    author: PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  })
};

export default Thumbnail;
