import {configureStore} from "@reduxjs/toolkit";
import filter from './slices/FilterTrainSlice';
import sliceProgressLine from './sliceProgressLine';
import trainSlice from './slices/TrainSlice';
import slicePrice from './slices/SlicePrice';
import sliceTicket from './slices/SliceTicket';
import errorMessageSlice from './slices/ErrorMessageSlice';
import addUser from './slices/AddUserSlice'

export const store = configureStore({
    reducer: {
        filter,
        sliceProgressLine,
        trainSlice,
        slicePrice,
        sliceTicket,
        errorMessageSlice,
        addUser,
    },
})