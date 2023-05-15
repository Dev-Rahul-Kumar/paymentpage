import React, { useState } from "react";
import "./style/mainpage.css";
// import book from './image/Group 20books.jpg'
import one from "./image/Icon 1one.png";
import two from "./image/Icon 1two.png";
import razorpay from "./image/Razorpay Iconrazorpay.png";

export default function Mainpage() {
  const [isSelected, setIsSelected] = useState();
  const [value, setValue] = useState();

  const prices = [
    {price: "179", id:"1"},
    {price: "149",id:"2"},
    {price: "99", id:"3"}
];


  const handleonclick = (divId) => {
    
    
    const record =prices[divId-1].id;
   
    const price= prices[divId-1].price;
    setIsSelected(price)

    if(divId == record ){
      const discount =prices[divId-1].price*0.5;
      setValue(discount)
      
    }else{
      alert('No offer')
    }

    
  };
  

  return (
    <>
      <div className="contents container">
        <div className="lefts">
          <p className="font">Access curated courses worth</p>
          <p className="font">
            ₹<span className="linedecor">18,500</span>at just{" "}
            <span className="color">₹ 99</span> per year!
          </p>
          <ul className="list">
            <li className="li">
              <span className="color">100+ </span> Job relevant courses
            </li>
            <li className="li">
              <span className="color">20,000+ </span> Hours of content
            </li>
            <li className="li">
              <span className="color">Exclusive </span> webinar access
            </li>
            <li className="li">
              Scholarship worth <span className="color">₹94,500</span>{" "}
            </li>
            <li className="li">
              <span className="color">Ad Free</span> learning experience
            </li>
          </ul>
        </div>
        <div className="rights">
          <div className="progressBar">
            <div className="one">
              <img src={one} alt="one" className="number" />
              <p>Sign Up</p>
            </div>
            <div className="two">
              <img src={two} alt="two" className="number" />
              <p>Subscribe</p>
            </div>
          </div>

          <div className="progressHeader">
            <h1>Select your subcription plan</h1>
          </div>

          <div className="inputcontainer">
            <div className="inputfield order" id="disabled">
              <input type="radio" name="radio" id="expire" />
              <div className="textformat">
                <p className="statement">12 Months Subscription </p>
                <div className="rightprice">
                  <div className="top" id="expires">
                    <p className="text">Total</p>
                    <p className="number">₹99</p>
                  </div>
                  <div className="bottom">
                    <p className="pricetag">₹8</p>
                    <p className="month">/mo</p>
                  </div>
                </div>
              </div>

              <span className="float">Offer expired</span>
            </div>

            <div
              className="inputfield order1"
              style={{ border: "2px solid #47BA68" }}
              onClick={()=>handleonclick(1)}
              value
            >
              <input
                type="radio"
                name="radio"
                id="expire"
                value="179"
                
              />
              <div className="textformat">
                <p className="statement">12 Months Subscription </p>
                <div className="rightprice">
                  <div className="top" id="expires">
                    <p className="text">Total</p>
                    <p className="number"> ₹{prices[0].price}</p>
                  </div>
                  <div className="bottom">
                    <p className="pricetag">₹15</p>
                    <p className="month">/mo</p>
                  </div>
                </div>
              </div>

              <span className="float1">Recommended</span>
            </div>

            <div className="inputfield order2" onClick={()=>handleonclick(2)}>
              <input
                type="radio"
                name="radio"
                id="expire"
                // onClick={handleonclick(2)}
              />
              <div className="textformat">
                <p className="statement">6 Months Subscription </p>
                <div className="rightprice">
                  <div className="top" id="expires">
                    <p className="text">Total</p>
                    <p className="number"> ₹{prices[1].price}</p>
                  </div>
                  <div className="bottom">
                    <p className="pricetag">₹33</p>
                    <p className="month">/mo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="inputfield order3 " onClick={()=>handleonclick(3)}>
              <input
                type="radio"
                name="radio"
                id="expire"
                // onClick={handleonclick(3)}
              />
              <div className="textformat">
                <p className="statement">3 Months Subscription </p>
                <div className="rightprice">
                  <div className="top" id="expires">
                    <p className="text">Total</p>
                    <p className="number"> ₹{prices[2].price}</p>
                  </div>
                  <div className="bottom">
                    <p className="pricetag">₹33</p>
                    <p className="month">/mo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="summarycontainer">
            <div className="para">
              <p>Subscription Fee</p>
              <p>₹{isSelected}</p>
            </div>
            <div className="limited">
              <div className="alertheader">
                <p style={{ color: "#DE4313" }}>Limited time offer 50% off</p>
                <p>- ₹{value}</p>
              </div>
              <div className="alertbody">
                <ul className="ul">
                  <li className="li" style={{ color: "#DE4313" }}>
                    Offer valid till 25th June 2023{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="textcontainer">
              <p className="gst">
                <span style={{ fontWeight: "700" }}>Total</span> (Incl. of 18%
                GST)
              </p>
              <p className="tagprice">
                <span style={{ fontWeight: "700" }}>₹{value}</span>
              </p>
            </div>
          </div>

          <div className="buttoncontainer">
            <button className="btn2 bgcolor">CANCEL</button>
            <button className="btn2 primary">PROCEED TO PAY</button>
          </div>

          <div className="iconcontainer">
            <img className="razor" src={razorpay} alt="razorpay" />
          </div>
        </div>
      </div>
    </>
  );
}
