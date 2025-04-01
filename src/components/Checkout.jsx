import "../styles/Checkout.css"
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/cart';
import { Link } from 'react-router';

const Checkout = () => {
  const { cartItems, calcTotalValue, emptyCart } = useContext(CartContext);

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: 'Credit Card',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    emptyCart();
  };

  return (
    <div className="container-fluid checkoutFull py-5">
      <div className="text-center mb-4">
        <h1>Checkout</h1>
        <Link to="/cart" className="btn btn-warning mt-3">
          <i className="bi bi-arrow-left"></i> Go back to Cart
        </Link>
      </div>

      <div className="row">
        <div className="col-md-8">
          <div className="order-summary mb-4">
            <h3>Your Order</h3>
            {cartItems.length > 0 ? (
              <div className="list-group mb-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="list-group-item d-flex align-items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-thumbnail me-3"
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                    <div className="d-flex descriptions m-3">
                      <div className="m-3">
                        <h5 className="mb-1">{item.title}</h5>
                        <p className="mb-1">{item.category}</p>
                        <p>Price: ${item.price}</p>
                      </div>
                      <div className="d-flex checkoutDetailsAll m-3">
                      <p className="checkoutDetails">Quantity: {item.quantity}</p>
                      <p className="checkoutDetails">Total: ${(Math.round(item.price * item.quantity * 100) / 100).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No items in your cart.</p>
            )}
          </div>

          <form className="checkoutForm" onSubmit={handleSubmit}>
            <h3>Shipping Information</h3>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={userInfo.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={userInfo.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">Shipping Address</label>
              <textarea
                id="address"
                name="address"
                className="form-control"
                value={userInfo.address}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                className="form-select"
                value={userInfo.paymentMethod}
                onChange={handleInputChange}
                required
              >
                <option value="Credit Card">Credit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Debit Card">Debit Card</option>
              </select>
            </div>

            <button type="submit" className="btn btn-success w-100 mt-3">
              Place Order
            </button>
          </form>
        </div>
        <div className="col-md-4">
          <div className="order-summary mt-5 bg-light p-4">
            <h4>Order Summary</h4>
            {cartItems.length > 0 ? (
              <>
                <ul className="list-unstyled">
                  {cartItems.map((item) => (
                    <li key={item.id} className="d-flex justify-content-between">
                      <span>{item.title}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
                <div className="d-flex justify-content-between">
                  <h5>Total: ${calcTotalValue()}</h5>
                </div>
              </>
            ) : (
              <p>No items in your cart.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
