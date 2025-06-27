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

  return (
    <>
      <AddProductForm onAdd={handleAddProduct} />
      <ProductTable products={products} />
    </>
  );
}

export default App;
