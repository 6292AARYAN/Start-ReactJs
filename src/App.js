import logo from './logo.svg';
import './App.css';
import Header from"./Components/header"
import {Todo} from"./Components/Todo"
import {Footer} from"./Components/Footer"
import { TodoItems } from './Components/TodoItems';
function App() {
  return (
    <>
<Header/>
<Todo/>
<TodoItems/>
<Footer/>
     

    </>
  );
}

export default App;
