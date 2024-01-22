import React, { useEffect, useState } from "react";
import { deleteProductByID, getProduct } from "../../services/product.services";
import { Link } from "react-router-dom";
import "../../style/css/bootstrap.min.css";
import "./home.css";
import Carousel from "react-bootstrap/Carousel";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [query]);

  async function fetchProducts() {
    try {
      const res = await getProduct(query);
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div
          className="border-start border-5 border-primary ps-5 mb-5"
          style={{ maxWidth: "1200px" }}
        >
          <h6 className="text-primary text-uppercase">Products</h6>
          <h1 className="display-2 text-uppercase mb-0">
            Products For Your Best Friends
          </h1>
        </div>

        <Carousel>
          {products.map((elem, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex">
                {products.map((product, i) => (
                  <div key={i} className="card mx-2" style={{ width: "18rem" }}>
                    <img
                      className="card-img-top"
                      src={`http://localhost:5000${product.image}`}
                      alt=""
                    />
                    <div className="card-body">
                      <h6 className="card-title text-uppercase text-center">
                        {product.name}
                      </h6>
                      <h5 className="card-text text-primary mb-0 text-center">
                        ${product.price}
                      </h5>
                      <div className="btn-action d-flex justify-content-between mt-3">
                        <a className="btn btn-primary py-2 px-3" href="1">
                          <i className="bi bi-cart"></i>
                        </a>
                        <Link
                         to={`/product/${elem._id}`}
                          className="btn btn-primary py-2 px-3"
                        >
                          <i className="bi bi-eye"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductList;
