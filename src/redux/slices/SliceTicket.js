import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    totalPrice: 0,
    items: [],
    idSeat: 0,
}

const sliceTicket = createSlice({
name: 'sliceTicket',
initialState,
reducers: {
        addSeatInTicket(state, action) {
            state.items.push(action.payload);
        },
        removeTicket(state, action) {
            state.items.find((obj) => obj.id === action.payload.id);
          },
          clearTicket(state) {
            state.items = [];
          },
          setIdSeat(state, action) {
            state.trainSelection = action.payload;
        }
      }
})
export const { addSeatInTicket,  removeTicket, clearTicket, setIdSeat} = sliceTicket.actions;

export default sliceTicket.reducer;