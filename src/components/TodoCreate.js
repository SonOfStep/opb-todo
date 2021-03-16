import { useContext, useState } from "react"
import Context from "../actions/Context"
import Emoji from "./Emoji"

const TodoCreate = () => {

    const { actions } = useContext(Context)
    const [title, setTitle] = useState('')
    const [notes, setNotes] = useState('')

    const handlerTitle = event => {
        setTitle(event.target.value)
    }
    const handlerNotes = event => {
        setNotes(event.target.value)
    }

    const onSubmit = event => {
        event.preventDefault()

        if (title.trim()) {
            actions.addTodo(title)
            setTitle('')
            setNotes('')
        }
    }

    return (
        <form className="form createTodo" onSubmit={onSubmit} >
            <div className="createTodo__wrapperTitleNotes">
                <input
                    className="form__input createTodo__title"
                    type="title"
                    placeholder="Название"
                    value={title}
                    onChange={handlerTitle}
                />
                <textarea
                    className="form__input createTodo__notes"
                    type="title"
                    placeholder="Заметки"
                    value={notes}
                    onChange={handlerNotes}
                ></textarea>
            </div>
            <button className="btn form__submit createTodo__btn" type="submit"><Emoji symbol="0x1F680" label="sheep" /> </button>
        </form>
    )
}

export default TodoCreate