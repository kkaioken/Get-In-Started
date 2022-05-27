import { useState } from "react";
import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import { ITarefa } from "../types/ITarefa";
import style from "./App.module.scss";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();
  function selecionarTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id
    })))
  };

  function finalizarTarefa() {
    if (selecionado) {
      setTarefas(tarefasAnteriores =>
        tarefasAnteriores.map(tarefa => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true
            }
          }
          return tarefa;
        }
        ))
    }
  }
  return (
    <div className={style.AppStyle}>
      <Formulario
        setTarefas={setTarefas}
      />
      <Cronometro
        finalizarTarefa={finalizarTarefa}
        selecionado={selecionado}
      />
      <Lista
        tarefas={tarefas}
        selecionarTarefa={selecionarTarefa}
      />
    </div>
  );
}
export default App;
