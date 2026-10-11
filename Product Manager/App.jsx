
import { useState } from "react";
import ProductForm from "./Components/ProductForm";
import ProductList from "./Components/ProductList";
import ProductStats from "./Components/ProductStats";

const initialProducts = [
  {
    id: 1,
    name: "Laptop",
    price: 650,
    category: "Electronics",
    quantity: 5,
  },
  {
    id: 2,
    name: "T-Shirt",
    price: 20,
    category: "Clothing",
    quantity: 12,
  },
  {
    id: 3,
    name: "React Book",
    price: 35,
    category: "Books",
    quantity: 8,
  },
  {
    id: 4,
    name: "Headphones",
    price: 45,
    category: "Electronics",
    quantity: 0,
  },
];

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  function addProduct(productData) {
    const newProduct = {
      id: Date.now(),
      ...productData,
    };

    setProducts((previousProducts) => [
      ...previousProducts,
      newProduct,
    ]);
  }

  function deleteProduct(id) {
    setProducts((previousProducts) =>
      previousProducts.filter((product) => product.id !== id)
    );
  }

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function getFilteredProducts() {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }

  return (
    <main className="app">
      <header className="page-header">
        <p className="eyebrow">INVENTORY MANAGEMENT</p>
        <h1>Product Manager</h1>
        <p>Manage your products and track your inventory.</p>
      </header>

      <ProductStats products={products} />

      <section className="panel">
        <h2>Add a Product</h2>
        <ProductForm onAddProduct={addProduct} />
      </section>

      <section className="panel">
        <h2>Your Products</h2>

        <div className="toolbar">
          <input
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={handleSearch}
          />

          <select value={category} onChange={handleCategoryChange}>
            <option>All</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Books</option>
            <option>Other</option>
          </select>
        </div>

        <ProductList
          products={getFilteredProducts()}
          onDelete={deleteProduct}
        />
      </section>
    </main>
  );
}
