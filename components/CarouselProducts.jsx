import Slider from "react-slick";
import { useRouter} from "next/router";
import { sections } from '../data'
import { useState, useEffect } from "react";
import Link from "next/link";

const CarouselProducts = ({...pageProps}) => {

    const {title} = pageProps
    const router = useRouter()
    const {asPath} = router
    const urlTitle = asPath.split('/')[2].replace("-", " ")
    const services = sections.find(service=>service.name === 'servicios')
    const service = services.list.find(service=>service.name === urlTitle)

    const [slidesToShow, setSlidesToShow] = useState(1)
    // const quantitySlidesToShow = () => {
    //     service.products.length > 2 &&
    //   window.innerWidth >= 1200 && setSlidesToShow(3)
    //   window.innerWidth >= 992 && window.innerWidth < 1200 && setSlidesToShow(2)
    //   window.innerWidth >= 768 && window.innerWidth < 992 && setSlidesToShow(2)
    //   window.innerWidth >= 576 && window.innerWidth < 768 && setSlidesToShow(1)
    //   window.innerWidth < 576 && setSlidesToShow(1)
    // }

    const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: slidesToShow,
    // slidesToScroll: 1,
    // centerMode: true,
    autoplay: true,
    autoplaySpeed: 5000,
    // pauseOnHover: true,
    // centerPadding: "60px",
      };

    //   useEffect(() => {
    //     quantitySlidesToShow()
    //     window.addEventListener('resize', ()=>quantitySlidesToShow())
    //     return (
    //         window.removeEventListener('resize', ()=>quantitySlidesToShow())
    //     )
    // }, [])
    return (

        <section className="team2 cid-rT0gx1qoSL" id="team2-4m">
            <div className="container">
                <h3 className="mbr-section-title mbr-bold mbr-white pb-2 mbr-fonts-style display-22 text-center" style={{color: "var(--bs-secondary)"}}>
                    {title ? title : 'Cursos y Sesiones'}
                </h3>
                <div className="row justify-content-center text-center">
                    <Slider {...settings}>
                        {
                            service.products.map((product, key)=>{
                                return (
                                        <div key={key} className="p-3 col-12 col-md-6 col-lg-4">
                                            <Link href={asPath+"/"+product.link}>
                                                <a className="card card-wrapper d-inline-block col-12 col-md-6 col-lg-4">
                                                    <div className="img-wrapper">
                                                        <picture>
                                                            <img src={product.img} alt="icon service" />
                                                        </picture>
                                                        <div className="text-wrap">
                                                            <p className="mbr-text pb-2 mbr-regualr mbr-fonts-style display-77 text-start">
                                                            {product.subtitle}
                                                            </p>
                        
                                                            {/* <div className="link-align">
                                                                <div className="link-wrap">
                                                                    <h6 className="link mbr-regular mbr-black mbr-fonts-style display-44">VER MÁS</h6>
                                                                </div>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                    <div className="card-box align-left">
                                                        <h4 className="card-title align-left mbr-regular mbr-black mbr-fonts-style display-55 mb-3">
                                                            {product.title}
                                                        </h4>
                                                        <h3 className="mbr-section-subtitle pb-2 mbr-regular mbr-fonts-style display-44 text-uppercase">
                                                        {product.type}</h3>
                                                    </div>
                                                </a>
                                            </Link>
                                        </div> 
                                )
                            })
                        }
                    </Slider>
                    </div>
            </div>
        </section>
    )
}

export default CarouselProducts