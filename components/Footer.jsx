import Image from "next/image"
import Link from "next/link"
import { sections } from '../data'


const Footer = () => {
  const services = sections.find(section=>section.name=== 'servicios')
  const conoceme = sections.find(section=>section.name=== 'conoceme')
  const agendar = sections.find(section=>section.name=== 'agendar cita')
  const contacto = sections.find(section=>section.name=== 'contacto')
  return (
  <footer className="footer2 cid-rT5TRS4qUz" id="footer2-5l">
    <div className="container">
      <div className="row">

        <div className="col-md-6 col-lg-3">
          <div className="pb-4">
            <h3 className="title pb-2 align-left mbr-bold mbr-fonts-style display-55">
              {/* <Link href="/">
                <a className="navbar-brand ">
                </a>
              </Link> */}
                  {/* <Image src="/logo_w.png" alt="logo - Marcela Caputo - Coaching y Educación neuroemocional" width={65} height={50} />
                  <Image src="/firma_w.png" alt="logo - Marcela Caputo - Coaching y Educación neuroemocional" width={196} height={52} /> */}
                  <Image src="/logoC_w.png" alt="logo - Marcela Caputo - Coaching y Educación neuroemocional" width={218} height={52} />
              
              </h3>
            <p className="mbr-text align-left  mbr-white mbr-regular mbr-fonts-style display-44">
              Coaching y Educación Integral
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <h2 className="title mbr-bold pb-2 mbr-fonts-style display-55">
            Servicios</h2>
          <div className="align-wrap">
            {
              services.list.map(service=>{
                return (
                  <div key={service.name} className="item-wrap">
                    <div className="icons-wrap pb-2">
                      <Link href={`${services.link}/${service.link}`}>
                        <a className="icon-title mbr-regular mbr-fonts-style display-44 text-capitalize">{service.name}</a>
                      </Link>
                    </div>
                  </div>                
                )
              })
            }
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <h2 className="title mbr-bold pb-2 mbr-fonts-style display-55">
            Conoceme
          </h2>
          <div className="align-wrap">
            <div className="item-wrap">
              <div className="icons-wrap pb-2">
                <Link href={conoceme.link}>
                  <a className="icon-title mbr-regular mbr-fonts-style display-44">
                    Más sobre mi</a>
                </Link>
              </div>
            </div>
            {/* <div className="item-wrap">
              <div className="icons-wrap pb-2">
                <a className="icon-title mbr-regular mbr-fonts-style display-44">
                Marca Personal</a>
              </div>
            </div> */}
            <div className="item-wrap">
              <div className="icons-wrap pb-2">
                  <Link href={agendar.link}>
                    <a className="icon-title mbr-regular mbr-fonts-style display-44">
                    Agendar una cita</a>
                  </Link>
              </div>
            </div>
            <div className="item-wrap">
              <div className="icons-wrap pb-2">
                <Link href={contacto.link}>
                  <a className="icon-title mbr-regular mbr-fonts-style display-44">
                  Contáctame</a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <h2 className="title mbr-bold pb-2 mbr-fonts-style display-55">
            Redes</h2>
            <div className="align-wrap pb-3">
              Encuentranos en las siguientes plataformas
            </div>
            <div className="socicon-wrap">
            <Link href="https://www.facebook.com/neuroeducacionycoaching">
              <a><span className="mbr-iconfont socicon-facebook socicon"></span></a>
            </Link>
            <Link href="https://www.instagram.com/marcelacaputo_lidercoach/">
              <a><span className="mbr-iconfont socicon-instagram socicon"></span></a>
            </Link>
            <Link href="https://www.youtube.com/channel/UC_KxRomgrGaNlccWnPnPS1w">
              <a><span className="mbr-iconfont socicon-youtube socicon"></span></a>
            </Link>
            <Link href="https://www.linkedin.com/in/marcela-caputo-03aa40122/">
              <a><span className="mbr-iconfont socicon-linkedin socicon"></span></a>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center my-auto text-white pt-3 pt-lg-5">
        <span style={{fontSize: "0.7rem"}}>Copyright© 2022 Marcela Caputo</span>
      </div>
    </div>
  </footer>
  )
}

export default Footer
