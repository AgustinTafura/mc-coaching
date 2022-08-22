import React from 'react'
import Navbar from './Navbar'
import ContactBubble from './BubbleContact'
import Footer from './Footer'
const Layout = ({children}) => {
  return (
    <>
      <Navbar/>
      {children}
      <ContactBubble/>
      <Footer/>
  </>
  )
}

export default Layout