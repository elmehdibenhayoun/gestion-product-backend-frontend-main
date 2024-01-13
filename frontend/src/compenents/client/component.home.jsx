import React from "react";
// import "../../style/css/style.css";
// import "../../style/css/bootstrap.min.css";
export function Home() {
  return (
    <>
      {/* <!-- Topbar Start -->*/}
      <div className="container-fluid border-bottom d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-4 text-center py-2">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Our Office</h6>
                <span>123 Street, New York, USA</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center border-start border-end py-2">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Email Us</h6>
                <span>info@example.com</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center py-2">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Call Us</h6>
                <span>+012 345 6789</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End -->*/}

      {/* <!-- Hero Start -->*/}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="display-1 text-uppercase text-dark mb-lg-4">
                Pet Shop
              </h1>
              <h1 className="text-uppercase text-white mb-lg-4">
                Make Your Pets Happy
              </h1>
              <p className="fs-4 text-white mb-lg-4">
                Dolore tempor clita lorem rebum kasd eirmod dolore diam eos
                kasd. Kasd clita ea justo est sed kasd erat clita sea
              </p>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                <a
                  href="l"
                  className="btn btn-outline-light border-2 py-md-3 px-md-5 me-5"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="../../style/js/main.js"></script>
      {/* <!-- Hero End -->*/}

      {/* <!-- Video Modal Start -->*/}

      {/* <!-- JavaScript Libraries -->*/}
    </>
  );
}
