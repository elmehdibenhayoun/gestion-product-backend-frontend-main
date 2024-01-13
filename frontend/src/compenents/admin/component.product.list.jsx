import { useEffect, useState } from "react";
import {
  deleteProductByID,
  getAllProducts,
} from "../../services/product.services";
import { Link } from "react-router-dom";

export function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const res = await getAllProducts();
    setProducts(res.data);
  }

  async function deleteProduct(id) {
    const res = await deleteProductByID(id);
    fetchProducts();
  }

  return (
    <>
      <div className="container">
        <div className="col-3 d-flex justify-content-start p-3">
          <Link to={"/products/new"} className="btn btn-ajouter">
            <i className="fas fa-plus"></i> Nouveau produit
          </Link>
        </div>
        <div className=" row mx-auto">
          {products.map((elem, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title text-center">{elem.name}</h5>
                  <p className="card-text text-center">Price: {elem.price}</p>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-supprimer"
                    onClick={() => deleteProduct(elem._id)}
                  >
                    <i className="fas fa-trash icon-rouge"></i>
                  </button>

                  <Link
                    to={`/products/edit/${elem._id}`}
                    className="btn btn-modifier"
                  >
                    <i className="fas fa-pencil-alt icon-bleue"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
