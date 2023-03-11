import React, { useState, Fragment } from "react";

import Navbar from "./Nav/Navbar";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Categories from "./Categories/Categories";

import "./Homepage.css";
import Toptrending from "./Toptrending/Toptrending";

const Homepage = () => {
  const [click, setClick] = useState(false);
  console.log({ click });
  return (
    <Fragment>
      <div className="menu">
        {click && (
          <div className="modalMsn">
            <div className="modalHeader">
              <div className="headerModal">
                <h2>Customer Support</h2>
              </div>
              <div className="chatApp">
                <button>Let's Chat App!</button>
              </div>
            </div>
            <div className="modalContent">
              <div className="t1">
                <div className="t11"></div>
                <div className="content1">Xin chào</div>
              </div>
              <div className="t2">
                <div className="t21"></div>
                <div className="content2">Làm thế nào để xem các sản phẩm</div>
              </div>
              <div className="content3">
                <div className="contentIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </div>
                <div className="content3detail">ADMIN: Chào Bạn</div>
              </div>
              <div className="content4">
                <div className="contentIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </div>
                <div className="content4detail">
                  ADMIN: Bạn có thể vào mục Shop để xem các sản phẩm
                </div>
              </div>
            </div>
            <div className="modalFooter">
              <div className="contentIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </div>
              <div className="footerContent">
                <input placeholder="Enter Message!" />
              </div>
              <div className="icon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-paperclip"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                </svg>
              </div>
              <div className="icon2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-emoji-smile"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                </svg>
              </div>
              <div className="icon3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-send-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                </svg>
              </div>
            </div>
          </div>
        )}
        <div className="chatSupport">
          <button onClick={() => setClick(!click)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-messenger"
              viewBox="0 0 16 16"
            >
              <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
            </svg>
          </button>
        </div>
        <div className="meanMenu">
          <Navbar />
          <Banner />
          <div className="line">
            <div className="line1">CAREFULLY CREATED COLLECTIONS</div>
            <div className="line2">BROWSE OUR CATEGORIES</div>
          </div>
          <Categories />
          <div className="line">
            <div className="line1">MADE THE HARD WAY</div>
            <div className="line2">TOP TRENDING PRODUCT</div>
          </div>
          <Toptrending />

          <div className="shipping">
            <div className="shippingline1">
              <div className="shippingline1div1">FREE SHIPPING</div>
              <div className="shippingline1div2">Free shipping worldwide</div>
            </div>
            <div className="shippingline1">
              <div className="shippingline1div1">24x7 SERVICE</div>
              <div className="shippingline1div2">Free shipping worldwide</div>
            </div>
            <div className="shippingline1">
              <div className="shippingline1div1">FESTIVAL OFFER</div>
              <div className="shippingline1div2">Free shipping worldwide</div>
            </div>
          </div>
          <div className="subfooter">
            <div className="friends">
              <div className="friends1">LET'S BE FRIENDS!</div>
              <div className="friends2">
                Nisi nisi tempor consequat iaboris nisi
              </div>
            </div>
            <div className="emailSub">
              <input placeholder="Enter your email address" />
              <button>Subscribe</button>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};
export default Homepage;
