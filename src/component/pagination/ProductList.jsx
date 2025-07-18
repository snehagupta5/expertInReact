import react from 'react'
import ProductCard from "./ProductCard";
const ProductList = ({ productData }) => {
  return (
    <div className="product">
      {productData.map((product) => {
        return (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            thumbnail={product.thumbnail}
            category={product.category}
          />
        );
      })}
    </div>
  );
};
export default ProductList