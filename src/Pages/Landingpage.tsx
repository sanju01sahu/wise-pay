import React from "react";
import h1text from "../assets/h1text.png";
import mockup from "../assets/mockup.png";
import h4 from "../assets/h4.png";
import cta from "../assets/cta.png";
import row from "../assets/row.png";
import fund from "../assets/fund.png";
import finalys from "../assets/finalys.png";
import trading from "../assets/trading.png";
import regina from "../assets/regina.png";
import reginam from "../assets/reginam.png";
import client from "../assets/client.png";
import latest from "../assets/latest.png";
import l1 from "../assets/l1.png";
import l2 from "../assets/l2.png";
import l3 from "../assets/l3.png";
import l4 from "../assets/l4.png";
import pricing from "../assets/pricing.png";
import free from "../assets/free.png";
import organize from "../assets/organize.png";
import dollar from "../assets/dollar.png";
import unlimited from "../assets/unlimited.png";
import getin from "../assets/getin.png"
import email from "../assets/email.png"
import icon from "../assets/icon.png"
import company from "../assets/company.png"
import features  from "../assets/features.png"
import resource from "../assets/resource.png"


function Landingpage() {
  return (
    <>
      <div className="landingpage">
        <div className="landing">
          <div>
            <img src={h1text} alt="" />
            {/* <h1>Your Finacial Assistance</h1> */}
            <h4>
              We know how large objects will act, but things on a small scale
            </h4>
            {/* <img src={h4} alt="" style={{ display:"block" }}/> */}
            <button className="get">Get Quote Now</button>
            <button className="learn">Learn More</button>
            {/* <img src={cta} alt="" /> */}
          </div>
          <div>
            <img src={mockup} alt="" />
          </div>
        </div>
      </div>

      {/* Better Stragey */}

      <div className="betterStrategy">
        <img src={row} alt="" />
        <div className="raisingfund">
          <div>
            <img src={fund} alt="" />
          </div>
          <div>
            <img src={trading} alt="" />
          </div>
          <div>
            <img src={finalys} alt="" />
          </div>
        </div>
      </div>

      {/* What Clients say */}

      <div className="csbox">
        <div className="clientsay">
          <img src={client} alt="" />
          <div className="clients">
            <div>
              <img src={regina} alt="" />
            </div>
            <div>
              <img src={reginam} alt="" />
            </div>
            <div>
              <img src={regina} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Latest News */}

      <div className="lnbox">
        <div className="latestnews">
          <img src={latest} alt="" />
          <div className="latest">
            <div>
              <img src={l1} alt="" />
            </div>
            <div>
              <img src={l2} alt="" />
            </div>
            <div>
              <img src={l3} alt="" />
            </div>
            <div>
              <img src={l4} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}

      {/* <div className="pricingbox">
        <div className="pricing">
          <img src={pricing} alt="" />
          <div className="price">
            <div>
              <img src={free} alt="" className="free" style={{ display:"block" }}/>
               <img src={organize} alt="" className="organize" style={{ display:"block" }}/> */}
            { /* <img src={dollar} alt="" className="dollar" style={{ display:"block" }}/>
              <button style={{ display:"block" }}>Get it Now</button>
              <img src={unlimited} alt="" className="unlimited"/> */}
            {/* </div>
          </div> */}

          {/* <div className="price">
            <div>
              <img src={free} alt="" />
              <img src={organize} alt="" />
              <img src={dollar} alt="" />
              <button>Get it Now</button>
              <img src={unlimited} alt="" />
            </div>
          </div>

          <div className="price">
            <div>
              <img src={free} alt="" />
              <img src={organize} alt="" />
              <img src={dollar} alt="" />
              <button>Get it Now</button>
              <img src={unlimited} alt="" />
            </div>
          </div> */}

        {/* </div>
      </div> */}




   {/* Get in Touch */}


   {/* #252B42 */}


   <div className="getint">
    <div>
     <img src={getin} alt="" />
    </div>
    <div>
     <img src={email} alt="" />
    </div>
   </div>



   {/* Footer */}

   <div className="footerbox">
    <div className="footer">
      <div>
        <img src={icon} alt="" />
      </div>
      <div>
        <img src={company} alt="" />
      </div>
      <div>
        <img src={features} alt="" />
      </div>
      <div id="res">
        <img src={resource} alt="" />
      </div>
    </div>
   </div>


   <div className="lastcontainer">
    <p>@lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
   </div>




   


    </>
  );
}

export default Landingpage;
