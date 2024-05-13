import { createSlice } from '@reduxjs/toolkit';


const initialState = {

    itemsResultReserchTrain:[],
    trainPerPage: 1,
    totalTrain: 1,
    trainSelection: [],
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
        },
        setTrainSelection(state, action) {
            if(!state.trainSelection){
                console.log("nothing", state.trainSelection)
            }else{
                state.trainSelection = action.payload;
                console.log("yes", state.trainSelection)
            }
                
           
        }
        
    }
    })
    
   
    export const {setResultReserchTrain, setTrainPerPage, setTotalTrain, setTrainSelection} = trainSlice.actions;
    export default trainSlice.reducer;