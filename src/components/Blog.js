import React from 'react'

export default function blog() {
  return (
    <>
        <div class="container">
        {/* <div class="sidebar sidebarGo">
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/intro.html">My Intro</a></li>
                    <li><a href="/services.html">Services</a></li>
                    <li><a href="/blog.html">Blog</a></li>
                    <li><a href="/contact.html">Contact me</a></li>
                </ul>
            </nav>
        </div> */}
        <div class="main">
            <div class="hamburger">
                <img class="ham" src="ham2.png" alt="" width="23"/>
                <img class="cross" src="cross1.png" alt="" width="23"/>
            </div>
           <div class="blogcontainer">
            <h1>Blogs by Kishan Kumar</h1>
            
            
            <div class="blogitem">
                <h2>Learn Frontend in React js</h2>
                <p>Its Really a fun Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente laborum, est deleniti nostrum error fuga. Quos labore, eaque nostrum error quidem ducimus, eveniet ab asperiores voluptatum reprehenderit quis. Dolor hic dolorem cum doloribus praesentium.</p>
                <button class="btn-sm">Read More</button>
            </div>
            
            <div class="blogitem">
                <h2>Learn Frontend in React js</h2>
                <p>Its Really a fun Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio minima debitis illo modi exercitationem laboriosam? Quos voluptas earum recusandae quas soluta aut aspernatur est reiciendis dolore illo, maiores fuga commodi necessitatibus. Praesentium, doloribus voluptatum.</p>
                <button class="btn-sm">Read More</button>
            </div>
            
            <div class="blogitem">
                <h2>Learn Frontend in React js</h2>
                <p>Its Really a fun Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nam, vitae, aliquid maiores eaque alias inventore ad at autem nulla veniam voluptate cupiditate doloribus saepe, repudiandae accusantium sit ab sequi! Magni maxime quas quaerat!</p>
                <button class="btn-sm">Read More</button>
            </div>
            
           </div>
        </div>
    </div>
    </>
  )
}
