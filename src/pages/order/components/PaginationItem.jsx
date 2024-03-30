import React from "react";
// import PropTypes from "prop-types";
// import { Pagination } from 'antd';

// import ReactPaginate from 'react-paginate';
import './PaginationItem.css';
// import { Divider } from "antd";


const PaginationItem = ({trainPerPage, totalTrain }) => {

const pageNumber =[];
for (let i=1; i<=Math.ceil(totalTrain/trainPerPage); i++){
  pageNumber.push(i)
}

// function prevPage() {
//   if (startSlice >= lengthPage) {
//     setStartSlice(startSlice - lengthPage);
//   };

//   if (endSlice >= lengthPage * 2) {
//     setEndSlice(endSlice - lengthPage);
//   };

//   if ((currentPage - 1) > 0 && pages.length > 1) {
//     setCurrentPage((prev) => prev -= 1);
//   };

// };

// function nextPage() {
//   if (startSlice < (lengthPage * (pages.length - 1))) {
//     setStartSlice(startSlice + lengthPage);
//   };

//   if (endSlice < lengthPage * pages.length) {
//     setEndSlice(endSlice + lengthPage);
//   };

//   if (currentPage < pages.length) {
//     setCurrentPage((prev) => prev += 1);
//   };

// };

  return(
<div className="paginations">
<div className='list-routes-pages-previous' onClick={()=>(console.log('previous'))}></div>
  <ul className="pagination-items">
 
    {
      pageNumber.map(number => (
        <li className="pagination-item" key={number}>
          <a href="?#" className="page-link">
            {number}
          </a>
        </li>
      ))
    }
  </ul>
  <div className='list-routes-pages-next' onClick={()=>(console.log('next'))}></div>
    </div>
  )
    
  
}

export default PaginationItem 