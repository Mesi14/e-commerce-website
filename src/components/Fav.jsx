import "../styles/Fav.css";
import { Fragment, useContext } from "react";
import { Link } from "react-router";
import { FavContext } from "../context/favourites";

const Fav = () => {
  const { favItems, removeItemFromFav, emptyFav } = useContext(FavContext);

  return (
    <Fragment key={favItems.length}>
      <div className="text-center">
        <div className="cartTitle d-flex">
          <h1>Favourite items</h1>
          <Link to="/" className="btn btn-warning mt-2"><strong><i className="bi bi-backspace"></i> Continue shopping</strong></Link>
        </div>
        
        <div className="itemsInCart flex flex-col gap-4">
          {favItems.map((item) => (
            <div className="card mb-3 cartItem">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={item.image} className="img-fluid rounded-start" alt={item.title.substring(0,20)} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className="titleCat d-flex">
                    <span class="badge text-bg-secondary">{item.category}</span>
                    <h5 className="card-title">{item.title}</h5>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-8 mb-3 mb-sm-0">
                      <p className="card-text">{item.description}</p>
                    </div>
                    <div className="col-sm-4 text-center">
                      <div className="buttonsInCart d-flex gap-4">
                        <p className="">Item's Price: <strong>${item.price}</strong></p>
                        <button className="btn btn-success" onClick={() => {removeItemFromFav(item)}}>Delete</button>
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
          favItems.length > 0 ? (
            <div className="cartTotal d-flex text-center m-5">
              <button className="emptyCart btn btn-danger" onClick={() => {emptyFav()}}>Clear Fav <i className="bi bi-heart"></i></button>
            </div>
          ) : (
            <h1 className="text-lg font-bold">No favourite items</h1>
          )
        }
      </div>
    </Fragment>
  )
}

export default Fav;
