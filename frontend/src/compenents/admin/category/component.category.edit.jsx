import { useState, useEffect } from 'react';
import { getCategoryByID, updateCategory } from '../../../services/category.services';
import { useNavigate, useParams } from 'react-router-dom';

export function CategoryEdit() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    console.log('Fetching category with ID:', id);
    fetchCategories();
  }, []);

  async function fetchCategories() {
    try {
      const response = await getCategoryByID(id);
      const c = response.data;
      console.log('Category data:', c);
      setName(c.name);
      console.log('Name after setting:', name);
    } catch (error) {
      console.error('Error fetching category:', error);
    }
  }

  async function handlForm(event) {
    event.preventDefault();
    const c = { "_id": id, "name": name };
    await updateCategory(c);
    navigate("/admin/categories");
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Modifier une catégorie</h1>
          <form onSubmit={(e) => handlForm(e)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nom de catégorie :</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="d-grid gap-2">
              <input type="submit" className="btn btn-primary" value="Modifier" />
              <input type="reset" className="btn btn-secondary" value="Annuler" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
