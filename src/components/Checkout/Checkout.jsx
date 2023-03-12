import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Checkout.css";

const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const validateOrder = () => {
    if (name.length === 0) {
      alert("Please input name!");
    } else if (email.length === 0) {
      alert("Please input email!");
    } else if (phone.length === 0) {
      alert("Please input phone!");
    } else if (address.length === 0) {
      alert("Please input address!");
    } else if (
      name.length !== 0 &&
      email.length !== 0 &&
      phone.length !== 0 &&
      address.length !== 0
    ) {
      setOrder();
      alert("YOUR ORDER SUCCESS!");
    }
  };

  const navigate = useNavigate();

  let getData = localStorage.getItem("products") ?? "[]";
  let productArray = JSON.parse(getData);

  const formatter = new Intl.NumberFormat("en-US", {
    thousandSeparator: ".",
    currency: "VND",
  });

  function sumCart() {
    let sum = 0;
    for (let i = 0; i < productArray.length; i++) {
      sum += Number(productArray[i][0].price);
    }
    return sum;
  }

  console.log({ name });
  console.log({ email });
  console.log({ phone });
  console.log({ address });

  const setOrder = () => {
    localStorage.setItem(
      "orderData",
      JSON.stringify({ name, email, phone, address })
    );
  };

  return (
    <>
      <div className="bannerCheckout">
        <div className="checkout">
          <h1>CHECKOUT</h1>
        </div>
        <div className="toolbar">
          <div className="homeTool">
            <button onClick={() => navigate("/")}>HOME /</button>
          </div>
          <div className="cartTool">
            <button onClick={() => navigate("/cart")}>CART /</button>
          </div>
          <div className="checkTool">
            <button onClick={() => navigate("/checkout")}>CHECKOUT</button>
          </div>
        </div>
      </div>
      <form>
        <div className="checkContent">
          <div className="checkDetails">
            <div className="billDetail">
              <h2>BILLING DETAILS</h2>
            </div>
            <div className="fullName">
              <h3>FULL NAME:</h3>
            </div>
            <div className="inputName">
              <input
                key={Math.random()}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Full Name Here!"
                value={name}
                type="text"
              />
            </div>
            <div className="email">
              <h3>EMAIL:</h3>
              <div className="inputEmail">
                <input
                  key={Math.random()}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter Your Email Here!"
                  type="email"
                  value={email}
                />
              </div>
            </div>
            <div className="phoneNumber">
              <h3>PHONE NUMBER:</h3>
              <div className="inputPhone">
                <input
                  type="number"
                  key={Math.random()}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter Your Phone Number Here!"
                  value={phone}
                />
              </div>
            </div>
            <div className="address">
              <h3>ADDRESS</h3>
              <div className="inputAddress">
                <input
                  type="address"
                  key={Math.random()}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter Your Address Here!"
                  value={address}
                />
              </div>
            </div>
            <div className="placeOrder">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  validateOrder();
                }}
              >
                Place Order
              </button>
            </div>
          </div>
          <div className="yourOrder">
            <h2>YOUR ORDER</h2>
            {productArray?.map((product) => {
              return (
                <div className="typePrice">
                  <div key={Math.random()} className="typeOrder">
                    {product[0].name}
                  </div>
                  <div key={Math.random()} className="priceOrder">
                    {formatter.format(product[0].price) + " VND"} x {product[1]}
                  </div>
                </div>
              );
            })}
            <div className="totalPrice">
              <div className="totalOrder">TOTAL</div>
              <div className="priceTotal" key={Math.random()}>
                {formatter.format(sumCart()) + " VND"}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default Checkout;
