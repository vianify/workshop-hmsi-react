import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../../config/API";
import "./HomeStyle.css";

const Home = () => {
  const [pesan, setPesan] = useState("");

  const kirim = async () => {
    await API.post("/pesan", {
      pesan,
    });
    setPesan("");
  };

  return (
    <div className="container">
      <img
        className="image"
        src="http://itk-hmsi.ac.id/app-assets/images/logo/deret-4.png"
      />
      <h1 className="nama">Himpunan Mahasiswa Sistem Informasi</h1>
      <p>Send me anonymous message</p>
      <div className="formContainer">
        <textarea
          className="formPesan"
          placeholder="Ketikkan pesanmu"
          value={pesan}
          onChange={(input) => setPesan(input.target.value)}
        ></textarea>
      </div>
      <Link to={"/pesan"} className="linkLihatPesan">
        <a>Lihat Pesan</a>
      </Link>
      {pesan.length > 0 && (
        <button className="btnKirim" onClick={kirim}>
          KIRIM
        </button>
      )}
    </div>
  );
};

export default Home;
