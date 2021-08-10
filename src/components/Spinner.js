import styled from "styled-components";
const SpinnerStyled = styled.div`
  border: var(--border-loader) solid rgba(0, 0, 0, 0.1);
  width: var(--w-loader);
  height: var(--w-loader);
  border-radius: 50%;
  border-left-color: var(--primary);
  border-top-color: var(--primary);
  animation: spin 1s ease infinite;
  margin: 1rem auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default SpinnerStyled;
