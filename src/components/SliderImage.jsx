import React from "react";
import { IPlay, IPlus } from "../icons";
import Button from "./Button";
import styled from "styled-components";

const SlideWrapperStyled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity ease-in-out 0.4s;
`;
const SlideImageStyled = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
  object-position: center;
`;
const SlideButtonsStyled = styled.div`
  display: none;
  @media screen and (min-width: 992px) {
    position: absolute;
    bottom: var(--md);
    left: var(--md);
    display: flex;
    gap: var(--md);
  }
`;

const SliderImage = ({ movie, isVisible, ...otherProps }) => {
  const { backdrop_path, title } = movie;

  return (
    <SlideWrapperStyled isVisible={isVisible} {...otherProps}>
      <SlideImageStyled
        src={`//image.tmdb.org/t/p/w780${backdrop_path}`}
        alt={title}
      />
      <SlideButtonsStyled>
        <Button typeBtn="primary" type="button">
          <IPlay /> VER AHORA
        </Button>
        <Button typeBtn="secondary" type="button">
          <IPlus /> VER DESPUÉS
        </Button>
      </SlideButtonsStyled>
    </SlideWrapperStyled>
  );
};

export default SliderImage;
