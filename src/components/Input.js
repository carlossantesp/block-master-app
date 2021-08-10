import styled from "styled-components";

const InputStyled = styled.input`
  font: var(--body2);
  border: 1px solid var(--primary);
  border-radius: var(--sm) 0 0 var(--sm);
  display: inline-block;
  padding: 6px 12px;
  @media screen and (min-width: 992px) {
    padding: 12px;
  }
`;

export default InputStyled;
