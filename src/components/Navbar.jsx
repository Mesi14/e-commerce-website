import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-md bg-white border-bottom box-shadow">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><i class="bi bi-shop"></i> WearMe</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Products</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                UserName
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/">Products</Link></li>
                <li><Link className="dropdown-item" href="/profile">Profile Page</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;