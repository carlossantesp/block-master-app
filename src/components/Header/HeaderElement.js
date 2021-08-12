import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: var(--bg);
`;
export const HeaderContainStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-header);
  min-height: var(--h-header);
  position: relative;
  @media screen and (min-width: 992px) {
    justify-content: flex-start;
  }
`;
export const HeaderLogoStyled = styled.a`
  display: inline-block;
  width: var(--w-logo);
  height: auto;
  line-height: 0;
`;
export const HeaderFormStyled = styled.div`
  display: none;
  @media screen and (min-width: 992px) {
    display: inline-block;
    flex: 1;
  }
`;
export const HeaderIconsStyled = styled.div`
  display: flex;
  align-items: center;
  gap: var(--lg);
  @media screen and (min-width: 992px) {
    display: none;
  }
`;
