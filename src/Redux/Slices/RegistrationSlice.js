import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    email: '',
    password: '',
    gender: '',
    age: ''
}

const RegistrationSlice = createSlice({
    name: "registration",
    initialState,
    reducers:{
        addUser: (state, action) => {
            return { ...state, ...action.payload };
        },
        clearUser: () => {
            return initialState;
        }
    }
})

export const { addUser, clearUser } = RegistrationSlice.actions;
export default RegistrationSlice.reducer;