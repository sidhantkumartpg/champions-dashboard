import React, { useState } from "react";
import Modal from "react-modal";
import ChampDetails from "./champDetails";

const ChampCard = ({ champ }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function toggleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <div className="champ-card">
      <img className="champ-img" src={champ["image_url"]} alt={champ["name"]} />
      <p className="champ-name" onClick={toggleModal}>
        {champ["name"]}
      </p>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        contentLabel="Champ info"
      >
        <ChampDetails toggleModal={toggleModal} champDetails={champ} />
      </Modal>
    </div>
  );
};

export default ChampCard;
