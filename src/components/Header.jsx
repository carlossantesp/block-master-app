import React from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import logo from "../images/logo.svg";
import Navbar from "./Navbar";
import Form from "./Form";
import Icons from "./Icons";
import useToggle from "../hooks/useToggle";
import Search from "./Search";

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: var(--bg);
`;
const HeaderContainStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-header);
  height: var(--h-header);
  position: relative;
  @media screen and (min-width: 992px) {
    justify-content: flex-start;
  }
`;
const HeaderLogoStyled = styled.a`
  display: inline-block;
  width: var(--w-logo);
  height: auto;
  line-height: 0;
`;
const HeaderFormStyled = styled.div`
  display: none;
  flex: 1;
  @media screen and (min-width: 992px) {
    display: inline-block;
  }
`;
const HeaderIconsStyled = styled.div`
  display: flex;
  align-items: center;
  gap: var(--lg);
  @media screen and (min-width: 992px) {
    display: none;
  }
`;

const Header = ({ title }) => {
  const [isOpenMenu, menuToggle] = useToggle();
  const [isOpenSearch, searchToggle] = useToggle();
  return (
    <HeaderStyled>
      <Wrapper>
        <HeaderContainStyled>
          <HeaderLogoStyled href="/">
            <img src={logo} alt={title} />
          </HeaderLogoStyled>
          <Navbar isOpen={isOpenMenu} menuToggle={menuToggle} />
          <HeaderFormStyled>
            <Form />
          </HeaderFormStyled>
          <HeaderIconsStyled>
            <Icons menuToggle={menuToggle} searchToggle={searchToggle} />
          </HeaderIconsStyled>
        </HeaderContainStyled>
      </Wrapper>
      <Search isOpen={isOpenSearch} searchToggle={searchToggle} />
    </HeaderStyled>
  );
};

export default Header;
