import "../styles/Cart.css";
import { useContext, Fragment } from 'react';
import { CartContext } from '../context/cart';
import { Link } from 'react-router';

const Cart = () => {
  const { cartItems, addItemToCart, removeItemFromCart, emptyCart, calcTotalValue } = useContext(CartContext);

  return (
    <Fragment key={cartItems.length}>
      <div className="text-center">
        <div className="cartTitle d-flex">
          <h1>Cart</h1>
          <Link to="/" className="btn btn-warning mt-2"><strong><i className="bi bi-backspace"></i> Continue shopping</strong></Link>
        </div>
        
        <div className="itemsInCart flex flex-col gap-4">
          {cartItems.map((item) => (
            <div className="card mb-3 cartItem">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={item.image} className="img-fluid rounded-start" alt={item.title.substring(0,20)} />
                <span className="fav d-flex">
                    <p className="card-text"><small className="text-body-secondary"><button type="button" className="btn btn-dark mt-3">{item.category}</button></small></p>
                    <button type="button" className="btn btn-success"><i className="bi bi-heart"></i></button>
                  </span>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-8 mb-3 mb-sm-0">
                      <p className="card-text">{item.description}</p>
                    </div>
                    <div className="col-sm-4 text-center">
                      <div className="buttonsInCart d-flex gap-4">
                        <button className="btn btn-success" onClick={() => {addItemToCart(item)}}>+</button>
                        <p>{item.quantity}</p>
                        <button className="btn btn-warning" onClick={() => {removeItemFromCart(item)}}>-</button>
                        <p className="">Item's Price: <strong>${item.price}</strong></p>
                        <p className="">Total Price: <strong>${(Math.round((item.price * item.quantity) * 100) / 100).toFixed(2)}</strong></p>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
        {
          cartItems.length > 0 ? (
            <div className="cartTotal d-flex text-center m-5">
              <h1 className="totalText">Total: ${calcTotalValue()}</h1>
              <button className="checkout btn btn-success m-2" onClick={() => {}}>Continue to checkout <i className="bi bi-clipboard2-check"></i></button>
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
