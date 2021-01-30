import React from "react";
import styled from 'styled-components';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Icon = styled.img`
  border-radius: 50%;
`;
const Name = styled.span`
  font-size: 1.2rem;
`;
const Followers = styled.span`
  font-size: 1rem;
  color:${props => props.theme.fontcolor};
`;

const ChannelThum = ({body, id, followers}) => {
  const {t} = useTranslation();
  return (
    <Link to={`/channel/${id}`}>
      <Wrapper>
        <Icon src={`/users/${id}.jpg`} />
        <Name>{body}</Name>
        <Followers>{followers} {t('Subscribers')}</Followers>
      </Wrapper>
    </Link>
  )
};

ChannelThum.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired
}
export default ChannelThum;
