import "../styles/Details.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Details = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const resp = await axios.get(`https://fakestoreapi.com/products/${itemId}`)
            console.log(resp.data)
            setItem(resp.data)
            
        } catch (error) {
            console.error(error);
        }
    }

    return(
    <>
      <div className="card details-card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={`${item.image}`} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text"><small className="text-body-secondary">{item.rating}</small></p>
            </div>
            <button type="button" className="btn btn-outline-dark">
            <a href="/">Go back</a>
          </button>
          </div>
        </div>
      </div>   
    </>
    )
}

export default Details;