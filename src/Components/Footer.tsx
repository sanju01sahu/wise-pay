import React from 'react'
import icon from "../assets/icon.png"
import company from "../assets/company.png"
import features  from "../assets/features.png"
import resource from "../assets/resource.png"

const Footer = () => {
  return (
    <div>
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
    </div>
  )
}

export default Footer