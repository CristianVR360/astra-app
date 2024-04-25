import React from 'react';
import './Vitrina.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

const ProductList = () => {
  // Aquí puedes reemplazar estos datos de ejemplo con los datos reales de tus productos
  const products = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del producto 1',
      price: 19.99,
      image: 'ruta/a/la/imagen1.jpg',
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Descripción del producto 2',
      price: 24.99,
      image: 'ruta/a/la/imagen2.jpg',
    },
    // Agrega más productos aquí...
  ];

  return (
    <section className="product-list">
      <h2>Nuestros productos</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;