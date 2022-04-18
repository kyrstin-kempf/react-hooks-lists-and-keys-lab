import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  console.log(links);

  const navigationLinks = links.map((link) => {
    return <a href={'#' + link} key={link}>{ link }</a>
  });
  return <nav>{navigationLinks}</nav>;
}

export default NavBar;
