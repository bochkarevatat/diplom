import {configureStore} from "@reduxjs/toolkit";
import filter from './slices/FilterTrainSlice';
import sliceProgressLine from './sliceProgressLine';
import trainSlice from './slices/TrainSlice';
import slicePrice from './slices/SlicePrice';
import sliceTicket from './slices/SliceTicket';

export const store = configureStore({
    reducer: {
        filter,
        sliceProgressLine,
        trainSlice,
        slicePrice,
        sliceTicket,
    },
})

