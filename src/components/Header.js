import React from 'react';

function Header() {
  return (
    <div className="header">
      <a class="active" href="#home">
        Home
      </a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <a href="#github" class="split">
        GitHub
      </a>
      <a href="#linkedin" class="split">
        LinkedIn
      </a>
    </div>
  );
}

export default Header;
