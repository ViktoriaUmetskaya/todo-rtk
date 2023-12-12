import { createSlice } from '@reduxjs/toolkit';

const LoginSlice = createSlice({
    name: 'login',
    initialState:{
        email:'',
        password:''
    },
    reducers:{
        addEmail: (state, action) => {
            state.email = action.payload;
        },
        addPassword: (state,action) => {
            state.password = action.payload;
        }
    }     
})

export const { addEmail, addPassword} = LoginSlice.actions;
export default LoginSlice.reducer;