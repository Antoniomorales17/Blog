import React from "react";
import Edit from "../../img/edit.png";
import Delete from "../../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import "./Single.css"; // Importa el archivo de estilos CSS

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        {/* Contenido aquí */}
      </div>
      <img
        src="https://images.pexels.com/photos/7008011/pexels-photo-7008011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Imagen del post"
        className="post-image"
      />
      <div className="user">
        <img
          src="https://images.pexels.com/photos/7008012/pexels-photo-7008012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Imagen del usuario"
          className="user-image"
        />
        <div className="info">
          <span className="username">Antonio</span>
          <p className="post-date">Posteado hace 2 días</p>
        </div>
        <div className="edit">
          <Link to={`/write?edit=2`} className="edit-link">
            <img src={Edit} alt="Editar" />
          </Link>
          <img src={Delete} alt="Eliminar" />
        </div>
      </div>
      <h1 className="post-title">Lorem ipsum</h1>
      <p className="post-description">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      </p>
      <Menu/>
    </div>
  );
};

export default Single;
