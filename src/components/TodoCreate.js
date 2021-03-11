import { useContext, useState } from "react"
import Context from "../Context"
import "./TodoCreate.css"

const TodoCreate = () => {

    const { actions } = useContext(Context)
    const [textNewTodo, setTextNewTodo] = useState('')

    const onChange = event => {
        setTextNewTodo(event.target.value)
    }

    const onSubmit = event => {
        event.preventDefault()

        if (textNewTodo.trim()) {
            actions.addTodo(textNewTodo)
            setTextNewTodo('')
        }
    }

    return (
        <form className="form" onSubmit={onSubmit} >
            <input className="form__input" type="text" value={textNewTodo} onChange={onChange} />
            <button className="btn form__btn" type="submit">&#43;</button>
        </form>
    )
}

export default TodoCreate