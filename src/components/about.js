import React from "react";
import sosa from "../images/sosa.JPG";



export default function about () {
    return (
        <section id="ABOUT ME">
        
        <div class="about-me">
            <div class="line"></div>
           <img src= {sosa} alt="img"></img>
           <div class="about-text">
            <h2>ABOUT ME</h2>
            <h5><span> Developer </span>& Designer</h5>
            <p>
                I am ambitious person who has developed a mature and responsible approach to any task that i undertake.
                while studying at UoB aspiring to become a web developer through a course. I have delivered skills like coping with mounted pressure by
                adapting quicker, calmed & focused in challenging situations.
            </p>
           </div> 
        </div>
    </section>
    );
}

