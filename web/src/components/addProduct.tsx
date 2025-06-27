import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  shops,
  categories,
  type Product,
  type AddProductFormProps,
} from "../types";
import { nanoid } from "nanoid";
export const AddProductForm = ({ onAdd }: AddProductFormProps) => {
  const [name, setName] = useState<string>("");
  const [shop, setShop] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  function handleAdd() {
    console.log(name, shop, category);
    if (!name || !shop || !category) {
      alert("Please fill all the fields");
      return;
    }

    onAdd({
      id: nanoid(),
      name,
      shop: shop as Product["shop"],
      category: category as Product["category"],
    });

    setName("");
    setShop("");
    setCategory("");
  }

  return (
    <>
      <Form.Group>
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Product Name"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Shop Name</Form.Label>
        <Form.Control
          as="select"
          value={shop}
          onChange={(e) => setShop(e.target.value)}
        >
          <option value="">Select Shop</option>
          {shops.map((shopItem, index) => (
            <option key={index} value={shopItem}>
              {shopItem}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Category Name</Form.Label>
        <Form.Control
          as="select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((categoryItem, index) => (
            <option key={index} value={categoryItem}>
              {categoryItem}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Button onClick={handleAdd}>Add Product</Button>
    </>
  );
};
