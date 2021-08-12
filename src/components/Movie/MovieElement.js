import styled from "styled-components";

export const MovieStyled = styled.article`
  position: relative;
  overflow: hidden;
  min-inline-size: var(--w-card);
  border-radius: var(--sm);
  cursor: pointer;
`;
export const MovieVoteStyled = styled.p`
  font: var(--body2-bold);
  display: flex;
  align-items: center;
  position: absolute;
  top: var(--top-card);
  left: 0;
  background-color: rgba(167, 169, 190, 0.84);
  border: 3px solid #0e3fa9;
  border-left: none;
  border-color: ${({ vote }) => vote >= 7 && "var(--primary)"};
  border-radius: 0 var(--xxlg) var(--xxlg) 0;
  padding: 0.375rem 0.625rem;
  svg {
    width: var(--md);
    height: var(--md);
    margin-inline-end: 0.125rem;
  }
  @media screen and (min-width: 768px) {
    font: var(--headline4);
    padding: var(--xs) var(--md);
    svg {
      width: var(--lg);
      height: var(--lg);
      margin-inline-end: var(--sm);
    }
  }
`;
export const MovieImageStyled = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
