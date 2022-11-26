import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetailApi } from "../../redux/productReducer/productReducer";
import { useParams, NavLink } from "react-router-dom";
export default function Detail() {
  const { productDetail } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const action = getProductDetailApi(id);
    dispatch(action);
  }, [id]);
  return (
    <div>
      <section className="product-detail">
        <div className="container">
          <nav className="menu">
            <a href="#">Home</a>
            <a href="#">Men</a>
            <a href="#">Woman</a>
            <a href="#">Kid</a>
            <a href="#">Sport</a>
          </nav>
          <div id="product" className="row-product">
            <div className="img">
              <img src={productDetail.image} alt="..." />
            </div>
            <div className="info-product">
              <h1 className="title">{productDetail.name}</h1>
              <p className="detail">{productDetail.description}</p>
              <h2 className="title-body">Available size</h2>
              <div className="size">
                <div className="col">
                  <button className="btn-size">36</button>
                </div>
                <div className="col">
                  <button className="btn-size">37</button>
                </div>
                <div className="col">
                  <button className="btn-size">38</button>
                </div>
                <div className="col">
                  <button className="btn-size">39</button>
                </div>
                <div className="col">
                  <button className="btn-size">40</button>
                </div>
                <div className="col">
                  <button className="btn-size">41</button>
                </div>
                <div className="col">
                  <button className="btn-size">42</button>
                </div>
              </div>
              <h2 className="price">{productDetail.price}$</h2>
              <div className="amounts">
                <div className="col">
                  <button className="add">+</button>
                </div>
                <div className="col">
                  <h3 className="amount">1</h3>
                </div>
                <div className="col">
                  <button className="minus">-</button>
                </div>
              </div>
              <button className="buy">Add to cart</button>
            </div>
          </div>
          <div className="productDetail">
            <div className="container">
              <h3 className="title">Related Products</h3>
              <div className="row">
                {productDetail.relatedProducts?.map((prod, index) => {
                  return (
                    <div className="col" key={index}>
                      <div className="card item-1">
                        <img src={prod.image} alt="..." />
                        <div className="card-body">
                          <div className="product-name-info">
                            <h1 className="name">{prod.name}</h1>
                            <p className="info">
                              {prod.description.length > 75
                                ? prod.description.substr(0, 75) + "..."
                                : prod.description}
                            </p>
                            <div className="card-button">
                              <NavLink
                                className="btn btn-buy"
                                to={`/detail/${prod.id}`}
                              >
                                Buy now
                              </NavLink>
                              <button className="btn btn-price">
                                {prod.price}$
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
