import '../styles/Product.css'
import { Link } from 'react-router';
import { useEffect, useState, Fragment } from 'react';
import axios from 'axios';

const Product = () => {
  const [products, setProducts] = useState([]);

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
       return (
        <Fragment key={id}>
          <div className="col-lg-4">
            <div className="card">
              <i className="bi bi-heart"></i>
              <img src={image} className="card-img-top" alt={image} />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{category}</p>
                <p className="card-text">{price}</p>
                <p className="card-text">{rating.rate}</p> 
                <Link to="/details/1" className="btn btn-primary">Details</Link>
                <Link to="/cart" className="btn btn-primary">Add to cart</Link>
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
