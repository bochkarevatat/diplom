import { createSlice} from "@reduxjs/toolkit";


const initialState = {
  user: {
    first_name: '',
    last_name: '',
    patronymic: '',
    phone: '',
    email: '',
    payment_method: ''
  },
  departure: {
    route_direction_id: '',
    seats: []
  }
};

export const addUser = createSlice({
  name: 'addUser',
  initialState,
  reducers: {
    addUserPayment: (state, actions) => {
      state.user = actions.payload;
    },
    addSeatPassenger: (state, actions) => {
      state.departure.seats = [...state.departure.seats, actions.payload];
    },
    addRouteId: (state, actions) => {
      state.departure.route_direction_id = actions.payload;
    },
    removeSeatPassenger: (state, actions) => {
      state.departure.seats = state.departure.seats.filter((el) => el.coach_id !== actions.payload);
    },
    clearOrder: (state) => {
      state.user = {
        first_name: '',
        last_name: '',
        patronymic: '',
        phone: '',
        email: '',
        payment_method: ''
      };
      state.departure = {
        route_direction_id: '',
        seats: []
      };
    },
    clearOrderPassengers: (state) => {
      state.user = {
        first_name: '',
        last_name: '',
        patronymic: '',
        phone: '',
        email: '',
        payment_method: ''
      };
      state.departure.seats = [];
    },
    clearOrderPayment: (state) => {
      state.user = {
        first_name: '',
        last_name: '',
        patronymic: '',
        phone: '',
        email: '',
        payment_method: ''
      };
    }
  }
});

export const {
  addUserPayment,
  addSeatPassenger,
  addRouteId,
  removeSeatPassenger,
  clearOrder,
  clearOrderPassengers,
  clearOrderPayment
} = addUser.actions;

export const sliceOrderState = (state) => state.addUser

export default addUser.reducer;