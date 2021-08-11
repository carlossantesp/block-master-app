import styled from "styled-components";

export const SearchStyled = styled.div`
  transform: ${({ isOpen }) => (isOpen ? "scale(1,1)" : "scale(0,1)")};
  position: fixed;
  top: 0;
  width: 100%;
  height: var(--h-header);
  padding: 0 var(--md);
  background-color: var(--bg-alt);
  display: flex;
  align-items: center;
  gap: var(--md);
  transform-origin: right;
  transition: transform 0.25s ease;
  @media screen and (min-width: 992px) {
    transform: initial;
    display: none;
  }
  form {
    flex: 1;
  }
`;
export const SearchIconStyled = styled.button`
  background-color: transparent;
  display: inline-block;
  color: var(--primary);
  width: var(--w-icon);
  height: var(--w-icon);
  border: none;
  line-height: 0;
  cursor: pointer;
  svg {
    width: inherit;
    height: inherit;
  }
`;
