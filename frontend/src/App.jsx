import "./App.css";
import { ProductList } from "./compenents/admin/component.product.list";
import { ProductAddForm } from "./compenents/admin/component.product.add";
import { Routes, Route } from "react-router-dom";
import { AdminLayout } from "./compenents/admin/component.admin.layout";
// import { Home } from "./compenents/admin/component.home";
import { Contact } from "./compenents/admin/component.contact";
import { ProductEdit } from "./compenents/admin/component.product.edit";
import { CategoryEdit } from "./compenents/admin/component.category.edit";
import { CategoriesList } from "./compenents/admin/component.category.list";
import { CategoryAddForm } from "./compenents/admin/component.category.add";
import { LoginPage } from "./compenents/admin/auth/component.LoginPage";
import { Register } from "./compenents/admin/auth/component.registerPage";
import { Home } from "./compenents/client/component.home";
import { ClientLayout } from "./compenents/client/component.client.layout";
function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        {/* <Route path="home" element={<HomePage />} /> */}
        <Route path="products" element={<ProductList />} />
        <Route path="products/new" element={<ProductAddForm />} />
        <Route path="products/edit/:id" element={<ProductEdit />} />
        <Route path="categories" element={<CategoriesList />} />
        <Route path="categories/new" element={<CategoryAddForm />} />
        <Route path="categories/edit/:id" element={<CategoryEdit />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<Register />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="/" element={<ClientLayout />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
