import "../styles/Cart.css";
import { useContext, Fragment } from 'react';
import { CartContext } from '../context/cart';
import { Link } from 'react-router';

const Cart = () => {
  const { cartItems, addItemToCart, removeItemFromCart, emptyCart, calcTotalValue } = useContext(CartContext);

  return (
    <Fragment key="cartItems">
      <div className="text-center">
        <div className="cartTitle d-flex">
          <h1>Cart</h1>
          <Link to="/" className="btn btn-warning mt-2"><strong><i className="bi bi-backspace"></i> Continue shopping</strong></Link>
        </div>
        
        <div className="itemsInCart flex flex-col gap-4">
          {cartItems.map((item) => (
            <Fragment key={item.id}>
            <div className="container-fluid row cartItem g-0 mt-5">
              <div className="col-md-2 twoSided">
                <img
                  src={item.image}
                  className="img-fluid rounded-start"
                  alt={item.title ? item.title.substring(0, 20) : "Product Image"} 
                />
                <span className="fav d-flex">
                  <p className="card-text">
                    <small className="text-body-secondary">
                      <button type="button" className="btn btn-dark mt-3">{item.category}</button>
                    </small>
                  </p>
                  <button type="button" className="btn btn-success">
                    <i className="bi bi-heart"></i>
                  </button>
                </span>
              </div>
              <div className="col-md-10 twoSided">
                <div className="card-body horizontalCart">
                  <h5 className="card-title horizontalCartTitle">{item.title}</h5>
                  <hr />
                  <div className="row">
                    <div className="col-sm-8 mb-3 mb-sm-0">
                      <p className="card-text">{item.description ? item.description.substring(0, 250) + "..." : "No description available"}</p>
                    </div>
                    <div className="col-sm-4 text-center">
                      <div className="buttonsInCart d-flex gap-4">
                        <button className="btn btn-success" onClick={() => { addItemToCart(item); }}>+</button>
                        <button className="btn btn-dark w-100" disabled>{item.quantity}</button>
                        <button className="btn btn-warning" onClick={() => { removeItemFromCart(item); }}>-</button>
                        <p>Item's Price: <strong>${item.price}</strong></p>
                        <p>Total Price: <strong>${(Math.round((Number(item.price) * Number(item.quantity)) * 100) / 100).toFixed(2)}</strong></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
          ))}
        </div>
        {
          cartItems.length > 0 ? (
            <div className="cartTotal d-flex text-center">
              <h1 className="totalText">Total: ${calcTotalValue()}</h1>
              <Link to="/checkout" className="btn btn-warning m-2 toCheckout">Continue to checkout <i className="bi bi-clipboard2-check"></i></Link>
              <button className="emptyCart btn btn-danger m-2" onClick={() => {emptyCart()}}>Clear cart <i className="bi bi-trash3-fill"></i></button>
            </div>
          ) : (
            <h1 className="text-lg font-bold">No items added into the cart</h1>
          )
        }
      </div>
    </Fragment>
  )
};

export default Cart;
