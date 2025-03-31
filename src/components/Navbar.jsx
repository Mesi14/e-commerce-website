import { Link } from "react-router";
import { useContext } from 'react';
import { CartContext } from '../context/cart';
import { FavContext } from "../context/favourites";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const { favItems } = useContext(FavContext);
  const itemsInCart = cartItems.map(item => item.quantity);
  const itemsInFav = favItems.length;
  
  return (
    <nav className="navbar navbar-expand-md bg-white border-bottom box-shadow">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><i className="bi bi-shop"></i> WearMe</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Products</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/login" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Login
              </Link>
              <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="#">UserName</Link></li>
                <li><Link className="dropdown-item" to="/">Products</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/cart">Cart<span className="badge text-bg-primary">{itemsInCart.reduce((acc, val) => acc+val, 0)}</span></Link></li>
                <li><Link className="dropdown-item" to="/fav">Favourites<span className="badge text-bg-primary">{itemsInFav.length}</span></Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;