import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    categoryId: 5679,
    sort: {
        name: 'времени',
        sortProperty: 'datetime' 
    },
    fromDate: '',
    toDate: '',
    categoryCityfrom: null,
    categoryCityTo: null,
}

const filterSlice = createSlice({
name: 'filter',
initialState,
reducers: {
        filterTrain(state, action) {
            console.log(state)
            state.categoryId = action.payload;
        },
        setSearchValueTo(state, action) {
            state.categoryCityTo = action.payload;
          },
        setSearchValueFrom(state, action) {
            state.categoryCityFrom = action.payload;
          },
        setSort(state, action){
           
            state.sort = action.payload;
        }
      }
})
export const { filterTrain, setSort, setSearchValueTo, setSearchValueFrom } = filterSlice.actions;

export default filterSlice.reducer;