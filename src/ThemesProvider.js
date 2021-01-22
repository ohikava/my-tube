import React from "react";
import {useSelector} from "react-redux";
import {ThemeProvider} from "styled-components";
import {PropTypes} from "prop-types";

const themes = {
  "Standart": {
    maincolor: '#b0e2a7',
    extrcolor: '#d4f5c5',
    fontcolor: '#000',
    activecold: '#2b5eff',
    activecoldfilter: "invert(27%) sepia(48%) saturate(2739%) hue-rotate(214deg) brightness(115%) contrast(115%)",
    fontfamily: 'Source Sans Pro',
    maincolorlowopacity: "#e8e3e3"
  },
  "Classic": {
    maincolor: '#ff0000',
    extrcolor: '#ffdbdb',
    fontcolor: '#000',
    activecold: '#2b5eff',
    activecoldfilter: "invert(27%) sepia(48%) saturate(2739%) hue-rotate(214deg) brightness(115%) contrast(115%)",
    fontfamily: 'Source Sans Pro',
    maincolorlowopacity: "#ffc1c1"
  },
  "Dark": {
    maincolor: '#6b6b6b',
    extrcolor: '#373737',
    fontcolor: '#ffffff',
    activecold: '#2b5eff',
    activecoldfilter: "invert(27%) sepia(48%) saturate(2739%) hue-rotate(214deg) brightness(115%) contrast(115%)",
    fontfamily: 'Source Sans Pro',
    maincolorlowopacity: "#e8e3e3"
  },
  "Cold": {
    maincolor: '#004cff',
    extrcolor: '#858aff',
    fontcolor: '#000',
    activecold: '#2b5eff',
    activecoldfilter: "invert(27%) sepia(48%) saturate(2739%) hue-rotate(214deg) brightness(115%) contrast(115%)",
    fontfamily: 'Source Sans Pro',
    maincolorlowopacity: "#c3cfff"
  }
};

const ThemesProvider = ({children}) => {
  const theme = useSelector(s => s.theme.theme);
  return (
    <ThemeProvider theme={themes[theme]}>
      {children}
    </ThemeProvider>
  )
};

ThemesProvider.propTypes = {
  children: PropTypes.node
};

export default ThemesProvider;
