import React, { Fragment } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import logo from "./images/logo.svg";
import Modal from "./components/Modal";
import useModal from "./hooks/useModal";
import MovieDetail from "./components/MovieDetail";

const App = () => {
  const [modal, openModal, closeModal] = useModal();

  return (
    <Fragment>
      <Header logo={logo} title="Block Master" />
      <MovieList openModal={openModal} />
      <Modal openModal={modal} closeModal={closeModal}>
        <MovieDetail />
      </Modal>
    </Fragment>
  );
};

export default App;
