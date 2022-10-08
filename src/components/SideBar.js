import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";


export default function SideBar() {
    const Navigate = useNavigate();

    const [open, setOpen] = useState(false);
    // const [hi, setHi] = useState("sidebar")
    function handleOpen(){
        setOpen(!open)
       
    }

  return (
    <>
    {/* <i className="fa fa-bars" aria-hidden="true"></i> */}
    {/* <i class="fa-sharp fa-solid fa-bars"></i> */}
      <button className="ham" style={{position : 'fixed', zIndex:100, marginLeft : '.6rem'}} onClick={handleOpen} >  <i style={{cursor:"pointer"}} class="fa-sharp fa-solid fa-bars"></i></button>
      <div style={{zIndex:"100"}} className={open?"sidebar ":"sidebar sidebarGo"}>
        <div
        className="cross"
         onClick={()=>setOpen(!open)}><p>X</p></div>
        <nav>
                <ul>
                    <li onClick={()=>{Navigate('/');setOpen(!open)}}>Home</li>
                    <li onClick={()=>{Navigate('/intro');setOpen(!open)}}>My Intro</li>
                    <li onClick={()=>{Navigate('/services');setOpen(!open)}}>Services</li>
                    <li onClick={()=>{Navigate('/blog');setOpen(!open)}}>Blog</li>
                    
                    <li onClick={()=>{Navigate('/contact');setOpen(!open)}}>Contact me</li>
                    {/* <li}><NavLink to="/contact">Contact me</NavLink></li> */}
                </ul>
            </nav>
      </div>
    </>
  );
}



// export default function SideBar() {


// //   document.querySelector(".cross").style.display = "none";
// //   document.querySelector(".hamburger").addEventListener("click", () => {
// //     document.querySelector(".sidebar").classList.toggle("sidebarGo");
// //     if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
// //       setTimeout(() => {
// //         document.querySelector(".ham").style.display = "inline";
// //       }, 300);

// //       document.querySelector(".cross").style.display = "none";
// //     } else {
// //       document.querySelector(".ham").style.display = "none";
// //       setTimeout(() => {
// //         document.querySelector(".cross").style.display = "inline";
// //       }, 300);
// //     }
// //   });

//     const [open, setOpen] = useState(true);
//     const [hi, setHi] = useState("sidebar")
//     const Hi = () => {
//         if(!open)
//         setHi("sidebar sidebarGo")
//         else setHi('sidebar')
//     }
//     function handleOpen(){
//         setOpen(x => !x)
//         Hi()
//     }

//   return (
//     <>
//       <button style={{position : 'fixed', zIndex:100, marginLeft : '.6rem'}} onClick={handleOpen} > {open ? "X" : "="}</button>
//       <div className={hi}>
//         <nav>
//           <ul>
//             <li>
//               <a href="/">Home</a>
//             </li>
//             <li>
//               <a href="/intro.html">My Intro</a>
//             </li>
//             <li>
//               <a href="/services.html">Services</a>
//             </li>
//             <li>
//               <a href="/blog.html">Blog</a>
//             </li>
//             <li>
//               <a href="/contact.html">Contact me</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// }
