import { v4 as uuidv4 } from 'uuid'
import React from "react";
import { ITarefa } from "../../types/ITarefa";
import Botao from "../Botao";
import style from "./Form.module.scss";

class Formulario extends React.Component<{
	setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
	state = {
		tarefa: "",
		tempo: "00:00:00"
	}
	adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
		evento.preventDefault();
		this.props.setTarefas(tarefasAntigas => [
			...tarefasAntigas,
			{
				...this.state,
				selecionado: false,
				completado: false,
				id: uuidv4()
			}
		]);
		this.setState({
			tarefa: "",
			tempo: "00:00:00"
		});
	};
	render() {
		return (
			<form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
				<div className={style.inputContainer}>
					<label htmlFor="tarefa">Adicione um novo estudo</label>
					<input
						name="tarefa"
						id="tarefa"
						type="text"
						value={this.state.tarefa}
						onChange={evento => this.setState({
							...this.state, tarefa: evento.target.value
						})}
						required
						placeholder="O que você quer estudar?"
					/>
				</div>
				<div className={style.inputContainer}>
					<label htmlFor="tempo">Tempo</label>
					<input
						name="tempo"
						id="tempo"
						type="time"
						value={this.state.tempo}
						onChange={evento => this.setState({
							...this.state, tempo: evento.target.value
						})}
						step="1"
						required
						min="00:00:00"
						max="01:30:00"
					/>
				</div>
				<Botao type="submit">
					Adicionar
				</Botao>
			</form>
		);
	}
}
export default Formulario;