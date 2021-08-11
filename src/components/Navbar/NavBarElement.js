import styled from "styled-components";

export const NavStyled = styled.nav`
  transform: ${({ isOpen }) => (isOpen ? "scale(1,1)" : "scale(0,1)")};
  transform-origin: right;
  transition: transform 0.25s ease;
  position: fixed;
  top: var(--h-header);
  right: 0;
  height: var(--h-full);
  width: 70%;
  background-color: var(--bg-alt);
  padding-inline-end: var(--gap-header);
  padding-inline-start: var(--gap-header);
  padding-block-start: 3rem;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 992px) {
    position: initial;
    inset: initial;
    width: initial;
    height: initial;
    background-color: transparent;
    padding-block-start: 0;
    transform: initial;
    padding-inline-end: 0;
    padding-inline-start: 0;
  }
`;
export const FiltersStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--gap-header);
  text-align: center;
  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;
export const FilterItemStyled = styled.li`
  width: 100%;
  button {
    width: inherit;
  }
  @media screen and (min-width: 992px) {
    width: initial;
  }
`;
