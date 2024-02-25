import {configureStore} from "@reduxjs/toolkit";
import filter from './slices/FilterTrainSlice';



console.log(filter)

export const store = configureStore({
    reducer: {
        filter
    },
})

