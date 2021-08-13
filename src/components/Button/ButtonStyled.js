import styled from "styled-components";

export const ButtonStyled = styled.button`
  font: var(--button);
  text-align: center;
  border-radius: var(--xs);
  padding: var(--p-button);
  border: 1px solid var(--primary);
  cursor: pointer;
  transition: all 0.35s ease;

  width: ${({ isBlock }) => isBlock && "100%"};
  display: ${({ isBlock }) => (isBlock ? "block" : "inline-block")};
  align-items: center;
  background-color: ${({ typeBtn }) =>
    typeBtn === "primary" ? "var(--primary)" : "var(--black)"};
  color: ${({ typeBtn }) =>
    typeBtn === "primary" ? "var(--black)" : "var(--primary)"};

  &.link {
    background-color: transparent !important;
    color: var(--white) !important;
    padding: 0;
    border: none;
    :hover,
    &.active {
      color: var(--primary) !important;
      text-decoration: underline;
    }
  }
  :hover {
    background-color: ${({ typeBtn }) =>
      typeBtn === "primary" ? "var(--primary-hover)" : "var(--black-hover)"};
  }
  svg {
    width: 1.25rem;
    height: 1.25rem;
    vertical-align: middle;
    margin-right: var(--xs);
  }
`;
