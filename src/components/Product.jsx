import '../styles/Product.css'
import { Link } from 'react-router';

const Product = () => {
  return(
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to="/details/1" className="btn btn-primary">Details</Link>
        <Link to="/details/1" className="btn btn-primary">Go somewhere</Link>
      </div>
    </div>
    )
}

export default Product;
