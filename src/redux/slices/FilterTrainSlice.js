import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    categoryId: 5679,
    sort: {
        name: 'времени',
        sortProperty: 'datetime' 
    },
    categoryCityTo: ''
}

const filterSlice = createSlice({
name: 'filter',
initialState,
reducers: {
        filterTrain(state, action) {
            console.log(state)
            state.categoryId = action.payload;
        },
        setSearchValue(state, action) {
            state.categoryCityTo = action.payload;
          },
        setSort(state, action){
           
            state.sort = action.payload;
        }
      }
})
export const { filterTrain, setSort, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;