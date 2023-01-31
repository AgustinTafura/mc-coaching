
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser, faUserGraduate, faUserTie, faRocket, faLightbulb} from '@fortawesome/free-solid-svg-icons'
import LayoutServices from "../../../components/LayoutServices";
import Link from "next/link";
import CarouselProducts from "../../../components/CarouselProducts";
import BubbleScrollTo from "../../../components/BubbleScrollTo";

const CoachingVocacional = (props) => {
    const [collapsed, setCollapsed] = useState(true)

    return (
        <LayoutServices >

            <CarouselProducts products={props.services}/>

            <section className="features3 cid-rSVQ0cgT0R pt-5" id="features3-25">
                <div className="row gx-0 justify-content-center pt-5">
                    <div className="item card1 p-3 col-12 col-md-7 col-lg-4">
                        <div className="card-wrapper">
                            <span className="mbr-iconfont mobi-mbri-user mobi-mbri" style={{backgroundColor: '#8e678c'}}>
                                <FontAwesomeIcon icon={faUser} size="1x" color='white'/>
                            </span>
                            <div className="card-box">
                                <h4 className="card-title mbr-semibold pb-3 mbr-black mbr-fonts-style display-55" style={{color: '#8e678c'}}>Adolescentes</h4>
                                <ul>
                                    <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77 text-justify">
                                    Los acompañamos a elegir una carrera profesional o un oficio, enfocándose en sus intereses, y desarrollando su motivación, sus fortalezas y sus competencias
                                    </p>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="item card2 p-3 col-12 col-md-7 col-lg-4">
                        <div className="card-wrapper">
                            <span className="mbr-iconfont mobi-mbri-sad-face mobi-mbri" style={{backgroundColor: '#8e678c'}}>
                                <FontAwesomeIcon icon={faUserGraduate} size="1x" color='white'/>
                            </span>
                            <div className="card-box">
                                <h4 className="card-title mbr-semibold pb-3 mbr-black mbr-fonts-style display-55" style={{color: '#8e678c'}}>Jóvenes Universitarios</h4>
                                    <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77 text-justify">
                                        Los ayudamos cuando por algún bloqueo en particular, no están pudiendo rendir  sus exámenes y alcanzar su título.
                                        <br/>
                                        A insertarse en el mundo laboral y profesional brindándoles las herramientas para el desarrollo de sus habilidades blandas, tan requeridas por las empresas en la actualidad.
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="item card3 p-3 col-12 col-md-7 col-lg-4">
                        <div className="card-wrapper">
                            <span className="mbr-iconfont mobi-mbri-sad-face mobi-mbri" style={{backgroundColor: '#8e678c'}}>
                                <FontAwesomeIcon icon={faUserTie} size="1x" color='white'/>
                            </span>
                            <div className="card-box">
                                <h4 className="card-title mbr-semibold pb-3 mbr-black mbr-fonts-style display-55" style={{color: '#8e678c'}}>Adultos</h4>
                                    <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77 text-justify">
                                    Los acompoañamos a reinventarse laboralmente, redefinir su actividad profesional, y enfocarse según sus nuevos intereses.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content4 cid-rT0gf02Oxu" id="content4-46" style={{background: "#9e9e9e0f"}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="mbr-black col-md-12 col-lg-12" style={{alignSelf: 'center'}}>
                            <div className="content align-center mbr-white">
                                <q className="mbr-text quote pb-5 mbr-regular mbr-fonts-style display-55 display-5 d-inline-block" style={{color: 'var(--bs-secondary)'}}>
                                    La vocación es dinámica y puede cambiar a lo largo de la vida de las personas.
                                </q>
                            </div>
                        </div>
                        <div className="mbr-black col-md-12 col-lg-4">
                            <div className="content align-left mbr-white">
                                <p className="mbr-text pb-3 mbr-regular mbr-fonts-style display-77 text-justify">
                                Por eso, más allá de ayudarte a encontrar la propuesta académica que mejor encaje con tus gustos, ponemos el foco en ayudarte a autoconocerte, pues la vocación es un largo camino que vas a transitar durante toda tu vida, no termina con la elección de una carrera ni con tu título universitario.
                                </p>
                            </div>
                        </div>
                        <div className="mbr-black col-md-12 col-lg-4">
                            <div className="content align-left mbr-white">
                                <p className="mbr-text pb-3 mbr-regular mbr-fonts-style display-77 text-justify">
                                Nuestro objetivo es darte las herramientas para descubrir tus talentos naturales y tus gustos, qué te motiva, para comenzar con tu proceso de búsqueda.
                                </p>
                                <p className="mbr-text pb-3 mbr-regular mbr-fonts-style display-77 text-justify">
                                La metodología del  Coaching Vocacional  ofrece herramientas prácticas para la acción , pues la vocación no se adquiere pensando mucho o confeccionando tests vocacionales. 
                                </p>
                            </div>
                        </div>
                        <div className="mbr-black col-md-12 col-lg-4">
                            <div className="content align-left mbr-white">
                                <p className="mbr-text pb-3 mbr-regular mbr-fonts-style display-77 text-justify">
                                Creemos que la clave es en primer lugar, el autoconocimiento y desde ese lugar, descubrir tus gustos, tus talentos naturales y conectar con ellos a través del compromiso y la dedicación.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="features10 cid-rT0fwfKIRg py-5" id="features10-3w">
                <div className="container py-5">
                    <div className="row">
                        <div className="mbr-black col-md-12 col-lg-4" style={{position:"relative"}}>
                            <picture>
                                <img src="/img/services/coaching-vocacional/2.jpg" alt="coaching vocacional" />
                            </picture>
                        </div>
                        <div className="mbr-white  col-md-12 col-lg-4">
                            <div className="items-col" style={{backgroundColor: '#8e678c'}}>
                                {/* <h4 className="mbr-section-subtitle mbr-regular align-left mbr-fonts-style display-44">MÉTODO</h4> */}
                                <h3 className="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-22">Nuestra Propuesta</h3>
                                <div className="link-wrap">
                                    <h5 className="link mbr-black mbr-fonts-style display-77 pe-lg-0 align-self-center align-self-lg-start">Desarrollo de la inteligencia emocional</h5>
                                    <h5 className="link mbr-black mbr-fonts-style display-77 pe-lg-0 align-self-center align-self-lg-start">Autoconocimiento</h5>
                                    <h5 className="link mbr-black mbr-fonts-style display-77 pe-lg-0 align-self-center align-self-lg-start">Intereses</h5>
                                    <h5 className="link mbr-black mbr-fonts-style display-77 pe-lg-0 align-self-center align-self-lg-start">Fortalezas y Competencias</h5>
                                    <h5 className="link mbr-black mbr-fonts-style display-77 pe-lg-0 align-self-center align-self-lg-start">Motivación y proceso creativo</h5>
                                    <h5 className="link mbr-black mbr-fonts-style display-77 pe-lg-0 align-self-center align-self-lg-start">Propósito de vida</h5>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <picture>
                                <img src="http://localhost:3000/img/services/coaching-vocacional/0.jpg" alt="coaching vocacional"/>
                            </picture>
                        </div>
                    </div>
                </div>

                <div id='buttonMostrarMas' className=" d-flex justify-content-center" style={{paddingTop: '100px'}}>
                    <Link href="#saberMasVocacional">
                        <a data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="saberMasVocacional"
                        className="btn btn-md btn-primary display-44" onClick={()=>setCollapsed(!collapsed)}>{collapsed?'QUIERO SABER MÁS': 'OCULTAR'} </a>
                    </Link>
                </div>

                {
                    !collapsed && <BubbleScrollTo itemId={'buttonMostrarMas'}/>
                }

                <div id='saberMasVocacional' className="features2 cid-rT0fsFPh8T collapse">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="row justify-content-center">
                                    <div className="card p-3 col-12 col-md-6 col-lg-6">
                                        <div className="card-wrapper">
                                            <div className="icon-wrapper">
                                                <FontAwesomeIcon icon={faRocket} size="1x" color='white'/>
                                            </div>
                                            <div className="card-box">
                                                <h5 className="card-title mbr-regular pb-1 mbr-black mbr-fonts-style display-5">
                                                    Misión</h5>
                                                <p className="card-text mbr-regular mbr-black mbr-fonts-style display-7">Que cada persona encuentre o redescubra su pasión en la vida.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card p-3 col-12 col-md-6 col-lg-6">
                                        <div className="card-wrapper">
                                            <div className="icon-wrapper">
                                            <FontAwesomeIcon icon={faLightbulb} size="1x" color='white'/>
                                            </div>
                                            <div className="card-box">
                                                <h5 className="card-title mbr-regular pb-1 mbr-black mbr-fonts-style display-5">
                                                    Visión</h5>
                                                <p className="card-text mbr-regular mbr-black mbr-fonts-style display-7">Ayudarte a descubrirla.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8 py-5">
                                <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77 text-center text-justify">
                                Hoy sabemos que el desarrollo de la inteligencia analítico- racional que se adquiere en la escuela, no es suficiente para una transición exitosa de la secundaria a la universidad.
                                <br/><br/>
                                Por otro lado, la vocación es un proceso, y se va construyendo a lo largo de la vida de las personas desde dentro hacia afuera. Por eso es tan importante alcanzar el autoconocimiento.
                                <br/><br/>
                                Construimos nuestra vocación en base a nuestros deseos. Ellos son la clave para enfocarnos en desarrollar habilidades para materializar una actividad que nos conecte con nuestros verdaderos intereses.
                                <br/><br/>
                                Así, el desarrollo de las competencias emocionales, personales y sociales es fundamental para fortalecer a los jóvenes en el área del autoconocimiento personal y evitar situaciones futuras que puedan obstaculizar sus estudios universitarios.
                                <br/><br/>
                                La pandemia aceleró los procesos de transformación, y las empresas buscan perfiles integrales que posean competencias técnicas vinculadas a su área de especialización ( habilidades duras ), y habilidades blandas que les permitan adaptarse de la mejor manera a un entorno cambiante y vincularse mejor con sus superiores,  pares y/o equipos a cargo.
                                </p>
                            </div>

                            <div style={{ background: '#9e9e9e0f'}} className="cid-rT0gGgEsRd mt-5" id="clients2-4s">
                                <div className="container images-container">
                                    <div className="row justify-content-center">
                                        <div className="col-md-12 col-lg-8">
                                            <h4 style={{color: 'var(--bs-secondary)'}} className="mbr-section-subtitle mbr-regular align-center mbr-fonts-style display-44">¿QUÉ SON?</h4>
                                            <h3 className="pt-3 br-title align-left align-center mbr-semibold pb-3 mbr-fonts-style display-22" style={{color: 'var(--bs-secondary)'}}>HABILIDADES BLANDAS</h3>
                                            <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77 text-center text-justify">
                                                Comprenden las habilidades socioemocionales, de comunicación, lenguaje y hábitos que moldean y favorecen los vínculos que establecemos con otras personas. En el ámbito laboral , se refieren a la capacidad para interactuar de manera eficaz y efectiva con jefes, colegas , pares y clientes.
                                                <br/><br/>
                                                Entre las habilidades blandas más buscadas por los empleadores, se destacan:
                                                Inteligencia emocional
                                                Capacidad de autoliderazgo y liderazgo
                                                Trabajo en Equipo
                                                Comunicación asertiva
                                                <br/><br/>
                                                Por ello las empresas y las organizaciones buscan personas capaces de gestionar los problemas haciendo foco en los resultados y generando alternativas que le permitan alcanzar y mantener un equilibrio en su vida personal y profesional.
                                                Hoy, las organizaciones ponen el foco en 
                                                sus propios miembros, 
                                                en las personas
                                                la cultura de la organización
                                                el conocimiento y el aprendizaje
                                                la fórmula ser-hacer- tener
                                                <br/><br/>
                                                Por último, el Coaching Vocacional  acompaña a las personas a reconocer su estado actual y alcanzar ese estado al que desean llegar. Si estás interesado o interesada en saber más acerca de un proceso de Coaching Vocacional que te ayude a decidir tu futuro , no dudes en contactarte por <b><a style={{textDecoration: 'none', color:'unset'}} href="https://api.whatsapp.com/send?phone=5492244408516&amp;text=Hola+Marcela%21%0A%0AMe+gustaría+recibir+información+sobre+tus+servicios.%0A%0AMuchas+gracias+🤗&amp;type=phone_number&amp;app_absent=0">whatsapp</a></b> o por <b><a style={{textDecoration: 'none', color:'unset'}} href="mailto: info@marcelacaputo.com.ar">mail</a></b> .
                                            </p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </LayoutServices>
    )
}

export default CoachingVocacional