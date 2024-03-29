import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { sections } from '../data'

const Navbar = () => {

  return (
      <nav className="cid-rSVu0x0NuJ navbar nav navbar-expand-lg navbar-light bg-white shadow-sm p-0 mb-5 bg-body fixed-top opened">
          <div className="container-fluid d-flex justify-content-between">

            <Link href="/">
            <a className="navbar-brand ">
              <Image src="/logoC.png" alt="logo - Marcela Caputo - Coaching y Educación neuroemocional" width={261} height={59} />
            </a>
          </Link>
          <button className="navbar-toggler " type="button"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation">
              <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            <div className="offcanvas offcanvas-end" tab-index="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
              <div className="offcanvas-header">
                <div className="navbar-brand">
                  <Image src="/logoC.png" alt="logo Marcela Caputo" width={278} height={69} />
                </div>
                <button className="navbar-toggler " type="button"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation">
                  <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div>
              <div className="offcanvas-body justify-content-lg-end">
                <ul className="navbar-nav nav-dropdown justify-content-end">

                <li className="nav-item text-uppercase fw-normal">
                  <Link href='/'>
                    <a className="nav-link link mbr-black text-black display-44" aria-current="page">HOME</a>
                  </Link>
                </li>

                  {
                    sections.map(section=>{
                      if (section.list.length) {
                      return (
                        <li key={section.name} className="nav-item text-uppercase fw-normal dropdown">
                          <a
                           className="nav-link link mbr-black text-black display-44 dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            {section.name}
                          </a>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            {
                              section.list.map(service=>
                                <li key={service.name}>
                                  <Link href={section.link+"/"+service.link}>
                                    <a className="dropdown-item">{service.name} </a> 
                                  </Link>
                                </li>) 
                            }
                          </ul> 
                        </li> 
                      )} 

                      return ( 
                        <li key={section.name} className="nav-item text-uppercase fw-normal">
                          <Link href={section.link}>
                            <a className="nav-link link mbr-black text-black display-44" aria-current="page">{section.name}</a>
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>

 
          </div>
          {/* </div> */}
      </nav>
  )
}

export default Navbar