import styled from "styled-components";

export const MovieListStyled = styled.main`
  padding-block-start: var(--section);
  padding-block-end: var(--section);
`;
export const MoviListTitleStyled = styled.h1`
  font: var(--body2-bold);
  margin-block-end: var(--md);
  @media screen and (min-width: 768px) {
    font: var(--headline3);
    margin-block-end: 3rem;
  }
`;
export const MovieListContainStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--w-card), 1fr));
  row-gap: var(--gap-row);
  column-gap: var(--gap-col);
`;
