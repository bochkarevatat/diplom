import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        first_name: 'Андрей',
        last_name: 'Белоусов',
        patronymic: 'Рэнович',
        phone: '+7934567654',
        email: 'rem@gmail.com',
        payment_method: ''
      },
      departure: {
        route_direction_id: '',
        seats: []
      }
    
}
const orderPassSlice = createSlice({

    name: 'orderPassenger',
    initialState,
    reducers: {
    addUserPayment: (state, actions) => {
        state.user = actions.payload;
      },
      setAddPassenger: (state, actions) => {
        state.departure.seats = [...state.departure.seats, actions.payload];
        console.log(state.departure.seats, 'state.departure.seats')
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
})

export const {addUserPayment,
    setAddPassenger,
    addRouteId,
    removeSeatPassenger,
    clearOrder,
    clearOrderPassengers,
    clearOrderPayment} = orderPassSlice.actions;

export default orderPassSlice.reducer;