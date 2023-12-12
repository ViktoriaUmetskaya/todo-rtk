import React from 'react';
import './Todo.css';
import Form from '../Form/Form.js';
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, toggleTodoAction,removeTodos, removeTodo, editTodo, editText, clearEdit, updateTodo } from '../../Redux/Slices/TodoSlice'
import Delete from '../Img/Delete.png'
import Edit from '../Img/Edit.png';

function Todo(){

    const dispatch = useDispatch();
    const {todos, allTodos, allComplete,editingTodo, editingText } = useSelector(state => state.todo)

    const putTodo=(value)=>{
        if(value){
            dispatch(addTodo({id:Date.now(), text:value, done:false}))
        } else {
            console.log('Введите текст')
        }
    }

    const toggleTodo = (id) => {
        dispatch(toggleTodoAction(id));
    };

    const clearTodos=()=>{
        dispatch(removeTodos())
    }
    
    const editedTodo=(id)=>{
        if(!editingTodo){
        const todoToEdit = todos.find((todo)=>todo.id === id)
        if(todoToEdit){
            dispatch(editTodo(id));
            dispatch(editText(todoToEdit.text))
        }
    }
}
    const saveEditedTodo = () => {
        if(editingText.trim() !==''){
        dispatch(updateTodo({id:editingTodo, text:editingText}));
        dispatch(clearEdit());
      }};

    const handleKeyPress = (e, id) => {
        if (e.key === "Enter") {
            saveEditedTodo(id);
        }
    };

    const handleRemoveTodo=(id)=>{
        dispatch(removeTodo(id))
        dispatch(clearEdit())
    }

 
    return(
        <div className='wrapper'>
            <div className='container'>
                <h1 className='title'>What's the plan for Today?</h1>
                <Form className='forma' putTodo={putTodo} />
                <ul className='todos'>
                    {
                        todos && todos.map(todo=>{
                            return (
                                <li className={todo.done ? 'todo done' : 'todo'} key={todo.id} onClick={() => toggleTodo(todo.id)}>
                                {todo.id === editingTodo ? (
                                <>
                                    <input className='editingInput'
                                       id='editingInput'
                                        type="text"
                                        value={editingText}
                                        onChange={(e) => dispatch(editText(e.target.value))}
                                        onKeyPress={(e) => handleKeyPress(e, todo.id)} 
                                        onBlur={() => saveEditedTodo(todo.id)}
                                    />
                                    <button className='button-update'
                                        onKeyPress={() => saveEditedTodo(todo.id)} 
                                    >Update</button>
                                    </>
                                    ) : (
                                <>
                                    {todo.text}
                                    <img src={Edit} alt='edit' className='edit' onClick={(e)=>{
                                        e.stopPropagation();
                                        editedTodo(todo.id);
                                    }}/>
                                    <img src={Delete} alt='delete' className='delete' onClick={(e)=>{
                                        e.stopPropagation();
                                        handleRemoveTodo(todo.id);
                                    }}/>
                                </>
                                )}
                                </li>
                            )
                        })                        
                    }
                    <div className='info'>
                        <span>All todos: {allTodos}</span>
                        <span>Complete: {allComplete}</span>
                    </div>
                    <button className='btnn' onClick={()=>clearTodos()} >Clear all</button>
                    
                </ul>
            </div>
        </div>
    )
  }
  export default Todo;