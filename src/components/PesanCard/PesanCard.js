import React from "react";
import "./PesanCardStyle.css";

const PesanCard = ({ pesan, deleteHandler, id }) => {
  return (
    <div className="pesanCardContainer">
      <p>{pesan}</p>
      <button className="btnHapus" onClick={() => deleteHandler(id)}>
        Hapus
      </button>
    </div>
  );
};

export default PesanCard;
