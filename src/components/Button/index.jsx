import React from "react";
import { ButtonStyled } from "./ButtonStyled";

const Button = ({
  children,
  typeBtn = "primary",
  isBlock = false,
  isLink = false,
  isActive = false,
  ...otherProps
}) => {
  return (
    <ButtonStyled
      typeBtn={typeBtn}
      isBlock={isBlock}
      className={`${isActive ? "active" : ""} ${isLink ? "link" : ""}`}
      {...otherProps}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
