import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    totalPrice: 0,
    items: []
    
}

const sliceTicket = createSlice({
name: 'sliceTicket',
initialState,
reducers: {
        addTicket(state, action) {
            state.items.push(action.payload);
        },
        removeTicket(state, action) {
            state.items.find((obj) => obj.id === action.payload.id);
          },
          clearTicket(state) {
            state.items = [];
          },
       
      }
})
export const { addTicket,  removeTicket, clearTicket} = sliceTicket.actions;

export default sliceTicket.reducer;