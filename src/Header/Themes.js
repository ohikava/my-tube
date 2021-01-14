import React from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";
import ModalWindow from "../utils/ModalWindow";
import Item from "./Item";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {changeTheme} from "../services/ThemeReducer/actions";
import {THEMES} from "../services/ThemeReducer/actionsTypes";

const CustomItem= styled(Item)`
  background: ${props => props.active && props.theme.maincolor};
  padding: 7px 15px;
  &:hover {
    color: ${props => props.theme.activecold};
  }
`;

const Theme = ({open, close}) => {
  const {t, i18n} = useTranslation();
  const theme = useSelector(s => s.theme.theme);
  const dispatch = useDispatch();
  return (
    <ModalWindow open={open} close={close} title="Theme">
      <CustomItem active={theme === THEMES.STANDART} cb={() => dispatch(changeTheme(THEMES.STANDART))}>{t("Standart")}</CustomItem>
      <CustomItem active={theme === THEMES.CLASSIC} cb={() => dispatch(changeTheme(THEMES.CLASSIC))}>{t("Classic")}</CustomItem>
      <CustomItem active={theme === THEMES.COLD} cb={() => dispatch(changeTheme(THEMES.COLD))}>{t("Cold")}</CustomItem>
      <CustomItem active={theme === THEMES.DARK} cb={() => dispatch(changeTheme(THEMES.DARK))}>{t("Dark")}</CustomItem>
    </ModalWindow>
  );
};

export default Theme;
