import React from 'react'

const Navbar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div>
      <button onClick={() => {
        setShowSidebar(!showSidebar)
      }}>
        close sidebar
      </button>
    </div>
  )
}

export default Navbar