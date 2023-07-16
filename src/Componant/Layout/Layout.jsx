import React, { useEffect, useRef, useState } from "react";
import Loading from "./../Loading/Loading";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { incrementValue } from "../../Store/LoadingSlice";

export default function Layout() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState(null);

  async function getData() {
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/products"
    );
    setProducts(data.data);
    console.log(data.data);
  }

  useEffect(() => {
    getData();
  });

  useEffect(() => {
    dispatch(incrementValue());
  }, [!products]);

  return (

    <>
      {products ?<>
        <div className="container">

          <div className="row">
            {products.map((product)=>{
              return <>
              <div className="col-md-2">

                  <div className="item">
                    <h2>{product.title}</h2>
                  </div>

              </div>
              
              
              </>
            })}
          </div>
        </div>
      
      
      
      </>: (
        <>
          <Loading />
        </>
      )}
    </>
  );
}
