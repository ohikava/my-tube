import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import {formatViews, formatDate} from "../utils/format";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  gap: 10px;
  flex-direction: column;
  @media(min-width: 768px) {
    flex-direction: row;
  }
  padding: 0 10px;
`;
const Preview = styled.img`
  height: auto;
  width: 100%;
  @media(min-width: 768px) {
    width: 200px;
  }
  @media(min-width: 1024px) {
    width: 300px;
  }
`;
const Icon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
`;
const Title = styled.span`
  font-size: 1rem;
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

const PreviewContainer = styled.div`
  position: relative;
  z-index: 2;
  margin: 0 -10px;
  @media(min-width: 768px) {
    margin: auto;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Description = styled.div`
  font-size: .8rem;
  overflow: hidden;
  height: 50px;
`;

const More = styled.div`
  font-size: .8rem;
  color: ${props => props.theme.activecold};
`;

const Thumbnail = ({id, author, title, description, views, date, duration}) => {
  const {i18n, t} = useTranslation();
  const {result: relativeDate, unit} = formatDate(date);
  return (
    <Link to={`/video/${id}`}>
      <Wrapper>
        <PreviewContainer>
          <Preview src={`/thumbnails/${id}.jpg`} />
          <Duration>{duration}</Duration>
        </PreviewContainer>
        <Column>
        <Title>{title}</Title>
          <Row>
            <Views>{views}</Views>
            <Date>{relativeDate} {t(unit)} {t('Ago')}</Date>
          </Row>
          <Row>
          <Icon src={`/users/${author.id}.jpg`} />
          <Channel>{author.name}</Channel>
          </Row>
          <Description>{description}</Description>
          <More>{t('More')}</More>
        </Column>
      </Wrapper>
    </Link>
  );
};

Thumbnail.propTypes = {
    title: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    description: PropTypes.string,
    id: PropTypes.string.isRequired,
    author: PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
};

export default Thumbnail;
