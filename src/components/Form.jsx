import React from "react";
import styled from "styled-components";
import { ISearch } from "../icons";
import Button from "./Button";
import Input from "./Input";

const FormStyled = styled.form`
  flex: 1;
  width: 100%;
`;
const FormGroupStyled = styled.div`
  display: flex;
  align-items: stretch;
  button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

const Form = () => {
  return (
    <FormStyled>
      <FormGroupStyled>
        <Input placeholder="Busca tu película favorita" />
        <Button typeBtn="primary">
          <ISearch />
        </Button>
      </FormGroupStyled>
    </FormStyled>
  );
};

export default Form;
