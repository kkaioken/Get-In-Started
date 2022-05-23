import "./style.scss";
function Lista() {
	const tarefas = [
		{ tarefa: "React", tempo: "2:00:00" },
		{ tarefa: "JavaScript", tempo: "1:00:00" },
		{ tarefa: "Java", tempo: "0:30:00" }
	];
	return (

		<aside className="listaTarefas">
			<h2>EStudos do dia</h2>
			<ul>
				{tarefas.map((item, index) => (
					<li className="item" key={index}>
						<h3>{item.tarefa}</h3>
						<span>{item.tempo}</span>
					</li>))}
			</ul>
		</aside>
	);
}
export default Lista;