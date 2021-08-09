import React from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import logo from "../images/logo.svg";
import Navbar from "./Navbar";
import Form from "./Form";

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
`;
const HeaderLogoStyled = styled.a`
  display: inline-block;
  width: var(--w-logo);
  height: auto;
  line-height: 0;
`;

const Header = ({ title }) => {
  return (
    <HeaderStyled>
      <Wrapper>
        <HeaderContainStyled>
          <HeaderLogoStyled>
            <img src={logo} alt={title} />
          </HeaderLogoStyled>
          <Navbar />
          <Form />
        </HeaderContainStyled>
      </Wrapper>
    </HeaderStyled>
  );
};

export default Header;
