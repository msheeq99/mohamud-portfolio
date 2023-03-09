import React, { useEffect, useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [style, setStyle] = useState({});
  const [scrollY, setScrollY] = useState(0);

   function manageHeaderStyle() {
    setScrollY(window.pageYOffset);
    if (scrollY > 250) {
      setStyle({
        backgroundColor: "#29323c",
      });
    } else {
      setStyle({
        backgroundColor: "transparent",
      });
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", manageHeaderStyle);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", manageHeaderStyle);
    };
  });
  return (  
    <header>
    <h1 class="portfolio">Portf<span class="olio">olio</span></h1>
    <nav>
        <div class="hamb">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <ul class="nav-list">
            <li><a href="#HOME">HOME</a></li>
            <li><a href="#ABOUT ME">ABOUT ME</a></li>
            <li><a href="#SERVICES">PROJECTS</a></li>
            <li><a href="https://github.com/msheeq99">GITHUB</a></li>
            <li class="btn"><a href="#CONTACT">CONTACT</a></li>
        </ul>
    </nav>
</header>
  );

}

