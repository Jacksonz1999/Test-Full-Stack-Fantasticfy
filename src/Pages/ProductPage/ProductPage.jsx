import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./ProductPage.css";
import Spinner from "../../Components/Loading/Spinner";
import ReplyIcon from "@mui/icons-material/Reply";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState({});
  const [selectedVariantPrice, setSelectedVariantPrice] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/products`);
        const product = response.data.products.find(
          (product) => product.id == id
        );
        setProduct(product);
        setLoading(false);
        setSelectedVariant(product.variants[0]);
        setSelectedVariantPrice(product.variants[0].price);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="loading">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="product">
        <Link to="/" className="product_link">
          <ReplyIcon />
        </Link>
        <p className="product_title">{product.title}</p>
        <div className="product_container">
          <Carousel showThumbs={false}>
            {product.images.map((image) => (
              <div key={image.id}>
                <img
                  className="product_image"
                  src={
                    image.src ||
                    "https://www.tradeinn.com/f/13827/138272170/burton-tabla-snowboard-feelgood-mujer.jpg"
                  }
                  alt={image.alt}
                />
              </div>
            ))}
          </Carousel>
          <div className="product_description">
            <p>{product.body_html}</p>
            <p>
              <b>{selectedVariantPrice}€</b>
              {console.log(selectedVariant)}
            </p>
            <div className="product_variants">
              {product.variants.map((variant) => (
                <div key={variant.id}>
                  <button
                    className="product_variant"
                    onClick={() => {
                      setSelectedVariant(variant);
                      setSelectedVariantPrice(variant.price);
                    }}
                  >
                    {variant.title}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
