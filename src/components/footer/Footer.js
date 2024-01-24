import React from 'react'
import logo from "../../Logo/logo.png"

function Footer() {
  return (
    <div><footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 mx-5 text-body-secondary text-decoration-none lh-1">
      <img src={logo} alt="Logo" width={50} height={50} loading="lazy" />
      </a>
      
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
    <span class="mb-3 mb-md-0 text-body-light">Aditya Jadon © 2024</span>
      <li class="ms-3"><a class="text-body-secondary" href="#"></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"></a></li>
    </ul>
  </footer></div>
  )
}

export default Footer