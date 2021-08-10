import React from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import logo from "../images/logo.svg";
import Navbar from "./Navbar";
import Form from "./Form";
import Icons from "./Icons";
import useToggle from "../hooks/useToggle";

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
  align-items: center;
  justify-content: space-between;
  height: var(--h-header);
  position: relative;
`;
const HeaderLogoStyled = styled.a`
  display: inline-block;
  width: var(--w-logo);
  height: auto;
  line-height: 0;
`;
const HeaderFormStyled = styled.div`
  display: none;
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
  const [isOpen, setIsOpen] = useToggle();
  return (
    <HeaderStyled>
      <Wrapper>
        <HeaderContainStyled>
          <HeaderLogoStyled href="/">
            <img src={logo} alt={title} />
          </HeaderLogoStyled>
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
          <HeaderFormStyled>
            <Form />
          </HeaderFormStyled>
          <HeaderIconsStyled>
            <Icons setIsOpen={setIsOpen} />
          </HeaderIconsStyled>
        </HeaderContainStyled>
      </Wrapper>
    </HeaderStyled>
  );
};

export default Header;
