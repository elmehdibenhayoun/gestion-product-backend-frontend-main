import { useEffect, useState } from "react";
import { deleteProductByID, getProduct } from "../../services/product.services";
import { Link, Navigate } from "react-router-dom";

export function HomeText() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  // après l'affichage du composant
  useEffect(() => {
    fetchProducts();
  }, [query]);

  async function fetchProducts() {
    try {
      const res = await getProduct(query); // Note the function call here
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
 

  return (
    <>
      {/* <form>
        <input type="search" onChange={e=>setQuery(e.target.value)} placeholder="Entrez un mot clé"/>
      </form> */}
      <div className="container">
      <div className="col-3 d-flex justify-content-start p-3">
          
        </div>
        <div className=" row mx-auto">
          {products.map((elem, index) => (
            <div className="col-md-3" key={index}>
              <div className="card mb-3">
              <Link to={`/product/${elem._id}`}>
                <div className="card-body">
                <div className="d-flex justify-content-center align-items-center mb-1" >
                    
                    <img
                      height={250}
                      alt=""
                      width={300}
                      src={`http://localhost:5000${elem.image}`}
                    />
                  </div>
                  <h5 className="card-title text-center">{elem.name}</h5>

                  {/* <p className="card-text text-center">
                    description:{elem.description}
                  </p> */}
                  <p className="card-text text-center">Price: {elem.price}</p>
                </div>
                </Link>
                <div className="card-footer text-center">
                  <Link
                    to={`/product/${elem._id}`}
                    className="btn btn-modifier"
                  >
                    <i className="fas fa-cart-plus"></i>
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