import shortid from "shortid"

export default function reducer(state, action) {
    switch (action.type) {
        case 'ADD-TODO':
            return state.concat({
                id: shortid.generate(),
                text: action.payload,
                completed: false
            })
        case 'REMOVE-TODO':
            return state.filter(todo => todo.id !== action.payload)
        case 'TOGGLE-COMPLETE':
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    todo.completed = !action.payload.completed
                }
                return todo
            })
        default:
            throw new Error("Unknown type")
    }
}