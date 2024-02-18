import { createSlice, nanoid } from "@reduxjs/toolkit"

export type Todo = {
    id: string,
    text: string,
}
export interface RootState {
    todos: Todo[];
}

const initialState : RootState = {
    todos: JSON.parse(localStorage.getItem("todos")!),
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {id: nanoid(), text: action.payload };
            state.todos.push(todo);
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => action.payload !== todo.id);
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(prevTodo => prevTodo.id === action.payload ? {...prevTodo, text: action.payload.text} : prevTodo);
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;