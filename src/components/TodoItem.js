import { useContext } from "react"
import Context from "../actions/Context"
import PropTypes from "prop-types"

const TodoItem = ({ todo, index }) => {

    const { actions } = useContext(Context)
    const classes = ["todo"]

    if (todo.completed) {
        classes.push("done")
    }

    return (
        <li className={classes.join(' ')} >
            <input
                id={"checkTodo-" + todo.id}
                type="checkbox"
                className="todo__completed"
                checked={todo.completed}
                onChange={() => { actions.toggleComplete(todo.id, todo.completed) }}
            />
            <label htmlFor={"checkTodo-" + todo.id}>
                <span className="todo__index" >{index}</span>
                <span className="todo__text" >{todo.text}</span>
                <button
                    className="btn todo__btn"
                    onClick={() => { actions.remove(todo.id) }}
                >&#10006;</button>
            </label>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    actions: PropTypes.object
}

export default TodoItem