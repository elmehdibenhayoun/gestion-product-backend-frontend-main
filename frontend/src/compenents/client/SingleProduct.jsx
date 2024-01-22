import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductByID } from "../../services/product.services";
import "../../style/css/bootstrap.min.css";
import "./home.css";

export function SingleProduct() {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    fetchProduct();
  }, [id]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  async function fetchProduct() {
    try {
      const res = await getProductByID(id);
      setProduct(res.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }

  const handleIncrement = () => {
    const updatedCart = [...cart, { product, quantity }];
    setCart(updatedCart);
    setCartItemCount(cartItemCount + quantity);
    setQuantity(1); // Réinitialiser la quantité après l'ajout au panier
  };
  const handleDecrement = () => {
    const updatedCart = [...cart, { product, quantity }];
    setCart(updatedCart);
    setCartItemCount(cartItemCount - quantity);
    setQuantity(1); // Réinitialiser la quantité après l'ajout au panier
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <div className="image-container border">
                <img
                  src={`http://localhost:5000${product.image}`}
                  alt={product.name}
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <h2 className="card-title">{product.name}</h2>
              <p className="card-text">Description: {product.description}</p>
              <p className="card-text">Price: {product.price}</p>

              <div className="quantity-section mb-1">
                <p className="card-text">Quantity:</p>
                <div className="quantity-controls">
                  <button
                    onClick={handleDecrement}
                    className="btn btn-sm btn-success"
                  >
                    -   
                  </button>
                  <span className="quantity">       {cartItemCount}         </span>
                  <button
                    onClick={handleIncrement}
                    className="btn btn-sm btn-success"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <Link to="/home" className="btn btn-success">
            Retour à la liste
          </Link>
          <Link to={`/product/${product._id}`} className="btn btn-success float-end">
            <i className="fas fa-cart-plus"></i>
            {cartItemCount !==0 && ( <span className="badge bg-primary">{cartItemCount}</span>)}
           
          </Link>
        </div>
      </div>
    </div>
  );
}
