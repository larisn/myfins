
import PropTypes from "prop-types";
import { useState } from "react";
import Input from "../form/Input";
import SubmitButton from '../form/SubmitButton'


export default function PriorityForm({ handleSubmit, btnText, finsData }) {
  const [priority, setPriority] = useState({
    name: "",
    cost: "",
    description: ""
  });

  function submit(e) {
    // manipular os dados da despesa adicionando prioridades
    e.preventDefault()
    const updatedPriorities = Array.isArray(finsData.priorities)
      ? [...finsData.priorities, priority]
      : [priority];

    const updatedFinsData = { ...finsData, priorities: updatedPriorities };

    handleSubmit(updatedFinsData);
  }

  function handleChange(e) {
    // pegar o objeto atual e inserir um valor especifico para o name e value do input
    setPriority({ ...priority, [e.target.name]: e.target.value })
  }

  return (
    <form autoComplete="off" onSubmit={submit}>
      <Input
        type="text"
        text="Nome da prioridade"
        name="name"
        placeholder="Insira o nome da prioridade"
        handleOnChange={handleChange}
      />

      <Input
        type="number"
        text="Valor da prioridade"
        name="cost"
        placeholder="Insira o valor total da sua prioridade"
        handleOnChange={handleChange}
      />

      <Input
        type="text"
        text="Descrição da prioridade"
        name="description"
        placeholder="Descreva sua prioridade"
        handleOnChange={handleChange}
      />
      
      <SubmitButton text={btnText} />
    </form>
  );
}

PriorityForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  finsData: PropTypes.object.isRequired 
};