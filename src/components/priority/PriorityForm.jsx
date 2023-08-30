
import PropTypes from "prop-types";
import { useState } from "react";
import Input from "../form/Input";
import SubmitButton from '../form/SubmitButton'


export default function PriorityForm({ handleSubmit, btnText, finsData }) {
  const [priority, setPriority] = useState({});

  function submit(e) {
    e.preventDefault();
    finsData.priorities.push(priority)
    handleSubmit(finsData);
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