import {configureStore} from "@reduxjs/toolkit";
import filter from './slices/FilterTrainSlice';
import sliceProgressLine from './sliceProgressLine';
import trainSlice from './slices/TrainSlice';



export const store = configureStore({
    reducer: {
        filter,
        sliceProgressLine,
        trainSlice,
    },
})

