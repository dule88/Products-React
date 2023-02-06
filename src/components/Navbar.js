import { useContext } from "react";
import CartContexts from "../contexts/CartContexts";
import ProductsContext from "../contexts/Products.Context";

const Navbar = () => {

    
    const {products, setProducts} = useContext(ProductsContext);
    const  {cart, setCart} = useContext(CartContexts)

  return (
    <nav className="navbar navbar-expand-lg bg-dark-subtle">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Products({products.length})</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Cart({cart.length})</a>
                </li>
            </ul>
        </div>
        </div>
    </nav>
  );
};

export default Navbar;
