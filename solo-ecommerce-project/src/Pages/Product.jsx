import React, { useEffect, useState } from "react";
import "../Css/Product.css";

function Product() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(1);

  let url = `http://localhost:3000/products?_page=${pages}&_per_page=8`;

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setProduct(data.data);
    } catch (err) {
      console.log(err);
      setLoading(true);
    }
  };
  console.log(product);
  console.log(loading);

  useEffect(() => {
    fetchData();
  }, [pages]);

  const pre = () => {
    setPages(pages - 1);
  };

  const next = () => {
    setPages(pages + 1);
  };
  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div id="main">
      {product.map((e, index) => (
        <div className="card" key={e.id}>
          {/* <p>{e.category}</p> */}
          <img src={e.image} alt="" />
          {/* <button style={{textAlign: 'center'}}>Add To Card</button> */}
        </div>
      ))}
      <div>
        <button disabled={pages === 1} onClick={pre}>Pre</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}

export default Product;
