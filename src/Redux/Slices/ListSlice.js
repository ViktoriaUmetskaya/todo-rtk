import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users:[]
}

const ListSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addNewUser: (state, action) => {
            state.users.push(action.payload)
        }
    }
})

export const { addNewUser } = ListSlice.actions;
export default ListSlice.reducer;