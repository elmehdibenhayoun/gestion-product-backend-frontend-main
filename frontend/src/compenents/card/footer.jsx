import React from "react";





function Footer() {
  return (
    <>
      <div className="container-fluid bg-light mt-5 py-5">
        <div className="container pt-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">
                Get In Touch
              </h5>
              <p className="mb-4">
                No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita
                et et dolor sed dolor
              </p>
              <p className="mb-2">
                <i className="bi bi-geo-alt text-primary me-2"></i>123,
                CasaBlanca, Moroco
              </p>
              <p className="mb-2">
                <i className="bi bi-envelope-open text-primary me-2"></i>
                mundiapolis@ma.com
              </p>
              <p className="mb-0">
                <i className="bi bi-telephone text-primary me-2"></i>+212 345
                67890
              </p>
            </div>
            {/* ... Les autres colonnes */}
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark text-white-50 py-4">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">
                &copy;{" "}
                <a className="text-white" href="#">
                  Cats and dogs
                </a>
                . All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">
                Designed by Mundiapolis{" "}
                <a className="text-white" href="1">
                  2024
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Footer;
