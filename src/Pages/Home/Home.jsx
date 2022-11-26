import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProductApi } from "../../redux/productReducer/productReducer";
import axios from "axios";

export default function Home() {
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  // const stateA = useSelector(state => state.productReducer.stateA);

  useEffect(() => {
    //Hàm này sẽ 1 lần sau khi component load xong giao diện
    //Gọi api
    const action = getProductApi();

    // action = async (dispatch) => {
    //   //Xử lý api
    //   let result = await axios({
    //     url: "https://shop.cyberlearn.vn/api/Product",
    //     method: "GET",
    //   });
    //   //Sau khi lấy dữ liệu từ api về => dispatch lên reducer
    //   //Tạo ra action creator đưa dữ liệu lên reducer
    //   const action = getDataProductAction(result.data.content);
    //   dispatch(action);
    // };

    dispatch(action);
  }, []);

  return (
    // <div>
    //   <div className="carousel"></div>

    //   <div className="container">
    //     <h3>Product list</h3>
    //     <div className="row">
    //       {arrProduct.map((prod, index) => {
    //         return (
    //           <div className="col-4 mt-2" key={index}>
    //             <div className="card">
    //               <img src={prod.image} alt="..." />
    //               <div className="card-body">
    //                 <h3>{prod.name}</h3>
    //                 <p>{prod.price}$</p>
    //                 <NavLink
    //                   to={`/detail/${prod.id}`}
    //                   className="btn btn-warning"
    //                 >
    //                   Add to cart <i className="fa fa-cart-plus"></i>
    //                 </NavLink>
    //               </div>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
    <div>
      <div classname="container">
        {/* <header className="header">
          <div className="container">
            <a className="logo" href="./index.html">
              <img src="./img/image 3.png" alt />
            </a>
            <div className="login">
              <a className="buy" href="#">
                <img src="./img/image 8.png" alt />
              </a>
              <p className="text-1">(1)</p>
              <button className="button-login">Login</button>
              <a href="./register.html" className="button-register">
                Register
              </a>
            </div>
          </div>
        </header> */}
        <nav className="menu">
          <a href="#">Home</a>
          <a href="#">Men</a>
          <a href="#">Woman</a>
          <a href="#">Kid</a>
          <a href="#">Sport</a>
        </nav>
        <section className="carousel">
          <div className="container">
            <div className="thumbnail">
              <img src="./img/image 4.png" alt="giay" />
            </div>
            <div className="detail">
              <h1 className="product-name">Product name</h1>
              <p className="product-desc">Product description ....</p>
              <button className="btn-buynow">Buy now</button>
            </div>
          </div>
        </section>
        <section className="product">
          <div className="container">
            <h1 class="title">-Product Featured-</h1>
            <div className="row">
              {arrProduct.map((prod, index) => {
                return (
                  <div className="col" key={index}>
                    <div class="card item-1">
                      <img src={prod.image} alt="..." />
                      <div class="card-body">
                        <div class="product-name-info">
                          <h1 class="name">{prod.name}</h1>
                          <p class="info">
                            {prod.description.length > 75
                              ? prod.description.substr(0, 75) + "..."
                              : prod.description}
                          </p>
                        </div>
                        <div class="card-button">
                          <NavLink
                            className="btn-buy"
                            to={`/detail/${prod.id}`}
                          >
                            Buy now
                          </NavLink>
                          <button class="btn btn-price">{prod.price}$</button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <section className="register">
        <div className="container">
          <div className="register-row">
            <div className="col">
              <h2 className="col-title">GET HELP</h2>
              <p className="detail">Contact us</p>
              <p className="detail">Shopping</p>
              <p className="detail">NIKEiD</p>
              <p className="detail">Nike+</p>
            </div>
            <div className="col">
              <h2 className="col-title">ORDERS</h2>
              <p className="detail">Payment options </p>
              <p className="detail">Shipping and delivery</p>
              <p className="detail">Returns</p>
            </div>
            <div className="col">
              <h2 className="col-title">REGISTER</h2>
              <p className="detail">
                Create one account to manage everything you do with Nike, from
                your shopping preferences to your Nike+ activity.
              </p>
              <a className="path" href="#">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <footer className="footer">
        <div className="container">
          <div className="footer-row">
            <div className="col">
              <h2 className="title">EMAIL SIGN UP</h2>
              <p className="detail">
                Be the first to know about new products and special offers.
              </p>
              <a className="path" href="#">
                Sign up now
              </a>
            </div>
            <div className="col">
              <h2 className="title">GIFT CARDS</h2>
              <p className="detail">Give the gift that always fits.</p>
              <a className="path" href="#">
                View cards
              </a>
            </div>
            <div className="col">
              <h2 className="title">STORES NEAR YOU</h2>
              <p className="detail">
                Locate a Nice retail store or authorized retailer.
              </p>
              <a className="path" href="#">
                Search
              </a>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
