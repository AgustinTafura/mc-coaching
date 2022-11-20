import Link from 'next/link';
import { ParallaxBanner } from 'react-scroll-parallax';


const HomeParallax = () => {

    return (
        <ParallaxBanner 
            layers={[{ image: '/img/h1.png', speed: -25, expanded: false, aspectratio: '2 / 1' }]}
            className="aspect-[2/1] cid-rSVurVzkop mb-5" id="header1-1i" data-sortbtn="btn-primary"
        >
            <div className="mbr-overlay" style={{backgroundColor: "rgb(0, 0, 0)", opacity: "0.6"}}></div>
            <div className="container align-center">
                <div className="row justify-content-center">
                    <div className="mbr-black col-md-12 col-lg-8">
                        <h1 className="mbr-section-title mbr-bold mbr-white mbr-fonts-style display-11">
                            Coaching y Educación Integral
                        </h1>
                        <h3 className="mbr-section-title mbr-bold mbr-white pb-4 mbr-fonts-style display-11" style={{fontSize: '1.8rem'}}>
                            para el desarrollo personal y&nbsp;profesional
                        </h3>
                        <p className="pb-4 mbr-white mbr-regular mbr-fonts-style display-77">
                            Somos una organización independiente especializada en potenciar el crecimiento Integral del Ser Humano. Nos centramos 
                            en el desarrollo de  las <b>Habilidades Blandas</b>, la  <b>Inteligencia Emocional</b> y la <b>Comunicación Efectiva</b> como áreas transversales 
                            para aprender nuevos hábitos, regular emociones y  mejorar los vínculos interpersonales en todos los ámbitos de desempeño de 
                            las&nbsp;personas.
                        </p>
                    </div>
                </div>
            </div>
        </ParallaxBanner>
    )
}

export default HomeParallax