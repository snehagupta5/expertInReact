import react, { useEffect, useState } from "react";
import ProductList from "./ProductList";
const Product_perPage = 10;
export default function PaginationHome() {
  const [productData, setProductData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchProduct();
  }, []);
  const fetchProduct = async () => {
    setLoading(true);
    try {
      let data = await fetch("https://dummyjson.com/products?limit=500");
      data = await data.json();
      setProductData(data.products);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  const noOFPages = Math.ceil(productData.length / Product_perPage);
  const start = page * Product_perPage;
  const end = page * Product_perPage + Product_perPage;
  const products = productData.slice(start, end);

  const Pagination = () => {
    const arr = new Array(noOFPages).fill(1);
    return (
      <div className="pagination">
        <button
          className="pagination_key"
          onClick={handlePrev}
          disabled={page == 0}
        >
          prev
        </button>
        {arr.map((_, index) => {
          return (
            <div
              key={index}
              className={page === index ? "activePage" : "pagination_key"}
              onClick={() => setPage(index)}
            >
              {index}
            </div>
          );
        })}
        <button
          className="pagination_key"
          onClick={handleNext}
          disabled={page === arr.length - 1}
        >
          next
        </button>
      </div>
    );
  };
  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrev = () => {
    setPage(page - 1);
  };
  if (error) {
    return <div>{error}</div>;
  }
  console.log(page, "pppp");
  return (
    <div className="App">
      {loading && <div>...loading</div>}
      {productData.length > 0 && <ProductList productData={products} />}
      <div>{Pagination()}</div>
    </div>
  );
}
