import React from 'react';
import styled,{css} from 'styled-components';
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 1.3rem;
`;
const Arrow = styled.img`
  width: 1rem;
  transform: rotate(0);
  transition: 1s;
  ${props => props.open && css`
    transform: rotate(180deg);
    filter: ${props => props.theme.activecoldfilter};
    `}
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 0;
  opacity: 0.5;
  padding: 0 15px;
  overflow: hidden;
  transition: 1s;
  ${props => props.open && css`
      height: ${props => props.height}px;
      padding: 10px 15px;
    `}
`;

const Spoiler = ({children, open, cb, title, height=150}) => (
  <Wrapper>
    <Head onClick={cb}>
      <Title>{title}</Title>
      <Arrow src="/arrow-down.svg" open={open}/>
    </Head>
    <Body height={height} open={open}>
    {children}
    </Body>
  </Wrapper>
);

Spoiler.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node,
  height: PropTypes.number,
  title: PropTypes.string.isRequired,
  cb: PropTypes.func
};

export default Spoiler;
