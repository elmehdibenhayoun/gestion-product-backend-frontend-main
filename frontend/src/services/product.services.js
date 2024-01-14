import http from "./http-common";

const token = localStorage.getItem("jwtToken");
export async function getProduct(query) {
  return await http.get(`/products?keyword=${query}`, {
    headers: { Authorization: token },
  });
}
export async function deleteProductByID(id) {
  return await http.delete(`/products/${id}`, {
    headers: { Authorization: token },
  });
}
export async function addProduct(product) {
  return await http.post("/products", product, {
    headers: { "Content-Type": "multipart/form-data", Authorization: token },
  });
}
export async function getProductByID(id) {
  return await http.get(`/products/${id}`, {
    headers: { Authorization: token },
  });
}

export async function updateProduct(id, formData) {
       return await http.patch(`/products/${id}`, formData, {
         headers: {
           Authorization: token,
           'Content-Type': 'multipart/form-data', // Assurez-vous que le type de contenu est correct
         },
       });
     
}
