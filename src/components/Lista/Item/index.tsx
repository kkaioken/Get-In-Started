import { ITarefa } from "../../../types/ITarefa";
import style from "./Item.module.scss";

interface Props {
	item: ITarefa,
	selecionarTarefa(tarefaSelecionada: ITarefa): void
}


export default function Item({ item, selecionarTarefa }: Props) {
	console.log('Tarefa', item);
	return (
		<li className={`${style.item} ${item.selecionado ? style.itemSelecionado : ''}`}
			onClick={() => selecionarTarefa(item)}>
			<h3>{item.tarefa}</h3>
			<span>{item.tempo}</span>
		</li>
	);
}