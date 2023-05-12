import { useState, useEffect } from "react";
import axios from "axios";
import "./Card.css";
import { Link } from "react-router-dom";
import ProductPage from "../../Pages/ProductPage/ProductPage";
import Spinner from "../Loading/Spinner";
const Card = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/products");
        console.log(response.data);
        setProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  if (loading) {
    return (
      <div className="loading">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <h1 className="product-title">Our Collection</h1>
      <div className="product-container">
        <div className="product-grid">
          {products.map((products) => (
            <div key={products.id}>
              <p className="card_title">{products.title}</p>
              {
                <img
                  className="card_image"
                  src={
                    products.images[0]?.src ||
                    "https://www.tradeinn.com/f/13827/138272170/burton-tabla-snowboard-feelgood-mujer.jpg"
                  }
                  alt={products.images[0]?.alt}
                />
              }
              <p className="card_id">
                <b>Product ID:</b> {products.id}
              </p>
              <button className="card_price">
                {products.variants[0].price}€
              </button>
              <div className="card_description">
                <Link
                  className="card_link"
                  to={`/products/${products.id}`}
                  element={<ProductPage />}
                >
                  <span className="button_buy">Buy me</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
