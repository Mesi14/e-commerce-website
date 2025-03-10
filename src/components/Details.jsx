import "../styles/ProductDetails.css";
import { Fragment, useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router";
import { FavContext } from "../context/favourites";
import axios from "axios";
import { CartContext } from "../context/cart";

const Details = () => {
  const {id} = useParams();
  const [item, setItem] = useState(null);
  const {cartItems, addItemToCart} = useContext(CartContext)
  const { favItems, addItemToFav } = useContext(FavContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const itemDet = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setItem(itemDet.data);
    } catch (error) {
      console.error(error);
    }
  }

  if(!item) return;
  return (
    <Fragment key={id}>
      <div className="card mb-3 cardDetails">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={item.image} className="img-fluid rounded-start" alt={item.title.substring(0,20)} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <span className="ratings d-flex">
                <button type="button" className="btn btn-outline-primary">
                  Ratings <span className="badge text-bg-primary">{item.rating.rate}</span> from <em>{item.rating.count} ratings</em> 
                </button>
                <button type="button" className="btn btn-success" onClick={() => addItemToFav(item)}><i className="bi bi-heart"></i></button>
              </span>
              <hr/>
              <div className="row">
                <div className="col-sm-8 mb-3 mb-sm-0">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text"><small className="text-body-secondary"><button type="button" className="btn btn-dark">{item.category}</button></small></p>
                </div>
                <div className="col-sm-4 text-center addCartBack">
                  <p className="prod-price">Price: <strong>${item.price}</strong></p>
                  <Link to="/cart" className="btn btn-danger mt-2" onClick={() => addItemToCart(item)}>
                    <i className="bi bi-cart-plus"></i>Add to cart
                  </Link><br/>
                  <Link to="/" className="btn btn-warning mt-2"><strong><i className="bi bi-backspace"></i> Go back</strong></Link>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Details;