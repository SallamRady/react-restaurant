import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuList from "../../data/MenuList";
import "./SingleProduct.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import ReviewCard from "../../components/review-card/ReviewCard";

const SingleProduct = () => {
  let { id } = useParams();
  const [value, setValue] = useState(0);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    let pro = MenuList.filter((ele) => ele.id == id)[0];
    setValue(pro.rate);
    setLoading(false);
    setProduct(pro);
  }, [id]);

  return (
    <>
      <div className="productDetailsContainer">
        {loading && <p>Loading....</p>}
        {!loading && (
          <>
            <div className="left">
              <img src={product?.image} alt={product?.name} />
            </div>
            <div className="right">
              <p className="label">Name</p>
              <h3>{product.name}</h3>
              <p className="label">Price</p>
              <h4>{product.price} $</h4>
              <p className="label">Rate</p>
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
              <p className="label">Description</p>
              <p className="desc">{product.desc}</p>
            </div>
          </>
        )}
      </div>
      <div className="reviewsContainer">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </>
  );
};

export default SingleProduct;
