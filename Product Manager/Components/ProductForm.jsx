
import { useState } from "react";

export default function ProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [quantity, setQuantity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !name.trim() ||
      price === "" ||
      quantity === "" ||
      Number(price) <= 0 ||
      !Number.isFinite(Number(price)) ||
      !Number.isInteger(Number(quantity)) ||
      Number(quantity) < 0
    ) {
      alert("Enter a valid name, price, and quantity.");
      return;
    }

    onAddProduct({
      name: name.trim(),
      price: Number(price),
      category,
      quantity: Number(quantity),
    });

    setName("");
    setPrice("");
    setCategory("Electronics");
    setQuantity("");
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Price"
        min="0.01"
        step="0.01"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        required
      />

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option>Electronics</option>
        <option>Clothing</option>
        <option>Books</option>
        <option>Other</option>
      </select>

      <input
        type="number"
        placeholder="Quantity"
        min="0"
        step="1"
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
        required
      />

      <button type="submit">Add Product</button>
    </form>
  );
}
