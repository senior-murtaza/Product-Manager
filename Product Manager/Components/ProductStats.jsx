
export default function ProductStats({ products }) {
  function getProductCount() {
    return products.length;
  }

  function getTotalQuantity() {
    return products.reduce((total, product) => total + product.quantity, 0);
  }

  function getInventoryValue() {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <p>Products</p>
        <h2>{getProductCount()}</h2>
      </div>

      <div className="stat-card">
        <p>Total Units</p>
        <h2>{getTotalQuantity()}</h2>
      </div>

      <div className="stat-card">
        <p>Inventory Value</p>
        <h2>${getInventoryValue().toFixed(2)}</h2>
      </div>
    </div>
  );
}
