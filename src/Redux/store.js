import { configureStore } from '@reduxjs/toolkit';
import LoginSlice from './Slices/LoginSlice';
import RegistrationSlice from './Slices/RegistrationSlice';
import TodoSlice from './Slices/TodoSlice';
import ListSlice from './Slices/ListSlice';
import FormSlice from './Slices/FormSlice';

const store = configureStore({
    reducer: {
        login: LoginSlice,
        registration: RegistrationSlice,
        todo: TodoSlice,
        list: ListSlice,
        form: FormSlice
    }
})

export default store;