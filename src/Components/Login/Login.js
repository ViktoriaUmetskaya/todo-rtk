import React from 'react'; 
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'; 
import './Login.css'; 
import {addEmail, addPassword} from '../../Redux/Slices/LoginSlice';

 
const Login = () => { 
    const dispatch = useDispatch();
    const {email, password} = useSelector(state => state.login);
    const navigate = useNavigate() 
    const apiUrl=process.env.REACT_APP_API_URL_LOGIN;
    const SendPromises = async(e) => {
        e.preventDefault()
        try { 
            const response = await fetch(apiUrl, { 
            method: "POST", 
            headers: { 
                "Content-Type": "application/json" 
            }, 
            body: JSON.stringify({ 
                email: email, 
                password: password 
            }) 
            }) 
            const { token } = await response.json(); 
            if (token) { 
                localStorage.setItem("token", token); 
                console.log("token:", token) 
                navigate("/todo-list") 
             }else{
                navigate('/todortk')
            }
            } catch (err) { 
                console.log(err) 
                } 
        } 

    return ( 
        <div className='login'> 
            <h1 className='login_title'>Authorization</h1> 
            <form className='form' onSubmit={(e) => SendPromises(e)}> 
                <input 
                    className='email' 
                    value={email}
                    onChange={e=>dispatch(addEmail(e.target.value))}
                /> 
                <input 
                    className='password'
                    value={password}
                    onChange={e=>dispatch(addPassword(e.target.value))}
                /> 
                <button 
                    className='btn' 
                    type='submit' 
                >Sign in</button> 
                <div className='reg-btn'> 
                    <Link className='link1' to='/registration'>I want register</Link> 
                </div> 
            </form> 
        </div> 
    ) 
} 
 
export default Login