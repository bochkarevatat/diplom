import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    categoryId: 5679,
    sort: {
        name: 'времени',
        sortProperty: 'datetime' 
    },
    currentPage: 1,
    fromDate: '',
    toDate: '',
    categoryCityfrom: null,
    categoryCityTo: null,
    idCityFrom: null,
    idCityTo: null,
    callSetBtn: false,
    filterN: 5,
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
          setIdFrom(state, action) {
            state.idCityFrom = action.payload;
          },
          setIdTo(state, action) {
            state.idCityTo = action.payload;
          },
          setBtn(state, action) {
            state.callSetBtn = action.payload;
          },
        setSort(state, action){
           
            state.sort = action.payload;
        },
        setFilterN(state, action){  
          state.filterN = action.payload;
      },
      setCurrentPage(state, action){  
        state.currentPage = action.payload;
    }
      }
})
export const { filterTrain, setSort, setFilterN, setCurrentPage, setSearchValueTo, setSearchValueFrom, setDateFrom, setDateTo, setIdFrom, setIdTo, setBtn } = filterSlice.actions;

export default filterSlice.reducer;