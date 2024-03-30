import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    itemsResultReserchTrain:[],
    trainPerPage: 1,
    totalTrain: 1,
}

const trainSlice = createSlice({
    name: 'trainSlice',
    initialState,
    reducers: {
        setResultReserchTrain(state, action) {
            state.itemsResultReserchTrain = action.payload;
        },
        setTrainPerPage(state, action) {
            state.trainPerPage = action.payload;
        },
        setTotalTrain(state, action) {
            state.totalTrain = action.payload;
        }
    }
    })

    export const {setResultReserchTrain, setTrainPerPage, setTotalTrain} = trainSlice.actions;
    export default trainSlice.reducer;