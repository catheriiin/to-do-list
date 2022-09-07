import './App.css';
import { List } from './ToDoList';
import imgOne from './write.jpg';

function App() {
return (
  <div>
    <div className='div-deco'>
      <h1>What do you plan to do?</h1>
    <img className='deco' src={imgOne} width="350px" alt="Img"/>
<List/>
</div>
</div>
)
}

export default App;
