import { createSlice} from "@reduxjs/toolkit";


const initialState = {
  totalSeatsNumber: [],
  seatsChildWithout: 0,
};

export const addUser = createSlice({
  name: 'addUser',
  initialState,
  reducers: {
    setTotalSeatsNumber(state, action) {
      state.totalSeatsNumber = action.payload;
    },
    setSeatsChildWithout(state, action) {
      state.seatsChildWithout = action.payload;
    }
  }
});

export const {
  setTotalSeatsNumber,
  setSeatsChildWithout,
} = addUser.actions;

export const sliceOrderState = (state) => state.addUser

export default addUser.reducer;