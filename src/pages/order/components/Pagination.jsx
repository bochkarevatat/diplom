import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

// const currentPage = React.useSelector((state) => state.filter.currentPage);

const Pagination = ({currentPage, onChangePage} )=> {

  <div className='pagination'>
<ReactPaginate
  
  breakLabel="..."
  nextLabel=">"
  previousLabel="<"
  onPageChange={(event) => onChangePage(event.selected + 1)}
  pageRangeDisplayed={4}
  pageCount={3}
  forcePage={currentPage - 1}
/>
  
  </div>
  // console.log(currentPage, '<= currentPage')
  
}

export default Pagination