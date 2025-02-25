import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-body-tertiary bottom text-center">
      <div className="container p-4">
        <section className="mb-4">
          <Link data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"
            ><i className="bi bi-facebook"></i></Link>
          <Link data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"
            ><i className="bi bi-twitter"></i></Link>
          <Link data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"
            ><i className="bi bi-envelope"></i></Link>
          <Link data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"
            ><i className="bi bi-whatsapp"></i></Link>
          <Link data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"
            ><i className="bi bi-linkedin"></i></Link>
          <Link data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"
            ><i className="bi bi-github"></i></Link>
        </section>
        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              <div className="col-md-5 col-12">
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="email" id="form5Example24" className="form-control" />
                </div>
              </div>
              <div className="col-auto">
                <button data-mdb-ripple-init type="submit" className="btn btn-primary mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>
        <section className="mb-4">
          <p>
            Contact us: 
          </p>
        </section>
      </div>
      <div className="text-center p-3">
        ©2025 <em>Mesi14</em> 
      </div>
    </footer>
  )
}

export default Footer;