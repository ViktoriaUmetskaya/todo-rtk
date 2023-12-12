import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../Components/Login/Login';
import Registration from '../Components/Registration/Registration';
import Todo from '../Components/Todo/Todo';

const Content=()=>{
  return(
      <div className='content'>

              <Routes>
                  <Route exact path='/' element={<Login/>}/>
                  <Route exact path='/registration' element={<Registration/>}/>
                  <Route exact path='/todo-list' element={<Todo/>}/>
              </Routes>
         
      </div>
  )
}

export default Content