import {configureStore} from "@reduxjs/toolkit";
import filter from './slices/FilterTrainSlice';
import sliceProgressLine from './sliceProgressLine';
import trainSlice from './slices/TrainSlice';
import slicePrice from './slices/SlicePrice';


export const store = configureStore({
    reducer: {
        filter,
        sliceProgressLine,
        trainSlice,
        slicePrice,
    },
})

