import {configureStore} from "@reduxjs/toolkit";
import filter from './slices/FilterTrainSlice';





export const store = configureStore({
    reducer: {
        filter
    },
})

