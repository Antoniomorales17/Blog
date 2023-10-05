import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
    const [value, setValue] = useState()
    return(

    <div className="add">
        <div className="content">
            <input type="text" placeholder="Title" />
            <div className="editorContainer">
            <ReactQuill theme="snow" value={value} onChange={setValue} />;

            </div>
        </div>
        <div className="menu">
            <div className="item">
            <h1>Publicar</h1>
            <span>
                <b>Estado </b> Borrador 
            </span>
            <span>
                <b>Visibilidad </b> Publico
            </span>
            <input type="file"  name=" " id="file " />
            <label htmlFor="file">Subir imagen</label>
            <div className="buttons">
                <button>Guardar como borrador</button>
                <button>Subir</button>
            </div>

            </div>
            <div className="item">
                <h1>Categoria </h1>
                <input type="radio" name="cat" value="art" id="art"></input>
                <label htmlFor="art">Art</label>
                <input type="radio" name="cat" value="technology" id="technology"></input>
                <label htmlFor="technology">Tecnología</label>
                <input type="radio" name="cat" value="design" id="design"></input>
                <label htmlFor="art">Diseño</label>
                <input type="radio" name="cat" value="cinema" id="cinema"></input>
                <label htmlFor="cinema">Cine</label>
                <input type="radio" name="cat" value="science" id="science"></input>
                <label htmlFor="science">Ciencia</label>
                <input type="radio" name="cat" value="food" id="food"></input>
                <label htmlFor="food">Comida</label>
                


            </div>
        </div>
    </div>
    )
}

export default Write;