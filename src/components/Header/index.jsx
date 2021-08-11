import React from "react";
import {
  HeaderStyled,
  HeaderContainStyled,
  HeaderLogoStyled,
  HeaderFormStyled,
  HeaderIconsStyled,
} from "./HeaderElement";
import Wrapper from "../Wrapper";
import Navbar from "../Navbar";
import Form from "../Form";
import Icons from "../Icons";
import Search from "../Search";
import useToggle from "../../hooks/useToggle";

const Header = ({ logo, title }) => {
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
