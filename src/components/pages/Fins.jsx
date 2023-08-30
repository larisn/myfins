
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Form from "../fins/Form";
import Message from "../layout/Message";
import PriorityForm from "../priority/PriorityForm";
import PriorityCard from "../priority/PriorityCard";


import styles from "../layout/scss-modules/fins.module.scss";
import Loading from "../layout/Loading";
import tree from "../../assets/img/tree2.svg";
import plant from "../../assets/img/plant.svg";


export default function Fins() {
  const { id } = useParams() // resgatar a despesa do banco baseado no id da url

  const [fins, setFins] = useState([])
  const [priority, setPriority] = useState([])

  const [showFinsForm, setShowFinsForm] = useState(false)
  const [showPriorityForm, setShowPriorityForm] = useState(false)

  const [message, setMessage] = useState()
  const [type, setType] = useState()
  

  useEffect(() => {
    setTimeout(() => {
      // simular um carregamento mais demorado para o loading aparecer
      fetch(`https://json-server-deploy.glitch.me/fins/${id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setFins(data);
          setPriority(data.priorities);
        })
        .catch((err) => console.log(err));
    }, 400)
  }, [id])

  function toggleFinsForm() {
    setShowFinsForm(!showFinsForm)
  }

  function togglePriorityForm() {
    setShowPriorityForm(!showPriorityForm)
  }

  function createPriority(fins) {
    setMessage("")

    // validação do valor
    const lastPriority = fins.priorities[fins.priorities.length - 1]

    // adicionar um id que o irá pedir posteriormente para imprimir
    lastPriority.id = uuidv4()

    const lastPriorityValue = lastPriority.cost

    // custo atual da prioridade + último valor, custo da prioridade toda quando for adicionado
    const newValue = parseFloat(fins.cost) + parseFloat(lastPriorityValue)

    // maximum value validation
    if (newValue > parseFloat(fins.value)) {
      setMessage("Valor ultrapassado, verifique o valor total.")
      setType("error")
      fins.priorities.pop() // remover a prioridade
      return false
    }

    // add priority cost to fins total cost
    fins.cost = newValue

    // update priority
    fetch(`https://json-server-deploy.glitch.me/fins/${fins.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(fins),
    })
      .then((resp) => resp.json())
      .then(() => {
        setShowPriorityForm(false);
      })
      .catch((err) => console.log(err));
  }

  function editFins(fins) {
    setMessage("")
    
    // validação do valor disponível
    if (fins.value < fins.cost) {
      // fins.classList.add("formError");
      setMessage("O preço não pode ser menor do que o valor disponível.")
      setType('error')
      return false
    }

    fetch(`https://json-server-deploy.glitch.me/fins/${fins.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(fins),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // alterar a despesa daqui pela despesa do banco atualizada
        setFins(data);
        // esconder o form quando terminar a edição
        setShowFinsForm(false);
        setMessage("Despesa atualizada.");
        setType("success");
      })
      .catch((err) => console.log(err));
  }
  
  function removePriority(id, cost) {
    const prioritiesUpdated = fins.priorities.filter(
      (priority) => priority.id !== id
    )

    const finsUpdated = fins

    finsUpdated.priorities = prioritiesUpdated
    finsUpdated.cost = parseFloat(finsUpdated.cost) - parseFloat(cost)

    fetch(`https://json-server-deploy.glitch.me/fins/${finsUpdated.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(finsUpdated),
    })
      .then((resp) => resp.json())
      .then(() => {
        setFins(finsUpdated);
        setPriority(prioritiesUpdated);
        setMessage("Prioridade removida com sucesso!");
        setType("success");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      {fins.name ? (
        <div>
          {message && <Message type={type} msg={message} />}
          <img src={tree} className={styles.tree} />
          <img src={plant} className={styles.plant} />
          <div className={styles.containerTitle1}>
            <h1>Despesa: {fins.name}</h1>
            <button onClick={toggleFinsForm}>
              {/* trocar o nome do botão de acordo com o click do usuário */}
              {!showFinsForm ? "Editar" : "Fechar"}
            </button>
          </div>

          {!showFinsForm ? (
            // detalhes da despesa
            <div className={styles.containerDetails}>
              <p>
                <span>Categoria:</span>
                <span>{fins?.category?.name}</span>
              </p>
              <p>
                <span>Valor total:</span>
                <span>R$ {fins.value}</span>
              </p>
              <p>
                <span>Total utilizado:</span>
                <span>R$ {fins.cost}</span>
              </p>
            </div>
          ) : (
            // formulário de edição
            <div className={styles.finsInfo}>
              <Form
                handleSubmit={editFins}
                btnText="Concluir edição"
                finsData={fins}
              />
            </div>
          )}
          <div className={styles.details}>
            <div className={styles.containerTitle}>
              <h1>Adicionar uma prioridade:</h1>
              <button onClick={togglePriorityForm}>
                {!showPriorityForm ? "Adicionar" : "Fechar"}
              </button>
            </div>


            <div className={styles.containerPriorityForm}>
              {showPriorityForm && (
                <PriorityForm
                  handleSubmit={createPriority}
                  btnText="Adicionar"
                  finsData={fins}
                />
              )}
            </div>

            <div className={styles.containerFinsPriority}>
              <div className={styles.containerTitle}>
                <h1>Minhas prioridades: </h1>
              </div>

              <div className={styles.contentFinsPriority}>
                {priority.length > 0 && 
                  // para exibir as prioridades no projeto
                  priority.map((priorities) => (
                    <PriorityCard
                      id={priorities.id}
                      name={priorities.name}
                      cost={priorities.cost}
                      description={priorities.description}
                      key={priorities.id}
                      handleRemove={removePriority}
                    />
                  ))
                }
                { priority.length === 0 && <p>Não há prioridades cadastradas.</p> }
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
