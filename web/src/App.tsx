import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { AddProductForm } from "./components/addProduct";
import { useState } from "react";
import type { Product } from "./types";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const handleAddProduct = (product: Product) => {
    setProducts([...products, product]);
    console.log(products);
  };

  return (
    <>
      <AddProductForm onAdd={handleAddProduct} />
    </>
  );
}

export default App;
