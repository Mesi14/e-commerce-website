import '../styles/Product.css'
import { Link } from 'react-router';
import { useEffect, useState, Fragment, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../context/cart';
import { FavContext } from '../context/favourites';

const Product = () => {
  const [products, setProducts] = useState([]);
  const { addItemToCart } = useContext(CartContext);
  const { favItems, addItemToFav } = useContext(FavContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const makeCard = () => {
    if (products?.length <= 0) {
      return;
    }
    return products.map(({id, title, description, image, category, price, rating}) => {
      const isFavorite = favItems.some(favItem => favItem.id === id); 
      return (
        <Fragment key={id}>
          <div className="col-lg-3">
            <div className="card m-2">
              <div className="favourite d-flex">
                <Link to={`/details/${id}`} className="btn btn-outline-success">Details</Link>
                <Link to={"/fav"} className="btn btn-outline-success" onClick={() => addItemToFav({id, title, description, image, category, price})}> <i className={`bi bi-heart${isFavorite ? '-fill' : ''}`}></i></Link>
              </div>
              <img src={image} className="card-img-top" alt={image} />
              <div className="card-body">
                <span className="category-section mb-4 d-flex">
                  <button type="button" className="btn btn-dark disabled">{category}</button>
                  <button type="button" className="btn btn-warning">
                    Ratings: <span className="badge text-bg-secondary">{rating.rate}</span>
                  </button>
                </span>
                <h5 className="card-title mt-5">{(title.length < 50) ? title : (title.substring(0, 50) + "...")}</h5>
                <p className="card-text mt-3">{(description.length < 100) ? description : (description.substring(0, 100) + "...")}</p>
                <hr/>
                <span className="addToCart d-flex">
                  <p className="card-text pt-3"><i className="bi bi-currency-dollar">Price:</i> <strong>${price}</strong></p>            
                  <Link to="/cart" className="btn btn-danger" onClick={() => addItemToCart({id, title, description, image, category, price})}><strong><i className="bi bi-cart-plus"></i> Add to cart</strong></Link>
                </span>     
              </div>
            </div>
          </div>
        </Fragment>
      )
    })
  }
  
  return (
    <div className="test row">{ makeCard() }</div>
  )
}

export default Product;
