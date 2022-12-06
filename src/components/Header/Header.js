import React from 'react'
import NavBar from '../Navigation/NavBar'

function Header(props) {
  return (
    <div>
    <NavBar setPage={props.setPage} currentPage={props.currentPage} />
    </div>
  )
}

export default Header