import React, { Component } from "react";



export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center ">
    <div>
      <span>More from Star Wars:</span>
    </div>
    <div className="TitulosFooter">
      <a href="https://www.facebook.com/StarWars" target="blank"><span className="titleFoo btn"><i class="fab fa-facebook"></i></span></a>
      <a href="https://twitter.com/starwars" target="blank"><span className="titleFoo btn"><i class="fab fa-twitter"></i></span></a>
      <a href="https://www.instagram.com/starwars/" target="blank"><span className="titleFoo btn"><i class="fab fa-instagram"></i></span></a>
      <a href="https://www.youtube.com/user/starwars" target="blank"><span className="titleFoo btn"><i class="fab fa-youtube"></i></span></a>
    </div>
    <div>
      <span className="descripFoo">TM & © Franco's film Ltd. All Rights Reserved</span>
    </div>
  </footer>
);
