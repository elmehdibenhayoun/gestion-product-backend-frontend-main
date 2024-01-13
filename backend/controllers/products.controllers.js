const Product = require("../models/Product");

async function getAllProducts(req, res) {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send("error dans le serveur");
  }
}

async function getProductById(req, res) {
  const idP = req.params.id;
  try {
    const product = await Product.findById(idP);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send("error dans le serveur");
  }
}

async function addProduct(req, res) {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).send("error d ajout");
  }
}

async function deleteProductById(req, res) {
  const idp = req.params.id;
  try {
    const product = await Product.findByIdAndRemove(idp);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("error de suppression");
  }
}

async function updateProduct(req, res) {
  try {
    const idp = req.params.id;
    if (!req.body.name || !req.body.price) {
      return res
        .status(400)
        .json({ error: "Name and price are required fields." });
    }

    const updatedProduct = await Product.findByIdAndUpdate(idp, req.body, {
      new: true,
    });
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found." });
    }
    res.json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProductById,
  updateProduct,
};
