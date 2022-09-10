import React from 'react'
import '../App.css';
function Navbar() {
  return (
   <div className="container">
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Bra<span className="vaa">vaa</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* <nav className="navbar bg-light">
  <div className="container">
    <a className="navbar-brand" href="/">
      <img src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg" alt="Bravaa" width="30" height="24"/>
    </a>
  </div>
</nav> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
   </div>
  )
}

export default Navbar