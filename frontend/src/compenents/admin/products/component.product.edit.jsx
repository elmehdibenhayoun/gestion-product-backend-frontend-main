import { useState, useEffect } from "react";

import {
  getProductByID,
  updateProduct,
} from "../../../services/product.services";
import { useNavigate, useParams } from "react-router-dom";
import { getCategory } from "../../../services/category.services";

export function ProductEdit() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [selectedCat, setSelectedCat] = useState("");
  const [categories, setCategories] = useState([]);
  const [productImage, setProductImage] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const query = "";

  useEffect(() => {
    console.log("Product ID:", id);
    fetchProduct();
    fetchCategories();
  }, [query]);

  async function fetchProduct() {
    try {
      const response = await getProductByID(id);
      const p = response.data;
      console.log("Product data:", p);
      setSelectedCat(p.category && p.category._id ? p.category._id : "");
      setName(p.name);
      setDescription(p.description);
      setPrice(p.price);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }

  async function fetchCategories() {
    try {
      const res = await getCategory(query);
      setCategories(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  async function handlForm(event) {
    event.preventDefault();

    const updatedProduct = {
      name: name,
      description: description,
      price: price,
      category: selectedCat,
      _id: id,
    };
    const formData = new FormData();
    formData.append("productData", JSON.stringify(updatedProduct));
    formData.append("productImage", productImage);
    for (const pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    await updateProduct(id, formData);

    navigate("/admin/products");
  }

  return (
    <>
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            
            <h1>Modifier un produit</h1>
            <form onSubmit={(e) => handlForm(e)}>
              <label htmlFor="name">Nom de produit :</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              ></input>
              <label htmlFor="description">Description :</label>
              <input
                type="text"
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              ></input>
              <label htmlFor="price">Prix de produit :</label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              ></input>
              <label htmlFor="Category">Categories :</label>
              <select
                value={selectedCat}
                onChange={(e) => setSelectedCat(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <label className="form-label" htmlFor="Image">
                Image :
              </label>
              <input
                className="form-control"
                type="file"
                onChange={(e) => setProductImage(e.target.files[0])}
              />
              <input type="submit" value="Modifier"></input>
              <input type="reset" value="Annuler"></input>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
