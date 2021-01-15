import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  gap: 6px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  &:first-child {
    max-width: 55%;
    @media(min-width: 375px) {
      max-width: 45%;
    }
    @media(min-width: 425px) {
      max-width: 40%;
    }
  }
`;
const Thumb = styled.img`
  width: 100%;
  max-width: 100%;
`;
const Duration = styled.span`
  font-size: .7rem;
  background: #000;
  color: #fff;
  padding: 2px;
  position: absolute;
  bottom: 5px;
  right: 5px;
`;
const Title = styled.span`
  font-size: 1rem;
  height: 65px;
  overflow: hidden;
  @media(min-width:375px) {
    height: 55px;
  }

  @media(min-width:425px) {
    height: 50px;
  }
`;
const Author = styled.span`
  font-size: .8rem;
  opacity: .5;
  padding: 0 5px;
`;
const Views = styled.span`
  font-size: .8rem;
  opacity: .5;
  padding: 0 5px;
`;

const ThumbnailRecommendation = ({ i: {id, views, author, title, duration}}) => {
  const {i18n, t} = useTranslation();
  return (
    <Link to={`/video/${id}`}>
    <Wrapper>
        <Column>
          <Thumb src={`/thumbnails/${id}.jpg`} />
          <Duration>{duration}</Duration>
        </Column>
        <Column>
          <Title>{title}</Title>
          <Author>{author.name}</Author>
          <Views>{views} {t('Views')}</Views>
        </Column>
    </Wrapper>
    </Link>
  )
};

ThumbnailRecommendation.propTypes = {
  i: PropTypes.exact({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    author: PropTypes.exact({
      name: PropTypes.string.isRequired
    })
  })
};

export default ThumbnailRecommendation;
