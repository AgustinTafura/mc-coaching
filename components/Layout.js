import React from 'react'
import Navbar from './Navbar'
import ContactBubble from './BubbleContact'
const Layout = ({children}) => {
  return (
    <>
      <Navbar/>
      {children}
      <ContactBubble/>
  </>
  )
}

export default Layout