import React from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  let { id } = useParams();
  return <div>SingleProduct</div>;
};

export default SingleProduct;
