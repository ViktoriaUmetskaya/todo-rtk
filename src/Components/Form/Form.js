import React from 'react';
import './Form.css';
import { useSelector, useDispatch} from 'react-redux';
import { setValue, clearValue} from '../../Redux/Slices/FormSlice'


const Form=({putTodo})=>{
    const dispatch = useDispatch();
    const value = useSelector((state) => state.form.value)
    return(
        <form className="forma" onSubmit={e=>{
            e.preventDefault();
            putTodo(value);
            dispatch(clearValue());
        }}>
            <input type='text' maxLength="50" placeholder='Add a todo' className='input' id='input' value={value} onChange={e=> dispatch(setValue(e.target.value))}/>
            <button className='button'>Add Todo</button>
        </form>
    )
}

export default Form;