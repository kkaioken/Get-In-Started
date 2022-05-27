import style from "./Relogio.module.scss"

interface Props {
	tempo: number | undefined
}

export default function Relogio({ tempo = 0 }: Props) {
	const horas = Math.floor(tempo /3600) %60;
	const minutos = Math.floor(tempo / 60) %60;
	const segundos = tempo % 60;
	const [horaDezena, horaUnidade] = String(horas).padStart(2, '0');
	const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');
	const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');
	return (
		<>
			<span className={style.relogioNumero}>{horaDezena}</span>
			<span className={style.relogioNumero}>{horaUnidade}</span>
			<span className={style.relogioDivisao}>:</span>
			<span className={style.relogioNumero}>{minutoDezena}</span>
			<span className={style.relogioNumero}>{minutoUnidade}</span>
			<span className={style.relogioDivisao}>:</span>
			<span className={style.relogioNumero}>{segundoDezena}</span>
			<span className={style.relogioNumero}>{segundoUnidade}</span>
		</>
	)
}