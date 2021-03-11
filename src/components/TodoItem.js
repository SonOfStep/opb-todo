import { useContext } from "react"
import Context from "../Context"
import PropTypes from "prop-types"
import "./TodoItem.css"

const TodoItem = ({ todo, index }) => {

    const { actions } = useContext(Context)
    const classes = ["todo"]

    if (todo.completed){
        classes.push("done")
    }

    return(
        <li className={classes.join(' ')} >
            <span className="todo__completed">
                <input 
                    type="checkbox" 
                    checked={ todo.completed }
                    onChange={ () => { actions.toggleComplete(todo.id, todo.completed) } }
                />
            </span>
            <span className="todo__index" >{ index }</span>
            <span className="todo__text" >{ todo.text }</span>
            <span className="todo__remove" >
                <button 
                    className="todo__btn-remove" 
                    onClick={ () => { actions.remove(todo.id) } }
                >&#10006;</button>
            </span>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    actions: PropTypes.object
}

export default TodoItem