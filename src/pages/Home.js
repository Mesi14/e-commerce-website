import '../styles/Product.css'
import Product from '../components/Product';
import { useState } from 'react';

const Home = () => {
  const [filterCat, setFilterCat] = useState('');

  const getSelectedCat = () => {
    return 
  }
  return (
    <>
      <div className="prods container-fluid d-flex">
        <div className="hero-text">
          <h1 className=""><strong>WearMe Clothes for everyone!</strong></h1>
          <p>Mi magnis elementum nec eros at maximus? In iaculis dolor sit consequat per. Eu hac conubia viverra aliquam est. Odio felis elit in finibus cursus nulla torquent. Habitant netus varius; orci rutrum mattis lectus. Sit sagittis mus orci pulvinar, congue eu mauris. Phasellus facilisis vehicula aenean; libero velit platea vehicula. Ex turpis ex inceptos fusce maximus massa mus.</p>
        </div>
        <div className="img-section"> 
          <img src="Assets/Images/demo_hoodie.png" className="hero-img img-fluid" alt="showroom" />                
        </div>
      </div>
      <div className="container-fluid mt-2">
        <div className="row mb-3 g-2">
          <div className="col-md-6">
              <h2>Products</h2>
          </div>
          <div className="col-md-3">
            <select className="form-select">
              <option value="">All</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelry</option>
              <option value="men's clothing">Men's clothing</option>
              <option value="women's clothing">Women's clothing</option>
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-select">
              <option value="">Sort by ...</option>
              <option value="Price">Price</option>
              <option value="Category">Category</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row g-2">
        {<Product />}
      </div>
    </>    
    )
}

export default Home;
