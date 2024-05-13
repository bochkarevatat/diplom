import { createSlice} from "@reduxjs/toolkit";



const initialState = {
  notice: false,
  text: ''
};

export const errorMessage = createSlice({
  name: 'errorMessageSlice',
  initialState,
  reducers: {
    setErrorMessage: (state, actions) => {
      state.notice = actions.payload.notice;
      state.text = actions.payload.text;
    }
  }
});

export const {
    setErrorMessage
} = errorMessage.actions;

export const sliceErrorMessage = (state) => state.errorMessage

export default errorMessage.reducer;