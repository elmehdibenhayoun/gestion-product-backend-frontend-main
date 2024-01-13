import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { deleteCategoryByID, getCategory} from "../../services/category.services";

export function CategoriesList() {
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState("");

  // après l'affichage du composant
  useEffect(() => {
    fetchCategories();
  }, [query]);

  async function fetchCategories() {
    try {
      const res = await getCategory(query); // Note the function call here
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
    <>
      <h1>Liste des categories</h1>
      <form>
        <input type="search" className="form-control" onChange={e=>setQuery(e.target.value)} placeholder="Entrez un mot clé"/>
      </form>
      <Link to={"/admin/categories/new"} className="custom-button" class=" btn btn-ajouter"><i class="fas fa-plus"></i>Nouvelle categorie</Link>
      <div class="table-wrapper">
      <table class="fl-table">
        <tr>
          <th class="text-center">Name</th>
         
          <th class="text-center">Action</th>

        </tr>
        <tbody id="tbody">
          {categories.map((category, index) => (
            <tr key={index}>
              <td>{category.name}</td>
              <td>
              <Link  class="btn btn-modifier" to={`/admin/categories/edit/${category._id}`}>
                  Modifier
                </Link>
                <button  class="btn btn-supprimer" onClick={() => deleteCategory(category._id)}>
                  Supprimer
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
     
    </>
  );
}