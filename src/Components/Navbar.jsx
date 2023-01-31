import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
           <Link to="./about" >About</Link>
           <Link to="./contacts"  >Contacts</Link>
           <Link to="./user/tempId" >User</Link>
        </nav>
    </div>
  )
}

export default Navbar