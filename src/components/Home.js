import React from 'react'
import img  from "./image/KISHAN_Kumar.jpg"
// import { Link } from 'react-router-dom'
// import SideBar from './SideBar'
export default function Home() {
  return (
    <>
        <div className="container">
        <div className="main">
            {/* <div className="hamburger">
                <img className="ham" src="ham2.png" alt="" width="23"/>
                <img className="cross" src="cross1.png" alt="" width="23"/>
            </div> */}
           <div className="infoContainer">
            <div className="devInfo">
                <div className="hello">Hi I'm</div>
                <div className="name">Kishan Kumar</div>
             
                <div className="about">React Js Developer,BlockChain    <i class="fa fa-address-book-o" aria-hidden="true"></i>Enthusiast</div>
                <div className="moreAbout">I am explorer,love to travel ,and like listening song</div>
                <div className="btn">
                    <button>
                        <a href="/cv.txt" target="_blank">Download CV</a></button>
                    <button>
                        <a href="/contact">Contact Me</a></button>
                </div>
            </div>
            <div className="devPic">
                <img src={img} alt=""/>
            </div>
           </div>
        </div>
    </div>
    </>
  )
}
