import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {

  const sections = [
    {
      name:'conoceme',
      link: '/conoceme',
      list:[]
    },
    {
      name:'servicios',
      link: '/servicios',
      list:[
        {
          name:'life coaching',
          link: 'life-coaching'
        },
        {
          name:'coaching vocacional',
          link: 'coaching-vocacional'
        },
        {
          name:'coaching educativo',
          link: 'coaching-educativo'
        },
        {
          name:'liderazgo efectivo',
          link: 'liderazgo-efectivo'
        },
        {
          name:'educacion neuroemocional',
          link: 'educacion-neuroemocional'
        },
      ]
    },
    {
      name:'agendar cita',
      link: '/agenda',
      list:[]
    },
    {
      name:'contacto',
      link: '/contacto',
      list:[]
    },
  ]

  return (
      <nav className="cid-rSVu0x0NuJ navbar nav navbar-expand-lg navbar-light bg-white shadow-sm p-0 mb-5 bg-body fixed-top opened">
          <div className="container-fluid d-flex justify-content-between">

            <Link href="/">
            <a className="navbar-brand ">
              <Image src="/logo.png" alt="logo - Marcela Caputo - Coaching y Educación neuroemocional" width={261} height={69} />
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
                  <Image src="/logo.png" alt="logo Marcela Caputo" width={231} height={69} />
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
                              section.list.map(service=><li key={service.name}><a
                                 className="dropdown-item"
                                  href={section.link+"/"+service.link}>{service.name} </a> </li>) 
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