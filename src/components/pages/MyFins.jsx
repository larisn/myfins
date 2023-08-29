
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Message from "../layout/Message";
import Button from "../layout/Button";
import Loading from "../layout/Loading";
import FinsCard from "../fins/FinsCard";

import styles from "../layout/scss-modules/myfins.module.scss";
import style from "../layout/scss-modules/fins-card.module.scss";
import womanNewFins from "../../assets/img/woman-new-fins.svg";
import tree2 from "../../assets/img/tree2.svg";
import plant from "../../assets/img/plant.svg";


export default function Fins() {
  const [fins, setFins] = useState([])
  const [finsMessage, setFinsMessage] = useState(null)
  const [removeLoading, setRemoveLoading] = useState(false)
  
  const location = useLocation()
  let message = ""

  if (location.state) { // acessa e checa se existe
    message = location.state.message
  }

  useEffect(() => { // adicionar um loading
    setTimeout(() => {
      // simular um carregamento mais demorado para o loading aparecer
      fetch("https://json-server-larisn.vercel.app/fins", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setFins(data);
          setRemoveLoading(true);
        })
        .catch((err) => console.log(err));
    }, 400)
  }, [])

  function removeFins(id) { // excluir despesa
    fetch(`https://json-server-larisn.vercel.app/fins/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        // excluir a despesa do id que está sendo deletado
        setFins(fins.filter((fins) => fins.id !== id));
        setFinsMessage("Despesa removida com sucesso!");

        const messageDuration = 2000;
        setTimeout(() => {
          setFinsMessage("");
        }, messageDuration);
      })
      .catch((err) => console.log(err));
  }

  return (
    <section>
      {message && <Message type="success" msg={message} />}
      {finsMessage && <Message type="success" msg={finsMessage} />}
      <div className={styles.container}>
        <img src={womanNewFins} className={styles.womanNewFins} />
      </div>
      <img src={tree2} className={styles.tree2} />
      <img src={plant} className={styles.plant} />
      <div>
        <div className={styles.containerTitle}>
          <h1>Minhas despesas</h1>
          <Button to="/newfins" text="Criar Despesa" />
        </div>
      </div>

      
      <div className={style.containerFins}>
        {fins.length > 0 &&
          fins.map((fin) => (
            <FinsCard
              key={fin.id}
              name={fin.name}
              id={fin.id}
              value={fin.value}
              category={fin?.category?.name}
              handleRemove={removeFins}
            />
          ))}

        {/* remover o loading */}
        {!removeLoading && <Loading />}
        {fins.length === 0 && removeLoading ? (
          <h5 className={styles.noFins}>Não há despesas cadastradas.</h5>
        ) : null}
      </div>
    </section>
  );
}
