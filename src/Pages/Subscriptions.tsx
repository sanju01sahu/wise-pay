import React from 'react'
import zee5 from "../assets/zee5.png"
import netflix from "../assets/netflix.png"
import spotify from "../assets/spotify.png"
import hotstar from "../assets/hotstar.jpg"
import jioo from "../assets/jioo.png"
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


function Subscriptions() {
  return (
    <>  
         
         {/* <Navbar/> */}

        <div className="subscription">
            <h1>Recommended Subscriptions</h1>
            <div className='subscriptions'>
            <div>
                <img src={zee5} alt="" />
                <h3>Zee5</h3>
                <p>STREAMING SERVICE</p>
                <p>$199</p>
                <button>Buy</button>
            </div>
            <div>
                <img src={netflix} alt="" />
                <h3>Netflix</h3>
                <p>STREAMING SERVICE</p>
                <p>$120</p>
                <button>Buy</button>
            </div>
            <div>
                <img src={jioo} alt="" />
                <h3>Jio Fiber</h3>
                <p>STREAMING SERVICE</p>
                <p>$365</p>
                <button>Buy</button>
            </div>
            <div>
                <img src={spotify} alt="" />
                <h3>Spotify</h3>
                <p>STREAMING SERVICE</p>
                <p>$220</p>
                <button>Buy</button>
            </div>
            <div>
                <img src={zee5} alt="" />
                <h3>Zee5</h3>
                <p>STREAMING SERVICE</p>
                <p>$199</p>
                <button>Buy</button>
            </div>
            </div>
        </div>

        <Footer/>
        </>
  )
}

export default Subscriptions