import React from "react";


import "../../style/lib/flaticon/font/flaticon.css";
import PricingPlan from "./pricing.plan";
import ProductList from "./product";
export function Services() {
  return (
    <>
      <section>
        <div className="container-fluid py-5">
          <div className="container">
            <div
              className="border-start border-5 border-primary ps-5 mb-5"
              style={{ maxWidth: "600px" }}
            >
              <h6 className="text-primary text-uppercase">Services</h6>
              <h1 className="display-5 text-uppercase mb-0">
                Our Excellent Pet Care Services
              </h1>
            </div>
            <div className="row g-5">
              <div className="col-md-6">
                <div className="service-item bg-light d-flex p-4">
                  <i className="flaticon-house display-1 text-primary me-4" ></i>
                  <div>
                    <h5 className="text-uppercase mb-3">Pet Boarding</h5>
                    <p>
                      Kasd dolor no lorem sit tempor at justo rebum rebum stet
                      justo elitr dolor amet sit
                    </p>
                    <a className="text-primary text-uppercase" href="/#">
                      Read More<i className="bi bi-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-item bg-light d-flex p-4">
                  <i className="flaticon-food display-1 text-primary me-4"></i>
                  <div>
                    <h5 className="text-uppercase mb-3">Pet Feeding</h5>
                    <p>
                      Kasd dolor no lorem sit tempor at justo rebum rebum stet
                      justo elitr dolor amet sit
                    </p>
                    <a className="text-primary text-uppercase" href="/#">
                      Read More<i className="bi bi-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-item bg-light d-flex p-4">
                  <i className="flaticon-grooming display-1 text-primary me-4"></i>
                  <div>
                    <h5 className="text-uppercase mb-3">Pet Grooming</h5>
                    <p>
                      Kasd dolor no lorem sit tempor at justo rebum rebum stet
                      justo elitr dolor amet sit
                    </p>
                    <a className="text-primary text-uppercase" href="/#">
                      Read More<i className="bi bi-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-item bg-light d-flex p-4">
                  <i className="flaticon-cat display-1 text-primary me-4"></i>
                  <div>
                    <h5 className="text-uppercase mb-3">Pet Training</h5>
                    <p>
                      Kasd dolor no lorem sit tempor at justo rebum rebum stet
                      justo elitr dolor amet sit
                    </p>
                    <a className="text-primary text-uppercase" href="/#">
                      Read More<i className="bi bi-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-item bg-light d-flex p-4">
                  <i className="flaticon-dog display-1 text-primary me-4"></i>
                  <div>
                    <h5 className="text-uppercase mb-3">Pet Exercise</h5>
                    <p>
                      Kasd dolor no lorem sit tempor at justo rebum rebum stet
                      justo elitr dolor amet sit
                    </p>
                    <a className="text-primary text-uppercase" href="/#">
                      Read More<i className="bi bi-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-item bg-light d-flex p-4">
                  <i className="flaticon-vaccine display-1 text-primary me-4"></i>
                  <div>
                    <h5 className="text-uppercase mb-3">Pet Treatment</h5>
                    <p>
                      Kasd dolor no lorem sit tempor at justo rebum rebum stet
                      justo elitr dolor amet sit
                    </p>
                    <a className="text-primary text-uppercase" href="/#">
                      Read More<i className="bi bi-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PricingPlan />
        <ProductList />
      </section>
    </>
  );
}
