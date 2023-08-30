
import { useNavigate } from "react-router-dom";
import Form from "../fins/Form";

import styles from "../layout/scss-modules/newfins.module.scss";
import style from "../layout/scss-modules/form.module.scss";
import tree2 from "../../assets/img/tree2.svg";
import womanfins from "../../assets/img/woman-my-fins.svg";


export default function NewFins() {
  const navigate = useNavigate() // no post, redireciona o usuário para outra página

  function createPost(fins) {
    // initialize
    fins.cost = 0
    fins.priorities = []

    fetch("https://json-server-deploy.glitch.me/fins", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(fins),
    })
    .then((data) => {
      console.log(data);
      navigate("/myfins", {message: "Despesa inserida com sucesso!"});
    })
    .catch((err) => console.log(err));
  }
  
  return (
    <section>
      <div className={styles.containerNewFins}>
        <img src={womanfins} className={styles.womanfins} />
        <div>
          <img src={tree2} className={styles.tree2} />
          <h1>Listar minhas despesas</h1>
          <h2>Crie sua lista de despesas para</h2>
          <h2>facilitar sua organização.</h2>

          <div className={style.form}>
            <Form handleSubmit={createPost} btnText="Criar Despesa" />
          </div>
        </div>
      </div>
    </section>
  );
}
