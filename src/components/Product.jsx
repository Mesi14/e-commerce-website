import '../styles/Product.css';
import { Link } from 'react-router';
import { useEffect, useState, Fragment, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../context/cart';
import { FavContext } from '../context/favourites';
import { toast } from "react-toastify";

const Product = ({ category = 'all', sortBy = 'default' }) => {
  const [products, setProducts] = useState([]);
  const { addItemToCart } = useContext(CartContext);
  const { favItems, addItemToFav } = useContext(FavContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Fetching Error', error);
    }
  };

  const filterAndSort = () => {
    if (!products || products.length === 0) return [];

    let filtered = products.filter(prod => category === 'all' || prod.category === category);

    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  };

  const addToCartNotify = () => {
    toast.success("Added to cart!", {
      autoClose: 500,
    });
  }

  const addToFavNotify = () => {
    toast.warn("Added to favourites!", {
      autoClose: 500,
    })
  }

  const removeFromFavNotify = () => {
    toast.success("Removed from favourites!", {
      autoClose: 500,
      theme: "dark",
    })
  }

  const makeCard = () => {
    const filteredProducts = filterAndSort();

    if (filteredProducts.length === 0) {
      return <p className="text-center mt-3">No products</p>;
    }

    return filteredProducts.map(({ id, title, description, image, category, price, rating }) => {
      const isFavorite = favItems.some(favItem => favItem.id === id);

      return (
        <Fragment key={id}>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <div className="favourite d-flex justify-content-between p-2">
                <Link to={`/details/${id}`} className="btn btn-outline-success">Details</Link>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    addItemToFav({ id, title, description, image, category, price });
                    isFavorite ? removeFromFavNotify() : addToFavNotify();
                  }}
                >
                  <i className={`bi bi-heart${isFavorite ? '-fill' : ''}`}></i>
                </button>
              </div>
              <img src={image} className="card-img-top p-3" alt={title} style={{ height: '200px', objectFit: 'contain' }} />
              <div className="card-body prod-card">
                <span className="category-section mb-3 d-flex justify-content-between">
                  <span className="badge bg-dark">{category}</span>
                  <span className="badge bg-warning text-dark">
                    Rating: {rating?.rate ?? "N/A"}
                  </span>
                </span>
                <h5 className="card-title">
                  {title.length < 50 ? title : `${title.substring(0, 50)}...`}
                </h5>
                <p className="card-text">
                  {description.length < 100 ? description : `${description.substring(0, 100)}...`}
                </p>
                <div className="addToCart d-flex justify-content-between align-items-center mt-3">
                  <p className="mb-0"><strong>${price}</strong></p>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      addItemToCart({ id, title, description, image, category, price });
                      addToCartNotify();
                    }}
                  >
                    <i className="bi bi-cart-plus"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      );
    });
  };

  return <div className="row">{makeCard()}</div>;
};

export default Product;
