import { useEffect, useMemo, useReducer } from 'react';
import Context from './Context'
import './App.css';
import TodoList from './components/TodoList';
import reducer from './reducer';
import TodoCreate from './components/TodoCreate';

function App() {

  let todos = [
    {
      id: 1,
      text: "Не главное с какой скоростью ты двигаешься, самое главное - не останавливайся! Ежжи",
      completed: false
    }
  ]

  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem("todos")) || todos)

  useEffect( () => {
    localStorage.setItem("todos", JSON.stringify(state))
  }, [state] )

  const actions = useMemo( () => ({
    addTodo: text => {
      dispatch({ type: "ADD-TODO", payload: text })
    },
    toggleComplete: ( id, completed ) => {
      dispatch({type: "TOGGLE-COMPLETE", payload: {id, completed}})
    },
    remove: id => {
      dispatch({ type: "REMOVE-TODO", payload: id })
    }
  }), [])

  useEffect( () => {
    console.log(state)
  }, [state] )

  return (
    <Context.Provider value={{ actions }}>
      <div className="wrapper">
        <TodoCreate />
        { state.length ? <TodoList todos={ state } /> : <p>Нет задач</p> }
      </div>
    </Context.Provider>
  );
}

export default App;
