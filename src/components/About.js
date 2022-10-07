import React from 'react'

export default function About() {
  return (
    <>
         <div className="container">
        <div className="main">
            <div className="hamburger">
                <img className="ham" src="ham2.png" alt="" width="23"/>
                <img className="cross" src="cross1.png" alt="" width="23"/>
            </div>
           <div className="intro">
            <h2>About Me</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam sapiente sint veniam illo minus ab molestiae quos expedita odit dolores consequuntur itaque laudantium deserunt, labore dolorem! In nihil esse fuga nam, animi id totam.</p>
            <h2>My Skill</h2>
            <div className="skillcontainer">
               <div className="skillitem">HTML: <div className="skill hundred"></div></div>
               <div className="skillitem">CSS: <div className="skill fifty"></div></div>
               <div className="skillitem">Javascript: <div className="skill t5"></div></div>
               <div className="skillitem">Bootstrap: <div className="skill hundred"></div></div>
               <div className="skillitem">React js: <div className="skill fifty"></div></div>
            </div>
            
           </div>
        </div>
    </div>
    </>
  )
}
