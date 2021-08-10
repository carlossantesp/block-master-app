import React from "react";
import styled from "styled-components";
import img404 from "../images/404.png";

const NotFoundStyled = styled.div`
  max-inline-size: 700px;
  margin: 0 auto;
`;
const NotFoundImageStyled = styled.img`
  margin-block-end: var(--lg);
`;

const NotFoundTitleStyled = styled.p`
  font: var(--body1-bold);
  text-align: center;
  @media screen and (min-width: 992px) {
    font: var(--headline4);
  }
`;

const NotFound = () => {
  return (
    <NotFoundStyled>
      <NotFoundImageStyled src={img404} alt="Image 404 Not found" />
      <NotFoundTitleStyled>
        No se encontraron resultados para "Pokemon"
      </NotFoundTitleStyled>
    </NotFoundStyled>
  );
};

export default NotFound;
