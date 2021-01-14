import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {useTranslation} from "react-i18next";

const Wrapper = styled.div`
  padding: 15px 30px 15px 10px;
  display: flex;
  border-top: 1px solid ${props => props.theme.fontcolor};
  flex-direction: column;
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.span`
  font-size: 1.2rem;
`;
const Amount = styled.span`
  font-size: 1.2rem;
  opacity: .5;
`;
const Flex = styled.div`
  display: flex;
  gap: 15px;
`;
const Arrow = styled.img`
  width: 1.2rem;
`;

const Comments = ({children, amount}) => {
  const {i18n, t} = useTranslation();
  return (
    <Wrapper>
    <Head>
      <Flex>
        <Title>{t('Comments')}</Title>
        <Amount>{amount}</Amount>
      </Flex>
      <Arrow src="/arrow-down.svg" />
    </Head>
      {
        children
      }
    </Wrapper>
  )
};

Comments.propTypes = {
  children: PropTypes.node,
  amount: PropTypes.number.isRequired
};

export default Comments;
