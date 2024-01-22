import { useState, useEffect } from "react";
// import "../../style/css/style.css";
// import "../../style/css/bootstrap.min.css";
//import '../../index.css';
import { addCategory } from "../../../services/category.services";
import { useNavigate } from "react-router-dom";

export function CategoryAddForm() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  async function handlForm(event) {
    event.preventDefault();
    const c = { name: name };
    await addCategory(c);
    navigate("/admin/categories");
  }

  return (
    <>
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            
            <h1>Ajouter une categorie</h1>
            <form onSubmit={(e) => handlForm(e)}>
              <label htmlFor="name">Nom de categorie :</label>
              <input
                type="text"
                id="name"
                placeholder="saisir un nom"
                onChange={(event) => setName(event.target.value)}
              ></input>

              <input type="submit" value="Ajouter à la liste"></input>
              <input type="reset" value="Réinitialiser"></input>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
