import "./App.css";
import { ProductList } from "./compenents/admin/products/component.product.list";
import { ProductAddForm } from "./compenents/admin/products/component.product.add";
import { Routes, Route } from "react-router-dom";
import { AdminLayout } from "./compenents/admin/component.admin.layout";
// import { Home } from "./compenents/admin/component.home";
import { ContactForm } from "./compenents/admin/component.contact";
import { ProductEdit } from "./compenents/admin/products/component.product.edit";
import { CategoryEdit } from "./compenents/admin/category/component.category.edit";
import { CategoriesList } from "./compenents/admin/category/component.category.list";
import { CategoryAddForm } from "./compenents/admin/category/component.category.add";
import { LoginPage } from "./compenents/admin/auth/component.LoginPage";
import { Register } from "./compenents/admin/auth/component.registerPage";
import { Home } from "./compenents/client/component.home";
import { HomeText } from "./compenents/client/component.product";
import { ClientLayout } from "./compenents/client/component.client.layout";
import { isAdminLoggedIn } from "./services/login.services";
import { Navigate } from "react-router-dom";
import { Services } from "./compenents/client/component.services";
import Footer from "./compenents/card/footer";

function App() {
  const adminLoggedIn = isAdminLoggedIn();

  return (
    <>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          {adminLoggedIn ? (
            <>
              <Route path="products" element={<ProductList />} />
              <Route path="products/new" element={<ProductAddForm />} />
              <Route path="products/edit/:id" element={<ProductEdit />} />
              <Route path="categories" element={<CategoriesList />} />
              <Route path="categories/new" element={<CategoryAddForm />} />
              <Route path="categories/edit/:id" element={<CategoryEdit />} />
            </>
          ) : (
            <Route path="login" element={<LoginPage />} />
          )}
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<Register />} />
          <Route path="contact" element={<ContactForm />} />
          <Route path="services" element={<Services />} />
        </Route>
        <Route path="/" element={<ClientLayout />}>
          <Route path="" element={<Home />} />
          <Route path="home" element={<HomeText />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
