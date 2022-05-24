import style from "./Lista.module.scss";
import Item from "./Item";
import { useState } from "react";
import { ITarefa } from "../../types/ITarefa";

function Lista({tarefas}: {tarefas: ITarefa[]}) {
	
	return (

		<aside className={style.ListaTarefas}>
			<h2>Estudos do dia</h2>
			<ul>
				{tarefas.map((item, index) => (
					<Item 
					key={index}
					tarefa={item.tarefa}
					tempo={item.tempo}
					/>
				))}
			</ul>
		</aside>
	);
}
export default Lista;