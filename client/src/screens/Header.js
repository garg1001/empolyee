import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        
        <Link to="home" className='nav-link'>Home</Link>
      </li>
      <li class="nav-item">
      <Link to="about" className='nav-link'>About</Link>
      </li>
      <li class="nav-item">
      <Link to="contact" className='nav-link'>Contact</Link>
      </li>
      
      <li class="nav-item">
      <Link to="support" className='nav-link'>Support</Link>
      </li>
      <li class="nav-item">
      <Link to="employee" className='nav-link'>Employee</Link>
      </li>
      <li class="nav-item">
      <Link to="cal" className='nav-link'>Cal</Link>
      </li>
      <li class="nav-item">
      <Link to="cal1" className='nav-link'>cal1</Link>
      </li>
      <li className="nav-item register-link">
      <Link to="/register" className="nav-link">Register</Link>
    </li>
    
  </ul>
    
  </div>
</nav>
    </>
  )
}

export default Header
