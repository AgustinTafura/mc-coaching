
import { useState } from "react";
import LayoutServices from "../../../components/LayoutServices";
import CarouselProducts from "../../../components/CarouselProducts";

const CoachingPersonal = (props) => {
    const [collapsed, setCollapsed] = useState(true)

    return (
        <LayoutServices >

            <CarouselProducts title={'Cursos'} products={props.services}/>
            <div className="features2 cid-rT0geqYDWl cid-rT0fsFPh8T">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="pb-5">
                                <h4 className="mbr-section-subtitle mbr-regular mbr-fonts-style display-44" style={{color: 'var(--bs-secondary)'}}>
                                    SERVICIO
                                </h4>
                                <h3 className="mbr-section-title mbr-bold mbr-white pb-2 mbr-fonts-style display-22" style={{color: 'var(--bs-secondary)'}}>
                                    Autoliderarse para emprender
                                </h3>
                                <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77 text-center text-justify">
                                Si ya eres un emprendedor o emprendedora o si te encuentras dando los primeros pasos en un emprendimiento personal,
                                es necesario que tengas en cuenta que la capacidad de autoliderarse es una competencia fundamental para la buena comunicación con los clientes  y proveedores que influirán en las ventas de los productos o servicios que&nbsp;ofreces.
                                <br/><br/> 
                                El Coaching para hombres y mujeres emprendedoras, consiste en adquirir herramientas estratégicas para vender&nbsp;online.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="features10 cid-rT0fwfKIRg pb-5 pt-0" id="features10-3w">
                <div className="container pb-5 pt-0">
                    <div className="row">
                        <div className="mbr-black col-md-12 col-lg-4" style={{position:"relative"}}>
                            <picture>
                                <img src="/img/services/coaching-emprendedores/1.jpg" alt="coaching emprendedores" />
                            </picture>
                        </div>
                        <div className="mbr-white  col-md-12 col-lg-4">
                            <div className="items-col" style={{backgroundColor: '#8e678c'}}>
                                <h4 className="mbr-section-subtitle mbr-regular align-left mbr-fonts-style display-44  text-center">MODALIDAD</h4>
                                <h3 className="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-22 text-center">¿A quién está dirigida?</h3>
                                <div className="link-wrap">
                                    <h5 className="link mbr-black mbr-fonts-style display-77 pe-lg-0 align-self-center align-self-lg-start">Emprendedores y emprendedoras</h5>
                                    <h5 className="link mbr-black mbr-fonts-style display-77 pe-lg-0 align-self-center align-self-lg-start">Equipos de venta de pequeñas y medianas organizaciones. (pymes)</h5>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <picture>
                                <img src="/img/services/coaching-emprendedores/0.jpg" alt="coaching emprendedores"/>
                            </picture>
                        </div>
                    </div>
                </div>
            </section>
            <div className="features2 cid-rT0geqYDWl cid-rT0fsFPh8T">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="pb-5">
                                <h4 className="mbr-section-subtitle mbr-regular mbr-fonts-style display-44" style={{color: 'var(--bs-secondary)'}}>
                                    COACHING
                                </h4>
                                <h3 className="mbr-section-title mbr-bold mbr-white pb-2 mbr-fonts-style display-22" style={{color: 'var(--bs-secondary)'}}>
                                    EMPRENDER
                                </h3>
                                <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77 text-center text-justify">
                                En la actualidad, las ventas de productos y servicios online, ponen la mirada en un público objetivo global. Vender ya no alcanza con la aplicación de una técnica, sino que es necesario conocer los procesos de decisión de compra de los&nbsp;clientes. 
                                <br/><br/>
                                El Coaching para hombres y mujeres emprendedoras facilita tu camino al éxito en las ventas a través de herramientas concretas y un proyecto estratégico que te permitirá alcanzar los objetivos, y te ayudará a vender más y&nbsp;mejor.
                                <br/><br/>
                                Trabajar por cuenta propia, ser nuestro propio jefe,  depender de nosotros mismos,  adquirir una cultura emprendedora, requiere del desarrollo de capacidades como la creatividad, la toma de decisiones y la gestión efectiva del tiempo.Si ya has dado una vuelta por cada una de las páginas, podrás darte cuenta, que si bien hemos dividido el sitio por áreas,  cada uno de ellos se encuentran estrechamente relacionados uno con el&nbsp;otro.
                                <br/><br/>
                                Por ello, en los cursos te llevarás herramientas de neuroventas, es decir, cómo influye la inteligencia emocional en los procesos de decisión de compra, para que a través de un plan estratégico, tus ventas aumenten&nbsp;sostenidamente. 
                                <br/><br/>
                                Vuelvo a recordarte por acá, que el Coaching se centra en acompañar a las personas a poner conciencia a su estado actual, identificar los bloqueos o puntos débiles  que le están impidiendo alcanzar sus metas, y llevarlos a un estado deseado, un futuro donde puedan concretar sus objetivos y sus&nbsp;sueños.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </LayoutServices>
    )
}

export default CoachingPersonal