import { createSlice} from "@reduxjs/toolkit";


const initialState = {
    firstClass: {
      seatsAge: 0,
      seatsChild: 0,
      seatsNumber: [],
      amountTickets: 0, // seatsAge + seatsChild
      seatsPriceAge: 0,
      seatsPriceChild: 0,
      totalPrice: 0 // seatsPrice + serviceWifi + serviceLinens
    },
    secondClass: {
      seatsAge: 0,
      seatsChild: 0,
      seatsNumber: [],
      amountTickets: 0, // seatsAge + seatsChild
      seatsPriceAge: 0,
      seatsPriceChild: 0,
      totalPrice: 0 // seatsPrice + serviceWifi + serviceLinens
    },
    thirdClass: {
      seatsAge: 0,
      seatsChild: 0,
      seatsNumber: [],
      amountTickets: 0, // seatsAge + seatsChild
      seatsPriceAge: 0,
      seatsPriceChild: 0,
      totalPrice: 0 // seatsPrice + serviceWifi + serviceLinens
    },
    fourthClass: {
      seatsAge: 0,
      seatsChild: 0,
      seatsNumber: [],
      amountTickets: 0, // seatsAge + seatsChild
      seatsPriceAge: 0,
      seatsPriceChild: 0,
      totalPrice: 0 // seatsPrice + serviceWifi + serviceLinens
    },
    objTicket: {
      numberOld: 0,
      numberChild: 0,
      priceChild: 0,
      sumOld: 0,
      sumChild: 0,
      totalPriceAll: 0
     },
    // seatsChildWithout: 0,
    totalSeatsAge: 0,
    // totalSeatsChild: 0,
    // totalSeatsNumber: [],
    // totalAmountTickets: 0,
    // totalPriceAge: 0,
    // totalPriceChild: 0,
    totalPriceAll: 0,
    ticket: 0,
    ticketTrue: false,
    result: '',
    seatsType: [],
    trainCoach: [],
    classType:'',
    topPrice: 0,
  };
  
  export const slicePrice = createSlice({
    name: 'slicePrice',
    initialState,
    reducers: {
      changeAgeTickets: (state, action) => {
        if (action.payload.classType === 'first') {
          state.firstClass.seatsAge = action.payload.seatsAge;
          state.firstClass.amountTickets = state.firstClass.seatsChild + action.payload.seatsAge;
        }
        if (action.payload.classType === 'second') {
          state.secondClass.seatsAge = action.payload.seatsAge;
          state.secondClass.amountTickets = state.secondClass.seatsChild + action.payload.seatsAge;
        }
        if (action.payload.classType === 'third') {
          state.thirdClass.seatsAge = action.payload.seatsAge;
          state.thirdClass.amountTickets = state.thirdClass.seatsChild + action.payload.seatsAge;
        }
        if (action.payload.classType === 'fourth') {
          state.fourthClass.seatsAge = action.payload.seatsAge;
          state.fourthClass.amountTickets = state.fourthClass.seatsChild + action.payload.seatsAge;
        }
        const amountTickets = state.firstClass.seatsAge + state.secondClass.seatsAge + state.thirdClass.seatsAge + state.fourthClass.seatsAge;
        state.totalSeatsAge = amountTickets;
        state.totalAmountTickets = state.totalSeatsAge + state.totalSeatsChild;
      },
      changeChildTickets: (state, action) => {
        if (action.payload.classType === 'first') {
          state.firstClass.seatsChild = action.payload.seatsChild;
          state.firstClass.amountTickets = state.firstClass.seatsAge + action.payload.seatsChild;
        }
        if (action.payload.classType === 'second') {
          state.secondClass.seatsChild = action.payload.seatsChild;
          state.secondClass.amountTickets = state.secondClass.seatsAge + action.payload.seatsChild;
        }
        if (action.payload.classType === 'third') {
          state.thirdClass.seatsChild = action.payload.seatsChild;
          state.thirdClass.amountTickets = state.thirdClass.seatsAge + action.payload.seatsChild;
        }
        if (action.payload.classType === 'fourth') {
          state.fourthClass.seatsChild = action.payload.seatsChild;
          state.fourthClass.amountTickets = state.fourthClass.seatsAge + action.payload.seatsChild;
        }
        const amountTickets = state.firstClass.seatsChild + state.secondClass.seatsChild + state.thirdClass.seatsChild + state.fourthClass.seatsChild;
        state.totalSeatsChild = amountTickets;
        state.totalAmountTickets = state.totalSeatsAge + state.totalSeatsChild;
      },
      // changeChildWithoutTickets: (state, action) => {
      //   state.seatsChildWithout = action.payload;
      // },
      // changeNumberSeats: (state, action) => {
      //   const someElement = (e) => e.number === action.payload.seat.number && e.idCoach === action.payload.seat.idCoach;
      //   const filterArray = (e) => e.number !== action.payload.seat.number && e.idCoach === action.payload.seat.idCoach;
      //   if (action.payload.classType === 'first') {
      //     if (action.payload.seat.number > 0 && state.firstClass.seatsNumber.some(someElement)) {
      //       state.firstClass.seatsNumber = state.firstClass.seatsNumber.filter(filterArray);
      //     } else if (action.payload.seat.number > 0) {
      //       state.firstClass.seatsNumber = [...state.firstClass.seatsNumber, action.payload.seat];
      //     }
      //   }
      //   if (action.payload.classType === 'second') {
      //     if (action.payload.seat.number > 0 && state.secondClass.seatsNumber.some(someElement)) {
      //       state.secondClass.seatsNumber = state.secondClass.seatsNumber.filter(filterArray);
      //     } else if (action.payload.seat.number > 0) {
      //       state.secondClass.seatsNumber = [...state.secondClass.seatsNumber, action.payload.seat];
      //     }
      //   }
      //   if (action.payload.classType === 'third') {
      //     if (action.payload.seat.number > 0 && state.thirdClass.seatsNumber.some(someElement)) {
      //       state.thirdClass.seatsNumber = state.thirdClass.seatsNumber.filter(filterArray);
      //     } else if (action.payload.seat.number > 0) {
      //       state.thirdClass.seatsNumber = [...state.thirdClass.seatsNumber, action.payload.seat];
      //     }
      //   }
      //   if (action.payload.classType === 'fourth') {
      //     if (action.payload.seat.number > 0 && state.fourthClass.seatsNumber.some(someElement)) {
      //       state.fourthClass.seatsNumber = state.fourthClass.seatsNumber.filter(filterArray);
      //     } else if (action.payload.seat.number > 0) {
      //       state.fourthClass.seatsNumber = [...state.fourthClass.seatsNumber, action.payload.seat];
      //     }
      //   }
      // },
      // changePriceSeats: (state, action) => {
      //   if (action.payload.classType === 'first') {
      //     if (state.firstClass.seatsAge > 0) {
      //       state.firstClass.seatsAge -= 1;
      //       state.firstClass.seatsPriceAge += action.payload.price;
      //     } else if (state.firstClass.seatsChild > 0) {
      //       state.firstClass.seatsChild -= 1;
      //       state.firstClass.seatsPriceChild += action.payload.price;
      //     }
      //     state.firstClass.totalPrice += action.payload.price;
      //   }
  
      //   if (action.payload.classType === 'second') {
      //     if (state.secondClass.seatsAge > 0) {
      //       state.secondClass.seatsAge -= 1;
      //       state.secondClass.seatsPriceAge += action.payload.price;
      //     } else if (state.secondClass.seatsChild > 0) {
      //       state.secondClass.seatsChild -= 1;
      //       state.secondClass.seatsPriceChild += action.payload.price;
      //     }
      //     state.secondClass.totalPrice += action.payload.price;
      //   }
  
      //   if (action.payload.classType === 'third') {
      //     if (state.thirdClass.seatsAge > 0) {
      //       state.thirdClass.seatsAge -= 1;
      //       state.thirdClass.seatsPriceAge += action.payload.price;
      //     } else if (state.thirdClass.seatsChild > 0) {
      //       state.thirdClass.seatsChild -= 1;
      //       state.thirdClass.seatsPriceChild += action.payload.price;
      //     }
      //     state.thirdClass.totalPrice += action.payload.price;
      //   }
  
      //   if (action.payload.classType === 'fourth') {
      //     if (state.fourthClass.seatsAge > 0) {
      //       state.fourthClass.seatsAge -= 1;
      //       state.fourthClass.seatsPriceAge += action.payload.price;
      //     } else if (state.fourthClass.seatsChild > 0) {
      //       state.fourthClass.seatsChild -= 1;
      //       state.fourthClass.seatsPriceChild += action.payload.price;
      //     }
      //     state.fourthClass.totalPrice += action.payload.price;
      //   }
      // },
      // changeServiceWifi: (state, action) => {
      //   if (action.payload.classType === 'first') {
      //     state.firstClass.totalPrice += action.payload.price;
      //   }
      //   if (action.payload.classType === 'second') {
      //     state.secondClass.totalPrice += action.payload.price;
      //   }
      //   if (action.payload.classType === 'third') {
      //     state.thirdClass.totalPrice += action.payload.price;
      //   }
      //   if (action.payload.classType === 'fourth') {
      //     state.fourthClass.totalPrice += action.payload.price;
      //   }
      // },
      // changeServiceLinens: (state, action) => {
      //   if (action.payload.classType === 'first') {
      //     state.firstClass.totalPrice += action.payload.price;
      //   }
      //   if (action.payload.classType === 'second') {
      //     state.secondClass.totalPrice += action.payload.price;
      //   }
      //   if (action.payload.classType === 'third') {
      //     state.thirdClass.totalPrice += action.payload.price;
      //   }
      //   if (action.payload.classType === 'fourth') {
      //     state.fourthClass.totalPrice += action.payload.price;
      //   }
      // },
      // changeAmountTickets: (state, action) => {
      //   if (action.payload.classType === 'first') {
      //     state.firstClass.amountTickets += action.payload.amount;
      //     state.totalAmountTickets += action.payload.amount;
      //   }
      //   if (action.payload.classType === 'second') {
      //     state.secondClass.amountTickets += action.payload.amount;
      //     state.totalAmountTickets += action.payload.amount;
      //   }
      //   if (action.payload.classType === 'third') {
      //     state.thirdClass.amountTickets += action.payload.amount;
      //     state.totalAmountTickets += action.payload.amount;
      //   }
      //   if (action.payload.classType === 'fourth') {
      //     state.fourthClass.amountTickets += action.payload.amount;
      //     state.totalAmountTickets += action.payload.amount;
      //   }
      // },
      // clearAllPrices: (state) => {
      //   state.firstClass.seatsAge = 0;
      //   state.firstClass.seatsChild = 0;
      //   state.firstClass.amountTickets = 0;
      //   state.firstClass.seatsPriceAge = 0;
      //   state.firstClass.seatsPriceChild = 0;
      //   state.firstClass.totalPrice = 0;
      //   state.firstClass.seatsNumber = [];
  
      //   state.secondClass.seatsAge = 0;
      //   state.secondClass.seatsChild = 0;
      //   state.secondClass.amountTickets = 0;
      //   state.secondClass.seatsPriceAge = 0;
      //   state.secondClass.seatsPriceChild = 0;
      //   state.secondClass.totalPrice = 0;
      //   state.secondClass.seatsNumber = [];
  
      //   state.thirdClass.seatsAge = 0;
      //   state.thirdClass.seatsChild = 0;
      //   state.thirdClass.amountTickets = 0;
      //   state.thirdClass.seatsPriceAge = 0;
      //   state.thirdClass.seatsPriceChild = 0;
      //   state.thirdClass.totalPrice = 0;
      //   state.thirdClass.seatsNumber = [];
  
      //   state.fourthClass.seatsAge = 0;
      //   state.fourthClass.seatsChild = 0;
      //   state.fourthClass.amountTickets = 0;
      //   state.fourthClass.seatsPriceAge = 0;
      //   state.fourthClass.seatsPriceChild = 0;
      //   state.fourthClass.totalPrice = 0;
      //   state.fourthClass.seatsNumber = [];
      // },
      // totalChoiceRoute: (state) => {
      //   state.totalPriceAge = state.firstClass.seatsPriceAge + state.secondClass.seatsPriceAge + state.thirdClass.seatsPriceAge + state.fourthClass.seatsPriceAge;
      //   state.totalPriceChild = state.firstClass.seatsPriceChild + state.secondClass.seatsPriceChild + state.thirdClass.seatsPriceChild + state.fourthClass.seatsPriceChild;
      //   state.totalPriceAll = state.firstClass.totalPrice + state.secondClass.totalPrice + state.thirdClass.totalPrice + state.fourthClass.totalPrice;
      //   state.totalSeatsNumber = [...state.firstClass.seatsNumber, ...state.secondClass.seatsNumber, ...state.thirdClass.seatsNumber, ...state.fourthClass.seatsNumber]
      // },
      // clearTotalPrice: (state) => {
      //   state.totalSeatsAge = 0;
      //   state.totalSeatsChild = 0;
      //   state.totalAmountTickets = 0;
      //   state.totalPriceAge = 0;
      //   state.totalPriceChild = 0;
      //   state.totalPriceAll = 0;
      //   state.totalSeatsNumber = [];
      // },
      setTicket(state, action) {
        state.ticket = action.payload;
      },
      setTicketTrue(state, action) {
        state.ticketTrue = action.payload;
      },
      setResult(state, action) {
        state.result = action.payload;
      },
      setSeatsType(state, action) {
        state.seatsType = action.payload;
      },
      setTrainCoach(state, action) {
        state.trainCoach = action.payload;
      },
      setClassType(state, action) {
        state.classType = action.payload;
      },
      setTopPrice(state, action) {
        state.topPrice = action.payload;
      },
      setTotalPriceAll(state, action) {
        state.totalPriceAll = action.payload;
      },
      setObjTicket(state, action) {
        state.objTicket = action.payload;
      },
    }
  });
  
  export const {
    changeAgeTickets,
    changeChildTickets,
    // changeChildWithoutTickets,
    // changeNumberSeats,
    // changePriceSeats,
    // changeServiceWifi,
    // changeServiceLinens,
    // changeAmountTickets,
    // clearAllPrices,
    // totalChoiceRoute,
    // clearTotalPrice,
    setTicket,
    setTicketTrue,
    setResult,
    setSeatsType,
    setTrainCoach,
    setClassType,
    setTopPrice,
    setObjTicket,
    setTotalPriceAll
  } = slicePrice.actions;
  
  export const slicePriceState = (state) => state.slicePrice;
  
  export default slicePrice.reducer;