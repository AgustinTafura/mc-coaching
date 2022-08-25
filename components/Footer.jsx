import Image from "next/image"
import Link from "next/link"


const Footer = () => {


  return (
  <footer className="footer2 cid-rT5TRS4qUz" id="footer2-5l">
    <div className="container">
      <div className="row">

        <div className="col-md-6 col-lg-3">
          <div className="pb-4">
            <h3 className="title pb-2 align-left mbr-bold mbr-fonts-style display-55">
              <Link href="/">
                <a className="navbar-brand ">
                  <Image src="/logo_w.png" alt="logo - Marcela Caputo - Coaching y Educación neuroemocional" width={65} height={50} />
                </a>
              </Link>
              <Image src="/firma_w.png" alt="logo - Marcela Caputo - Coaching y Educación neuroemocional" width={196} height={52} />
              
              </h3>
            <p className="mbr-text align-left  mbr-white mbr-regular mbr-fonts-style display-44">
              Coaching y Educación Neuroemocional
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <h2 className="title mbr-bold pb-2 mbr-fonts-style display-55">
            Servicios</h2>
          <div className="align-wrap">
            <div className="item-wrap">
              <div className="icons-wrap pb-2">
                <a className="icon-title mbr-regular mbr-fonts-style display-44" href="/servicios/life-Coaching">Life Coaching</a>
              </div>
            </div>
            <div className="item-wrap">
              <div className="icons-wrap pb-2">
                <a className="icon-title mbr-regular mbr-fonts-style display-44" href="/servicios/coaching-vocacional">Coaching Vocacional
                </a>
              </div>
            </div>
            <div className="item-wrap">
              <div className="icons-wrap pb-2">
                <a className="icon-title mbr-regular mbr-fonts-style display-44" href="/servicios/coaching-educativo">Coaching Educativo</a>
              </div>
            </div>
            <div className="item-wrap">
              <div className="icons-wrap pb-2">
                <a className="icon-title mbr-regular mbr-fonts-style display-44" href="/servicios/liderazgo-efectivo">Liderazgo Efectivo
                </a>
              </div>
            </div>
            <div className="item-wrap">
              <div className="icons-wrap pb-2">
                <a className="icon-title mbr-regular mbr-fonts-style display-44" href="/servicios/educación-neuroemocional">Educación neuroemocional</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <h2 className="title mbr-bold pb-2 mbr-fonts-style display-55">
            Conoceme
          </h2>
          <div className="align-wrap">
            <div className="item-wrap">
              <div className="icons-wrap pb-2">
                <a className="icon-title mbr-regular mbr-fonts-style display-44">
                  Más sobre mi</a>
              </div>
            </div>
            <div className="item-wrap">
              <div className="icons-wrap pb-2">
                <a className="icon-title mbr-regular mbr-fonts-style display-44">
                Marca Personal</a>
              </div>
            </div>
            <div className="item-wrap">
              <div className="icons-wrap pb-2">
                <a className="icon-title mbr-regular mbr-fonts-style display-44">
                Agendar una cita</a>
              </div>
            </div>
            <div className="item-wrap">
              <div className="icons-wrap pb-2">
                <a className="icon-title mbr-regular mbr-fonts-style display-44">
                Contáctame</a>
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
            <a href="https://www.facebook.com/neuroeducacionycoaching"><span className="mbr-iconfont socicon-facebook socicon"></span></a>
            <a href="https://www.instagram.com/neuroeducacion_y_coaching/"><span className="mbr-iconfont socicon-instagram socicon"></span></a>
            <a href="https://www.youtube.com/channel/UC_KxRomgrGaNlccWnPnPS1w"><span className="mbr-iconfont socicon-youtube socicon"></span></a>
            <a href="https://www.linkedin.com/in/marcela-caputo-03aa40122/"><span className="mbr-iconfont socicon-linkedin socicon"></span></a>
          </div>
        </div>
      </div>
      <div className="text-center my-auto text-white pt-3 pt-lg-5">
        <span style={{fontSize: "0.7rem"}}>Copyright© 2022 Marcela Caputo - Powered by <a> </a></span>
      </div>
    </div>
  </footer>
  )
}

export default Footer
