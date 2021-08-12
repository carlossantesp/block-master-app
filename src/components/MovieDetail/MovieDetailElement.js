import styled from "styled-components";

export const MovieWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--md);
  @media screen and (min-width: 992px) {
    flex-direction: row;
    gap: var(--xxlg);
    align-items: center;
  }
`;
export const MovieImageStyled = styled.div`
  position: relative;
  min-inline-size: var(--w-card-modal);
  margin: 0 auto;
  img {
    width: 100%;
    object-position: top;
    object-fit: cover;
  }
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
export const MovieInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--md);
`;
export const MovieTitleStyled = styled.h4`
  font: var(headline5);
`;
export const MovieDescStyled = styled.p`
  font: var(--body2);
`;
export const MovieMoreStyled = styled.div`
  color: var(--grey);
  display: inline-block;
  word-break: break-all;
  font: var(--body2);
  p {
    margin-left: var(--sm);
    display: inline;
    ::before {
      content: "●";
      margin-right: var(--sm);
      font-size: 0.5em;
      position: relative;
      top: -0.25rem;
    }
    :first-child {
      margin-left: 0;
      ::before {
        content: "";
        margin-right: 0;
      }
    }
    span::before {
      content: "/";
    }
    span:first-child {
      ::before {
        content: "";
      }
    }
  }
`;

export const MovieButtonsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--md);
  button {
    :first-child {
      order: 2;
      @media screen and (min-width: 768px) {
        order: -1;
      }
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
