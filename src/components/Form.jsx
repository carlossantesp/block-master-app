import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { ISearch } from "../icons";
import Button from "./Button";
import Input from "./Input";
import { SEARCH_MOVIE, SET_FILTER } from "../actions";

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
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get("title");
    if (query) {
      return dispatch({
        type: SEARCH_MOVIE,
        payload: query,
      });
    }
    return dispatch({
      type: SET_FILTER,
      payload: {
        type: "all",
        title: "Todas las peliculas",
      },
    });
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
      <FormGroupStyled>
        <Input
          placeholder="Busca tu película favorita"
          name="title"
          type="text"
        />
        <Button typeBtn="primary" type="submit">
          <ISearch />
        </Button>
      </FormGroupStyled>
    </FormStyled>
  );
};

export default Form;
