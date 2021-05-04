import React from 'react'

import Header from '../Header'
import Navbar from '../Navbar'

import './style.css'

const Main = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="l_main">
        <Navbar />
        <div className="l_main_content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Main
