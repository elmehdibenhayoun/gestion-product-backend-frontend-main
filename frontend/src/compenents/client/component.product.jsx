import React from "react";
import { useEffect } from "react";

export function HomeText() {
  return (
    <>
      <section>
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

        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0 mb-5">
          <a href="index.html" className="navbar-brand ms-lg-5">
            <h1 className="m-0 text-uppercase text-dark">
              <i className="bi bi-shop fs-1 text-primary me-3"></i>Pet Shop
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="index.html" className="nav-item nav-link">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link">
                About
              </a>
              <a href="service.html" className="nav-item nav-link">
                Service
              </a>
              <a href="product.html" className="nav-item nav-link active">
                Product
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu m-0">
                  <a href="price.html" className="dropdown-item">
                    Pricing Plan
                  </a>
                  <a href="team.html" className="dropdown-item">
                    The Team
                  </a>
                  <a href="testimonial.html" className="dropdown-item">
                    Testimonial
                  </a>
                  <a href="blog.html" className="dropdown-item">
                    Blog Grid
                  </a>
                  <a href="detail.html" className="dropdown-item">
                    Blog Detail
                  </a>
                </div>
              </div>
              <a
                href="contact.html"
                className="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5"
              >
                Contact <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </nav>

        <div className="container-fluid py-5">
          <div className="container">
            <div className="border-start border-5 border-primary ps-5 mb-5">
              <h6 className="text-primary text-uppercase">Products</h6>
              <h1 className="display-5 text-uppercase mb-0">
                Products For Your Best Friends
              </h1>
            </div>
            <div className="owl-carousel product-carousel">
              <div className="pb-5">
                <div className="product-item position-relative bg-light d-flex flex-column text-center">
                  <img
                    className="img-fluid mb-4"
                    src="img/product-1.png"
                    alt=""
                  ></img>
                  <h6 className="text-uppercase">Quality Pet Foods</h6>
                  <h5 className="text-primary mb-0">$199.00</h5>
                  <div className="btn-action d-flex justify-content-center">
                    <a className="btn btn-primary py-2 px-3" href="">
                      <i className="bi bi-cart"></i>
                    </a>
                    <a className="btn btn-primary py-2 px-3" href="">
                      <i className="bi bi-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="pb-5">
                <div className="product-item position-relative bg-light d-flex flex-column text-center">
                  <img
                    className="img-fluid mb-4"
                    src="img/product-2.png"
                    alt=""
                  ></img>
                  <h6 className="text-uppercase">Quality Pet Foods</h6>
                  <h5 className="text-primary mb-0">$199.00</h5>
                  <div className="btn-action d-flex justify-content-center">
                    <a className="btn btn-primary py-2 px-3" href="">
                      <i className="bi bi-cart"></i>
                    </a>
                    <a className="btn btn-primary py-2 px-3" href="">
                      <i className="bi bi-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="pb-5">
                <div className="product-item position-relative bg-light d-flex flex-column text-center">
                  <img
                    className="img-fluid mb-4"
                    src="img/product-3.png"
                    alt=""
                  ></img>
                  <h6 className="text-uppercase">Quality Pet Foods</h6>
                  <h5 className="text-primary mb-0">$199.00</h5>
                  <div className="btn-action d-flex justify-content-center">
                    <a className="btn btn-primary py-2 px-3" href="">
                      <i className="bi bi-cart"></i>
                    </a>
                    <a className="btn btn-primary py-2 px-3" href="">
                      <i className="bi bi-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="pb-5">
                <div className="product-item position-relative bg-light d-flex flex-column text-center">
                  <img
                    className="img-fluid mb-4"
                    src="img/product-4.png"
                    alt=""
                  ></img>
                  <h6 className="text-uppercase">Quality Pet Foods</h6>
                  <h5 className="text-primary mb-0">$199.00</h5>
                  <div className="btn-action d-flex justify-content-center">
                    <a className="btn btn-primary py-2 px-3" href="">
                      <i className="bi bi-cart"></i>
                    </a>
                    <a className="btn btn-primary py-2 px-3" href="">
                      <i className="bi bi-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="pb-5">
                <div className="product-item position-relative bg-light d-flex flex-column text-center">
                  <img
                    className="img-fluid mb-4"
                    src="img/product-2.png"
                    alt=""
                  ></img>
                  <h6 className="text-uppercase">Quality Pet Foods</h6>
                  <h5 className="text-primary mb-0">$199.00</h5>
                  <div className="btn-action d-flex justify-content-center">
                    <a className="btn btn-primary py-2 px-3" href="">
                      <i className="bi bi-cart"></i>
                    </a>
                    <a className="btn btn-primary py-2 px-3" href="">
                      <i className="bi bi-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#" className="btn btn-primary py-3 fs-4 back-to-top">
          <i className="bi bi-arrow-up"></i>
        </a>
      </section>
    </>
  );
}
