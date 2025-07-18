import react from 'react';
const ProductCard = ({ category, thumbnail, price, title, key }) => {
    return (
        <div key={key} className="one_product">
            <img src={thumbnail} className="img" />
            <p>{title}</p>
            <p>{price}</p>
            <p>{category}</p>
        </div>
    );
};
export default ProductCard