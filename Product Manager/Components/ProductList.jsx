
import ProductCard from "./ProductCard";

export default function ProductList({ products, onDelete }) {
  if (products.length === 0) {
    return <p className="empty-message">No products found.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
