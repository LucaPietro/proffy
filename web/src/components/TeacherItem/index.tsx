import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQG-r2St7Y2ZCg/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=z249qKpDqKJJ5KWliDpeRnLCTZv20d3Hma-PdaJc6zk"
          alt="Luca Pietro"
        />
        <div>
          <strong>Luca Pietro</strong>
          <span>Química</span>
        </div>
      </header>
      <p>Entusiasta das melhores tecnologias de química avançada.</p>
      <br />
      <br />
      <p>
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
