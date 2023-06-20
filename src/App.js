import './App.css';
import Ejemplo2 from './components/container/Ejemplo2';
import TaskListComponent from './components/container/TaskList';

function App() {

  const holaMundo = () => { console.log('Hola mundo') }
  const mostrarEdad = () => { console.log('Tu edad es 21') }

  return (
    <div>
      <h1>APP</h1>
      {/* <TaskListComponent></TaskListComponent> */}
      <Ejemplo2 funcion={holaMundo}><i>Hola mundo</i></Ejemplo2>
      <Ejemplo2 funcion={mostrarEdad}></Ejemplo2>
    </div>
  );
}

export default App;
