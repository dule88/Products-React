import React from 'react'
import './Pagination.css';


const Pagination = ({productPerPage, totalProducts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
        pageNumbers.push(i);
        
    }

  return (
    <nav>
        <ul className='pagination'>
   
            {pageNumbers.map((number) => (
                
                <li key={number} className="page-item text-white">
                    <a onClick={() => paginate(number)}className='page-link'>
                        {number}
                    </a>
                </li>
                
            ))}
          
        </ul>
    </nav>
  )
}

export default Pagination;