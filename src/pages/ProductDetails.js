import '../styles/ProductDetails.css'
import Details from '../components/Details';

const ProductDetails = () => {
  return (
    <>
      <div className="prodDetails container-fluid">
        <div className="container-fluid presentation d-flex text-white py-5">
          <div className="row align-items-center">
            <h1 className="mb-5 display-2"><strong>WearMe Clothes for everyone!</strong></h1>
            <p>Mi magnis elementum nec eros at maximus? In iaculis dolor sit consequat per. Eu hac conubia viverra aliquam est. Odio felis elit in finibus cursus nulla torquent. Habitant netus varius; orci rutrum mattis lectus. Sit sagittis mus orci pulvinar, congue eu mauris. Phasellus facilisis vehicula aenean; libero velit platea vehicula. Ex turpis ex inceptos fusce maximus massa mus.</p>
          </div>
          <div className="col-md-6 text-center"> 
            <img src="/Assets/Images/demo_hoodie.png" className="img-fluid" alt="showroom" />                
          </div>
        </div>
      </div>

      <div className="row g-2">
        {<Details />}
      </div>
    </>    
    )
}

export default ProductDetails;
