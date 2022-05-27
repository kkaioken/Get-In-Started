import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss"
import { tempoParaSegundos } from "../../common/utils/date";
import { ITarefa } from "../../types/ITarefa";
import { useEffect, useState } from "react";

interface Props {
	selecionado: ITarefa | undefined,
	finalizarTarefa: () => void,
	 setAtivo: (ativo: boolean) => void
}

export default function Cronometro({ selecionado, finalizarTarefa, setAtivo}: Props) {
	const [tempo, setTempo] = useState<number>();
	useEffect(() => {
		if (selecionado?.tempo) {
			setTempo(tempoParaSegundos(selecionado.tempo));

		}
	}, [selecionado])
	function regressiva(contador: number = 0) {
		setTimeout(() => {
			if (contador > 0) {
				setTempo(contador - 1);
				setAtivo(true);
				return regressiva(contador - 1);
			} else {
				finalizarTarefa();
				setAtivo(false);
			}
		}, 1000);
	}
	return (
		<div className={style.cronometro}>
			<p className={style.titulo}>Escolha um card e inicie o cronometro</p>
			<div className={style.relogioWrapper}>
				<Relogio tempo={tempo} />
			</div>
			<Botao onClick={() => regressiva(tempo)}>
				Começar
			</Botao>
		</div>
	);
}