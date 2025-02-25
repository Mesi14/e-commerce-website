const Footer = () => {
  return (
    <footer class="bg-body-tertiary bottom text-center">
      <div class="container p-4">
        <section class="mb-4">
          <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button"
            ><i class="bi bi-facebook"></i></a>
          <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button"
            ><i class="bi bi-twitter"></i></a>
          <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button"
            ><i class="bi bi-envelope"></i></a>
          <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button"
            ><i class="bi bi-whatsapp"></i></a>
          <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button"
            ><i class="bi bi-linkedin"></i></a>
          <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button"
            ><i class="bi bi-github"></i></a>
        </section>
        <section class="">
          <form action="">
            <div class="row d-flex justify-content-center">
              <div class="col-auto">
                <p class="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              <div class="col-md-5 col-12">
                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="email" id="form5Example24" class="form-control" />
                  <label class="form-label" for="form5Example24">Email address</label>
                </div>
              </div>
              <div class="col-auto">
                <button data-mdb-ripple-init type="submit" class="btn btn-primary mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>
        <section class="mb-4">
          <p>
            Contact us: 

          </p>
        </section>
      </div>
      <div class="text-center p-3">
        ©2025 <em>Mesi14</em> 
      </div>
    </footer>
  )
}

export default Footer;