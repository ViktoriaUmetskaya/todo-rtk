import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value:''
};

const FormSlice = createSlice({
    name:'form',
    initialState,
    reducers:{
        setValue: (state, action) => {
            state.value = action.payload;
        },
        clearValue: (state) => {
            state.value = ';'
        }
    }
})

export const {setValue, clearValue} = FormSlice.actions;
export default FormSlice.reducer;