import React,{useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Item from "./Item";

const Wrapper = styled.div`
  display: ${props => props.open ? "flex" : "none"};
  flex-direction: column;
  position: fixed;
  z-index: 7;
  width: 150px;
  background: white;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  box-shadow: 0px 0px 5px #000;
  @media(min-width: 768px) {
    width: 200px;
  }
`;
const Title = styled.div`
  font-size: 1.6rem;
`;
const Row = styled.div`
  display: flex;
    border-bottom: 1px solid ${props=> props.theme.activecold};
  justify-content: space-between;
  padding: 0 10px;
`;
const Close = styled.img`
  width: 1rem;
`;

const CustomItem= styled(Item)`
  background: ${props => props.active && props.theme.maincolor};
  padding: 7px 15px;
`;

const Languages = ({open, close}) => {
  const [lang, setLang] = useState(0);
  return (
    <Wrapper open={open}>
      <Row>
        <Title>
          Языки
        </Title>
        <Close src="close.svg" onClick={close}/>
      </Row>
      <CustomItem img="russia.svg" active={lang === 0} cb={() => setLang(0)}>Русский</CustomItem>
      <CustomItem img="english.svg" active={lang === 1} cb={() => setLang(1)}>English</CustomItem>
    </Wrapper>
  );
};

Languages.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func
};

export default Languages;
