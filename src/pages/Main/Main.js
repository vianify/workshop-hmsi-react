import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PesanCard from "../../components/PesanCard/PesanCard";
import API from "../../config/API";
import "./MainStyle.css";

const Main = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await API.get("/pesan");
    setData(data.data);
  };

  const deleteHandler = async (id) => {
    await API.delete(`/pesan/${id}`);
    getData();
  };

  return (
    <div className="container">
      <img
        className="image"
        src="http://itk-hmsi.ac.id/app-assets/images/logo/deret-4.png"
      />
      <h1 className="nama">KPP Website</h1>
      <p>List pesan</p>
      <div className="cardContainer">
        {data &&
          data.map((dt, index) => (
            <div key={index}>
              <PesanCard
                pesan={dt.pesan}
                id={dt.id}
                deleteHandler={deleteHandler}
              />
            </div>
          ))}
      </div>
      <Link to={"/"} className="linkKirimPesan">
        <a>Kirim Pesan</a>
      </Link>
    </div>
  );
};

export default Main;
