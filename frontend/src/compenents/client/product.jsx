import { useEffect, useState } from "react";
import { deleteProductByID, getProduct } from "../../services/product.services";
import { Link } from "react-router-dom";
import "./home.css";
import "../../style/lib/flaticon/font/flaticon.css";

import "../../style/css/bootstrap.min.css";
//import "../../style/lib/owlcarousel/assets/owl.carousel.css";

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

  async function deleteProduct(id) {
    try {
      const res = await deleteProductByID(id);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: '600px' }}>
          <h6 className="text-primary text-uppercase">Products</h6>
          <h1 className="display-5 text-uppercase mb-0">Products For Your Best Friends</h1>
        </div>
        <div className="owl-carousel product-carousel">
          {products.map((elem, index) => (
            <div className="pb-5" key={index}>
              <div className="product-item position-relative bg-light d-flex flex-column text-center">
                <img className="img-fluid mb-4" src={`http://localhost:5000${elem.image}`} alt="" />
                <h6 className="text-uppercase">{elem.name}</h6>
                <h5 className="text-primary mb-0">${elem.price}</h5>
                <div className="btn-action d-flex justify-content-center">
                  <a className="btn btn-primary py-2 px-3" href="1"><i className="bi bi-cart"></i></a>
                  <Link to={`/product/${elem._id}`} className="btn btn-primary py-2 px-3"><i className="bi bi-eye"></i></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    
  );
};

export default ProductList;
