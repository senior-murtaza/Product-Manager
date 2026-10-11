
export default function ProductCard({ product, onDelete }) {
  return (
    <article className="product-card">
      <span className="category-tag">{product.category}</span>

      <h3>{product.name}</h3>

      <p className="price">${product.price.toFixed(2)}</p>

      <p>Quantity: {product.quantity}</p>

      <p className={product.quantity === 0 ? "out-of-stock" : "in-stock"}>
        {product.quantity === 0 ? "Out of stock" : "Available"}
      </p>

      <p className="subtotal">
        Inventory value: ${(product.price * product.quantity).toFixed(2)}
      </p>

      <button
        className="delete-button"
        onClick={() => onDelete(product.id)}
      >
        Delete Product
      </button>
    </article>
  );
}
