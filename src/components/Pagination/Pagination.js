import React from 'react'
import styles from './Pagination.module.css';


const Pagination = ({productPerPage, totalProducts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
        pageNumbers.push(i);
        
    }

  return (
    <nav className={styles.paginationNav}>
        <ul className='pagination'>
   
            {pageNumbers.map((number) => (
                
                <li key={number} className="page-item text-white">
                    <a onClick={() => paginate(number)}className='page-link' id={styles.paginationFix}>
                        {number}
                    </a>
                </li>
                
            ))}
          
        </ul>
    </nav>
  )
}

export default Pagination;