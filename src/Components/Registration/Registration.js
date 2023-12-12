import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {addUser, clearUser } from '../../Redux/Slices/RegistrationSlice'
import {addNewUser} from '../../Redux/Slices/ListSlice'
import './Registration.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Registration =()=>{
    
    const dispatch = useDispatch()
   
    const user = useSelector((state) => state.registration);
    const url = process.env.REACT_APP_API_URL_REGISTRATION
   
    const SendPromises = e => {
        e.preventDefault()

        axios.post(url, user)
        .then(response => {
        console.log('Пользователь зарегистрирован успешно', response.data);
        dispatch(addNewUser(user));
        dispatch(clearUser())
      })
      .catch(error => {
        console.error('Ошибка при регистрации пользователя', error);
        console.error('Дополнительная информация об ошибке', error.response.data);
      });
    }

    return (
        <div className='register'>
            <h1 className='register_title'>Registration</h1>
            <form className='form' onSubmit={e=>SendPromises(e)}>
            <input
                className='username'
                value={user.username}
                onChange={e=>dispatch(addUser({...user, username: e.target.value}))}
                />
                <input
                className='email'
                value={user.email}
                onChange={e=>dispatch(addUser({...user, email: e.target.value}))}
                />
                <input
                className='password'
                value={user.password}
                onChange={e=>dispatch(addUser({...user, password: e.target.value}))}
                />
                <div className='radio'>
                    <input className='gender-input' type='radio' id='1' value='male' onChange={() => dispatch(addUser({ ...user, gender: 'male' }))} checked={user.gender === 'male'}/>
                    <label className='gender' htmlFor='1'>Male</label>
                    <input className='gender-input' type='radio' id='2' value='female' onChange={()=>dispatch(addUser({ ...user, gender: 'female' }))} checked={user.gender === 'female'}/>
                    <label className='gender' htmlFor='2'>Female</label> 
                </div>
                <input
                className='age'
                value={user.age}
                onChange={e=>dispatch(addUser({...user, age: e.target.value}))}
                />
                <button
                type='submit'
                className='btn'>
                Registration
                </button>
                <div className='link-login'> 
                    <Link className='link-log' to='/'>Login</Link> 
                </div> 
            </form>
        </div>
    )

}
export default Registration