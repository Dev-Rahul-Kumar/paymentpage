import React, { useState } from "react";
import "./style/mainpage.css";
// import book from './image/Group 20books.jpg'
import one from "./image/Icon 1one.png";
import two from "./image/Icon 1two.png";
import razorpay from "./image/Razorpay Iconrazorpay.png"

export default function Mainpage() {
  const [isSelected, setIsSelected] = useState();
  const [value, setValue] = useState();

  const handleonclick = (e) => {
    // setIsSelected(divid);
    const result = e.target.value;
    console.log(result);
  };

  // const divStyle =(divid)=> ({

  //   border: isSelected===divid ? '2px solid #BEBEBE': '2px solid #47BA68'
  // },[]);

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

            <div className="inputfield order1" style={{border: '2px solid #47BA68'}}>
              <input
                type="radio"
                name="radio"
                id="expire"
                onClick={handleonclick}
                value={179}
              />
              <div className="textformat">
                <p className="statement">12 Months Subscription </p>
                <div className="rightprice">
                  <div className="top" id="expires">
                    <p className="text">Total</p>
                    <p className="number">₹179</p>
                  </div>
                  <div className="bottom">
                    <p className="pricetag">₹15</p>
                    <p className="month">/mo</p>
                  </div>
                </div>
              </div>

              <span className="float1">Recommended</span>
            </div>

            <div className="inputfield order2">
              <input type="radio" name="radio" id="expire" />
              <div className="textformat">
                <p className="statement">6 Months Subscription </p>
                <div className="rightprice">
                  <div className="top" id="expires">
                    <p className="text">Total</p>
                    <p className="number">₹149</p>
                  </div>
                  <div className="bottom">
                    <p className="pricetag">₹33</p>
                    <p className="month">/mo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="inputfield order3">
              <input type="radio" name="radio" id="expire" />
              <div className="textformat">
                <p className="statement">3 Months Subscription </p>
                <div className="rightprice">
                  <div className="top" id="expires">
                    <p className="text">Total</p>
                    <p className="number">₹99</p>
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
              <p>₹18,500</p>
            </div>
            <div className="limited">
              <div className="alertheader">
                <p style={{color:'#DE4313'}}>Limited time offer</p>
                <p>- ₹18,401</p>
              </div>
              <div className="alertbody">
                <ul className="ul">
                  <li className="li" style={{color:'#DE4313'}}>Offer valid till 25th March 2023 </li>
                </ul>

              </div>
            </div>
            <div className="textcontainer">
              <p className="gst"><span style={{fontWeight:'700'}}>Total</span> (Incl. of 18% GST)</p>
              <p className="tagprice" ><span style={{fontWeight:'700'}}>₹149</span></p>
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
