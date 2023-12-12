import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos:[],
    allTodos:0,
    allComplete:0,
    editingTodo: null,
    editingText:''
}

const TodoSlice = createSlice({
    name:'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
            state.allTodos +=1;
        },
        toggleTodoAction: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo){
                todo.done = !todo.done;
                state.allComplete = state.todos.filter((todo) => todo.done).length;
            }
        },
        removeTodos: (state) => {
            state.todos = [];
            state.allTodos = 0;
            state.allComplete = 0;
        },
        removeTodo: (state, action) => {
            const idToRemove = action.payload;
            state.todos = state.todos.filter((todo) => todo.id !== idToRemove);
            state.allTodos -=1;
            if(state.todos.find((todo) => todo.done )) {
                state.allComplete = state.todos.filter((todo) => todo.done).length;
            } else {
                state.allComplete = 0;
            }
        },
        editTodo: (state, action) => {
            state.editingTodo = action.payload;
        },
        editText: (state, action) => {
            state.editingText = action.payload;
        },
        clearEdit: (state) => {
            state.editingTodo = null;
            state.editingText = ''
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todoToUpdate = state.todos.find((todo) => todo.id === action.payload.id);
            if(todoToUpdate) {
                todoToUpdate.text=text;
                state.editingTodo = null;
                state.editingText = '';
            }
        },
    }
})

export const { editedTodo, removeTodo, addTodo, toggleTodoAction, removeTodos, editTodo, editText, clearEdit, updateTodo } =TodoSlice.actions;
export default TodoSlice.reducer;