import Link from 'next/link';
import { ParallaxBanner } from 'react-scroll-parallax';


const HomeParallax = () => {

    return (
        <ParallaxBanner 
            layers={[{ image: '/img/h1.png', speed: -25, expanded: false, aspectratio: '2 / 1' }]}
            className="aspect-[2/1] cid-rSVurVzkop " id="header1-1i" data-sortbtn="btn-primary"
        >
            <div className="mbr-overlay" style={{backgroundColor: "rgb(0, 0, 0)", opacity: "0.6"}}></div>
            <div className="container align-center">
                <div className="row justify-content-center">
                    <div className="mbr-black col-md-12 col-lg-8">
                        <h1 className="mbr-section-title mbr-bold mbr-white pb-2 mbr-fonts-style display-11">
                            Coaching
                            y Educación Integral
                        </h1>
                        <p className="mbr-text pb-4 mbr-white mbr-regular mbr-fonts-style display-77">
                            Somos una organización independiente especializada en el desarrollo personal e integral del Ser Humano.
                            <br />
                            Nos centramos en  la importancia de la <strong>Educación Emocional</strong>  como área transversal 
                            para aprender a regular emociones, potenciar la comunicación 
                            y mejorar los vínculos intra e interpersonales en todos los ámbitos de desempeño de las personas.
                        </p>
                        <div className="mbr-section-btn">
                            <Link className="btn btn-md btn-white display-44" href="/">
                                <a>SABER MAS</a>
                            </Link>
                            <Link className="btn btn-md btn-primary display-44" href="/">
                                <a>AGENDAR CITA</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </ParallaxBanner>
    )
}

export default HomeParallax