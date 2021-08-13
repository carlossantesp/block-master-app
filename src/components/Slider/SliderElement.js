import styled from "styled-components";

export const SlideStyled = styled.div`
  height: var(--h-slider);
  position: relative;
  overflow: hidden;
  border-radius: var(--sm);
  margin-bottom: var(--sm);
  @media screen and (min-width: 768px) {
    margin-bottom: var(--lg);
  }
`;

export const SlideDotsStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--md);
`;
export const SlideDotStyled = styled.div`
  width: var(--w-slider-button);
  height: var(--w-slider-button);
  border-radius: 50%;
  background: ${({ isActive }) => (isActive ? "var(--white)" : "var(--grey)")};
  cursor: pointer;
`;
