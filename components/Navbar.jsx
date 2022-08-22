import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

// import style from '../styles/Navbar.module.scss'

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
                          <a className="nav-link link mbr-black text-black display-44 dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            {section.name}
                          </a>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            {
                              section.list.map(service=><li key={service.name}><a className="dropdown-item"
                                  href={section.link+"/"+service.link}>{service.name} </a> </li>) 
                            }
                          </ul> 
                        </li> 
                      )} 

                      return ( 
                        <li key={section.name} className="nav-item text-uppercase fw-normal">
                          <a className="nav-link link mbr-black text-black display-44" aria-current="page" href={section.link}>{section.name}</a>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>

            {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav nav-dropdown js-float-line" data-app-modern-menu="true">
                <li className="nav-item">
                  <a className="nav-link link mbr-black text-black display-44" href="index.html" aria-expanded="false">
                    HOME</a>
                </li>
                <li className="nav-item dropdown"><a
                    className="nav-link link mbr-black text-black dropdown-toggle display-44" href="https://mobirise.com"
                    aria-expanded="false" data-toggle="dropdown-submenu">
                    LIVE DEMO</a>
                  <div className="dropdown-menu"><a className="mbr-black text-black dropdown-item display-44"
                      href="courses.html" aria-expanded="false">Psychological Therapy</a><a
                      className="mbr-black text-black dropdown-item display-44" href="family.html"
                      aria-expanded="false">Family Therapy</a><a className="mbr-black text-black dropdown-item display-44"
                      href="personal.html" aria-expanded="false">Personal Growth</a></div>
                </li>
                <li className="nav-item dropdown"><a
                    className="nav-link link mbr-black text-black dropdown-toggle display-44" href="https://mobirise.com"
                    aria-expanded="false" data-toggle="dropdown-submenu">
                    LIVE DEMO BLOCKS</a>
                  <div className="dropdown-menu"><a className="mbr-black text-black dropdown-item display-44"
                      href="features.html" aria-expanded="false">Headers / Features / Info</a><a
                      className="mbr-black text-black dropdown-item display-44" href="content.html"
                      aria-expanded="false">Content / Accordions / Shop
                    </a><a className="mbr-black text-black dropdown-item display-44" href="pricing.html"
                      aria-expanded="false"> Pricing / Progress /
                      Video</a><a className="mbr-black text-black dropdown-item display-44" href="team.html"
                      aria-expanded="false">Contacts / Team / Maps</a><a
                      className="mbr-black text-black dropdown-item display-44" href="clients.html" aria-expanded="false">
                      Clients / Testimonials </a><a className="mbr-black text-black dropdown-item display-44"
                      href="forms.html" aria-expanded="false"> Forms / Footers</a></div>
                </li>
              </ul>
              <div className="navbar-buttons mbr-section-btn"><a className="btn btn-sm btn-primary display-44"
                  href="https://my.mobirise.com/buy.php?p=96"> BUY NOW</a></div>
            </div> */}

          </div>
          {/* </div> */}
      </nav>
  )
}

export default Navbar