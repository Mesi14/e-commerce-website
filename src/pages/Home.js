import '../styles/Product.css'
import Product from '../components/Product';

const Home = () => {
  return (
    <>
      <div className="prods container-fluid">
        <div className="container-fluid presentation d-flex text-white py-5">
          <div className="row align-items-center">
            <h1 className="mb-5 display-2"><strong>WearMe Clothes for everyone!</strong></h1>
            <p>Mi magnis elementum nec eros at maximus? In iaculis dolor sit consequat per. Eu hac conubia viverra aliquam est. Odio felis elit in finibus cursus nulla torquent. Habitant netus varius; orci rutrum mattis lectus. Sit sagittis mus orci pulvinar, congue eu mauris. Phasellus facilisis vehicula aenean; libero velit platea vehicula. Ex turpis ex inceptos fusce maximus massa mus.</p>
          </div>
          <div className="col-md-6 text-center"> 
            <img src="Assets/Images/demo_hoodie.png" className="img-fluid" alt="showroom" />                
          </div>
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
              <option value="Hoddies">Hoddies</option>
              <option value="Jewelry">Jewelry</option>
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
