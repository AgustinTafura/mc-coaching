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
                            Integral
                        </h1>
                        <p className="mbr-text pb-4 mbr-white mbr-regular mbr-fonts-style display-77">
                            Somos una organización independiente especializada en el desarrollo personal e integral del Ser Humano.
                            <br />
                            {/* Ofrecemos servicios de Coaching de Vida ( Life Coaching ), Coaching Vocacional, Coaching Educativo, 
                            Coaching y Liderazgo efectivo. */}
                            Nos centramos en <strong>Educación Neuroemocional</strong>  como área transversal 
                            para aprender a gestionar y regular emociones, potenciar la comunicación 
                            y mejorar los vínculos intra e interpersonales en todos los ámbitos de desempeño de las personas.
                        </p>
                        <div className="mbr-section-btn">
                            <a className="btn btn-md btn-white display-44" href="index.html#features6-1k">SABER MAS</a>
                            <a className="btn btn-md btn-primary display-44" href="https://my.mobirise.com/buy.php?p=96">AGENDAR CITA</a>
                        </div>
                    </div>
                </div>
            </div>
        </ParallaxBanner>
    )
}

export default HomeParallax