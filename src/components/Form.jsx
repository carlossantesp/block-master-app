import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { ISearch } from "../icons";
import Button from "./Button";
import Input from "./Input";
import { SEARCH_MOVIE, SET_FILTER } from "../actions";

const FormGroupStyled = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 100%;
  }
  button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding: 6px 12px;
    line-height: 0;
    @media screen and (min-width: 992px) {
      padding: 12px 24px;
    }
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
    <form onSubmit={handleSubmit}>
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
    </form>
  );
};

export default Form;
