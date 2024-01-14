import React from "react";
import "./home.css";

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
                <span>Mundiapolis , Casablanca</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center border-start border-end py-2">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Email Us</h6>
                <span>Mundiapolis@example.com</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center py-2">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Call Us</h6>
                <span>+212 345 6789</span>
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

      <div className="container-fluid py-5">
        <div className="container">
            <div className="row gx-5">
              <div className="col-lg-5 mb-5 mb-lg-0 aboutImg" >
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded aboutImg2" alt="" src={require('../../style/img/about.jpg')} ></img>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="border-start border-5 border-primary ps-5 mb-5">
                        <h6 className="text-primary text-uppercase">About Us</h6>
                        <h1 className="display-5 text-uppercase mb-0">We Keep Your Pets Happy All Time</h1>
                    </div>
                    <h4 className="text-body mb-4">Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet no labore lorem sit clita duo justo magna dolore</h4>
                    <div className="bg-light p-4">
                        <ul className="nav nav-pills justify-content-between mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item w-50" role="presentation">
                                <button className="nav-link text-uppercase w-100 active" id="pills-1-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1"
                                    aria-selected="true">Our Mission</button>
                            </li>
                            <li className="nav-item w-50" role="presentation">
                                <button className="nav-link text-uppercase w-100" id="pills-2-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-2" type="button" role="tab" aria-controls="pills-2"
                                    aria-selected="false">Our Vission</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                                <p className="mb-0">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                            </div>
                            <div className="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
                                <p className="mb-0">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  );
}
