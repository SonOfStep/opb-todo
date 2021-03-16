import PropTypes from 'prop-types'
import TodoItem from "./TodoItem"

const TodoList = ({ todos }) => {
    return (
        <ul className="todolist">
            { todos.map( ( todo, index ) => {
                return <TodoItem 
                    todo={ todo } 
                    index={ ++index } 
                    key={ todo.id }
                />
            } ) }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf( PropTypes.object ).isRequired
}

export default TodoList