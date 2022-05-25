import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss"
import { tempoParaSegundos } from "../../common/utils/date";

export default function Cronometro() {
	console.log('conversao', tempoParaSegundos);
	return (
		<div className={style.cronometro}>
			<p className={style.titulo}>Escolha um card e inicie o cronometro</p>
			<div className={style.relogioWrapper}>
				<Relogio />
			</div>
			<Botao>
				Começar
			</Botao>
		</div>
	);
}