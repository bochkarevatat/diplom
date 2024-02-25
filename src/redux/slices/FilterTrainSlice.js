import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    categoryId: 5679,
    sort: {
        name: 'времени',
        sortProperty: 'datetime' 
    }
}

const filterSlice = createSlice({
name: 'filter',
initialState,
reducers: {
        filterTrain(state, action) {
            console.log(action)
            state.categoryId = action.payload;
        },
        setSort(state, action){
           
            state.sort = action.payload;
        }
      }
})
export const { filterTrain, setSort } = filterSlice.actions;

export default filterSlice.reducer;