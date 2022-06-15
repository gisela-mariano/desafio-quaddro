import React from "react";

import ButtonStyle from "./style";


const Button = ({colorStyle, children, type, ...res}) => {

  return (
    <ButtonStyle
    colorStyle={colorStyle}
    type={type}
    {...res}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;