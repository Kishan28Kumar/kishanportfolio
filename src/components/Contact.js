import React from 'react'

export default function Contact() {
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
            {/* <div class="hamburger">
                <img class="ham" src="ham2.png" alt="" width="23"/>
                <img class="cross" src="cross1.png" alt="" width="23"/>
            </div> */}
           <div class="contactform">
            <h1>Contact me for work/ general Enquiries</h1>
            <htmlForm>
                <div class="mb-3">
                  <label for="clientname" class="form-label">Enter your Name</label>
                  <input type="name" class="form-control" id="clientname" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                  <label for="clientemail" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="clientemail" aria-describedby="emailHelp"/>
                  <div id="emailHelp" class="form-text">We'll never share your email & phone with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="clientphone" class="form-label">Phone</label>
                  <input type="phone" class="form-control" id="clientphone"/>
                </div>
                <div class="mb-3">
                    <label for="clientname" class="form-label">Write Your Enquiry</label>
                    <input type="name" class="form-control" id="clientname" aria-describedby="emailHelp"/>
                  </div>
                <div class="mb-3 form-check" id="form-check">
                  <input type="checkbox" class="form-check-input" id="isclient"/>
                  <label class="form-check-label" for="isclient">I want you to work on a project with me</label>
                </div>
                <button type="submit" class="btn btn-primary btn-sm">Submit</button>
              </htmlForm>
           </div>
        </div>
    </div>
    </>
  )
}
