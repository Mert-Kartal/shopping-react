import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { AddProductForm } from "./components/AddProduct";
import { useState } from "react";
import type { Product } from "./types";
import { ProductTable } from "./components/ProductTable";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const handleAddProduct = (product: Product) => {
    setProducts([...products, product]);
    console.log(products);
  };

  const handleMarkAsBought = (id: string) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, isBought: !product.isBought }
          : product
      )
    );
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <>
      <AddProductForm onAdd={handleAddProduct} />
      <ProductTable
        products={products}
        onDelete={handleDeleteProduct}
        onToggleBought={handleMarkAsBought}
      />
    </>
  );
}

export default App;
