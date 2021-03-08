import { useReducer } from 'react';
import './App.css';

function App() {

  const initialState = {
    name: "",
    text: "",
    todoList: [],
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "change-name":
        return {
          ...state,
          name: action.payload
        }

      case "change-text":
        return {
          ...state,
          text: action.payload
        }

      case "clear-state":
        return {
          name: '',
          text: ''
        }

      default:
        throw new Error("Unknown action")
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = event => {
    event.preventDefault()

    alert("Отправлено сообщение" + state.text + "\n От - " + state.name)

    dispatch({ type: "clear-state" })
  }

  const handleChange = event => {
    dispatch({ type: "change-" + event.target.name, payload: event.target.value })
  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <label>Имя:
          <input type="text" name="name" value={state.name} onChange={handleChange} />
        </label>

        <label>Текст:
          <input type="text" name="text" value={state.text} onChange={handleChange} />
        </label>

        <button type="submit" >Отправить</button>

      </form>

    </div>
  );
}

export default App;
