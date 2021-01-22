import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  &:hover {
    background: ${props => props.theme.maincolorlowopacity};
  }
`;
const Title = styled.span`
  font-size: 1.2rem;
`;
const Author = styled.span`
  font-size: 1rem;
  opacity: .5;
  `;

const Short = ({title, author, id, cb}) => (
  <Link to={`/video/${id}`}>
    <Wrapper onClick={cb}>
      <Title>{title}</Title>
      <Author>{author.name}</Author>
    </Wrapper>
  </Link>
);

Short.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  cb: PropTypes.func
};

export default Short;
