import { ITarefa } from "../../types/ITarefa";
import Item from "./Item";
import style from "./Lista.module.scss";

interface Props {
	tarefas: ITarefa[],
	selecionarTarefa(tarefaSelecionada: ITarefa): void,
	ativo: boolean | undefined

}

function Lista({ tarefas, selecionarTarefa, ativo }: Props) {

	return (

		<aside className={style.ListaTarefas}>
			<h2>Estudos do dia</h2>
			<ul>
				{tarefas.map((item) => (
					<Item
						ativo={ativo}
						key={item.id}
						item={item}
						selecionarTarefa={selecionarTarefa}
					/>
				))}
			</ul>
		</aside>
	);
}
export default Lista;