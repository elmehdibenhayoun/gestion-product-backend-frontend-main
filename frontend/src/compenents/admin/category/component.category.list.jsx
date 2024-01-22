import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  deleteCategoryByID,
  getCategory,
} from "../../../services/category.services";
//import '../../client/home.css';

export function CategoriesList() {
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState("");

  // après l'affichage du composant
  useEffect(() => {
    fetchCategories();
  }, [query]);

  async function fetchCategories() {
    try {
      const res = await getCategory(query);
      setCategories(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  async function deleteCategory(id) {
    try {
      const res = await deleteCategoryByID(id);
      fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title text-center">Liste des catégories</h1>
          <form className="mt-3 ">
            <div className="col-6">
              <input
                type="search"
                className="form-control"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Entrez un mot clé"
              />
            </div>
          </form>
          <Link to={"/admin/categories/new"} className="btn btn-ajouter">
            <i className="fas fa-plus"></i>Nouvelle catégorie
          </Link>
          <div className="table-wrapper">
            <table className="fl-table">
              <thead>
                <tr>
                  <th className="text-center">Name</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody id="tbody">
                {categories.map((category, index) => (
                  <tr key={index}>
                    <td>{category.name}</td>
                    <td>
                      <Link
                        className="btn btn-modifier"
                        to={`/admin/categories/edit/${category._id}`}
                      >
                        Modifier
                      </Link>
                      <button
                        className="btn btn-supprimer"
                        onClick={() => deleteCategory(category._id)}
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
