const catalogServices = require("../services/catalog.services");

async function getAllProducts(req, res) {
  try {
    console.log(req.headers);
    let products = [];
    if (req.query.keyword) {
      products = await catalogServices.findProductByQuery(req.query.keyword);
    } else {
      products = await catalogServices.findProducts();
    }
    res.json(products);
  } catch (error) {
    res.status(500).send("Erreur dans le serveur");
  }
}

async function getProductById(req, res) {
  const idP = req.params.id;
  try {
    const product = await catalogServices.findProductById(idP);
    res.json(product);
  } catch (error) {
    res.status(500).send("Erreur dans le serveur");
  }
}

async function addProduct(req, res) {
  try {
    //const product = await catalogServices.saveProduct(req.body);
    console.log(req.file);
    console.log(req.body);
    const p = JSON.parse(req.body.productData);
    p.image = "/uploads/" + req.file.filename;
    await catalogServices.saveProduct(p);
    res.status(201).json("");
  } catch (error) {
    res.status(500).send("erreur d'ajout");
  }
}

async function deleteProductById(req, res) {
  const idP = req.params.id;
  try {
    await catalogServices.removeProductById(idP);
    res.send("Le produit a était bien supprimé");
  } catch (error) {
    res.status(500).send("Erreur dans la suppression de produit");
  }
}

async function updateProduct(req, res) {
  const idP = req.params.id;
  try {
    console.log("Updating product with ID:", idP);

    

    // Vérifier si une nouvelle image est fournie
    
    const p = JSON.parse(req.body.productData);
    p.image = "/uploads/" + req.file.filename;

    console.log("Updated product data:", p);

    await catalogServices.editProduct(idP, p);
    res.send("Le produit a été bien modifié");
  } catch (error) {
    console.error("Error in updateProduct:", error);
    res.status(500).send("Erreur dans la édition de produit");
  }
}
// async function addProduct(req, res) {
//   try {
//     //const product = await catalogServices.saveProduct(req.body);
//     console.log(req.file);
//     console.log(req.body);
//     const p = JSON.parse(req.body.productData);
//     p.image = "/uploads/" + req.file.filename;
//     await catalogServices.saveProduct(p);
//     res.status(201).json("");
//   } catch (error) {
//     res.status(500).send("erreur d'ajout");
//   }
// }



module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProductById,
  updateProduct,
};
