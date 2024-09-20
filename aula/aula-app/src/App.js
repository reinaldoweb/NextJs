import React, { useState, useEffect } from "react";
import "./style.css";

///https://sujeitoprogramador.com/rn-api/?api=posts

function App() {
  const [nutri, setNutri] = useState([]);
  useEffect(() => {
    function loadApi() {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";

      fetch(url)
        .then((response) => response.json())
        .then((json) => setNutri(json));
      console.log(nutri);
    }
    loadApi();
  });

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item) => (
        <article key={item.id} className="post">
          <strong className="title">{item.titulo}</strong>
          <img src={item.capa} alt={item.titulo} className="capa" />
          <p className="subtitulo">{item.subtitulo}</p>
          <a href={item.link} className="botao">
            Acessar
          </a>
        </article>
      ))}
    </div>
  );
}

export default App;
