import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

// import style from '../styles/Navbar.module.scss'

const Navbar = () => {

  const sections = [
    {
      name:'home',
      link: '/',
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
          link: 'life-vocacional'
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
      name:'agenda',
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
<nav className="navbar nav navbar-expand-lg navbar-light bg-white shadow-sm p-0 mb-5 bg-body fixed-top">
  <div className="container d-flex justify-content-between">
      <Link href="/">
        <a className="navbar-brand ">
          <Image src="/logo.png" alt="logo - Marcela Caputo - Coaching y Educación neuroemocional" width={261} height={69} />
        </a>
      </Link>
    
      <button className="navbar-toggler collapsed" type="button"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>

    {/* <button className="navbar-toggler" type="button"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}

    <div className="offcanvas offcanvas-end" tab-index="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
        <div className="navbar-brand">
          <Image src="/logo.png" alt="logo Marcela Caputo" width={231} height={69}/>
        </div>
        <button className="navbar-toggler btn-close text-reset" type="button"  data-bs-dismiss="offcanvas" aria-label="Close">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>
        {/* <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
      </div>
      <div className="offcanvas-body justify-content-lg-end">
      <ul className="navbar-nav justify-content-end">
        {
          sections.map(section=>{
            if (section.list.length) {
              return (
                <li key={section.name} className="nav-item text-uppercase fw-normal dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {section.name}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  {
                    section.list.map(service=><li key={service.name}><a className="dropdown-item" href={section.link+"/"+service.link}>{service.name}</a></li>)
                  }
                </ul>
              </li>
              )
            }
            return (
              <li key={section.name} className="nav-item text-uppercase fw-normal" >
                <a className="nav-link" aria-current="page" href={section.link} >{section.name}</a>
              </li> 
            )
          })
        }
      </ul>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar