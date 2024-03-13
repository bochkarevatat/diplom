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
          setDateFrom(state, action) {
            state.fromDate = action.payload;
          },
          setDateTo(state, action) {
            state.toDate = action.payload;
          },
        setSort(state, action){
           
            state.sort = action.payload;
        }
      }
})
export const { filterTrain, setSort, setSearchValueTo, setSearchValueFrom, setDateFrom, setDateTo } = filterSlice.actions;

export default filterSlice.reducer;