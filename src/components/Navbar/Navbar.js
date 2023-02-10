import styles from './Navbar.module.css';

import { useContext } from "react";
import CartContexts from "../../contexts/CartContexts";
import ProductsContext from "../../contexts/Products.Context";
import {Link} from 'react-router-dom'

const Navbar = () => {

    
    const {products} = useContext(ProductsContext);
    const  {cartOfProducts} = useContext(CartContexts)

   

  return (
    <nav className= "navbar navbar-expand-lg bg-dark py-1" >
        <div className="container-fluid navbar-dark">
        <Link className="navbar-brand" to="/"><i className="fa-brands fa-cotton-bureau fa-2xl p-3"></i></Link>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="productList">Products({products.length})</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="cartOfProducts">Cart({cartOfProducts.length})</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="#"></Link>
                </li>
                <li>
                    
                </li>
            </ul>

            <form className="container-fluid d-flex w-75">
                 <div className="input-group d-flex justify-content-end">
                    <span className="input-group-text bg-dark border-secondary text-white-50 " id={styles.pointer} ><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" className="form-control bg-dark border-secondary text-white" placeholder="Search..." aria-label="Search" id="searchInput" aria-describedby="basic-addon1" />
                    </div> 

                    
            </form>

        </div>
        </div>
    </nav>
  );
};

export default Navbar;
