
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBuildingColumns, faPeopleGroup, faSitemap} from '@fortawesome/free-solid-svg-icons'
import LayoutServices from "../../../components/LayoutServices";
import Link from "next/link";
import BubbleScrollTo from "../../../components/BubbleScrollTo";

const CoachingEducativo = (props) => {
    const [collapsed, setCollapsed] = useState(true)

    return (
        <LayoutServices >
            <div className="features2 cid-rT0geqYDWl cid-rT0fsFPh8T">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="pb-5">
                                <h4 className="mbr-section-subtitle mbr-regular mbr-fonts-style display-44" style={{color: 'var(--bs-secondary)'}}>
                                    SERVICIO
                                </h4>
                                <h3 className="mbr-section-title mbr-bold mbr-white pb-2 mbr-fonts-style display-22" style={{color: 'var(--bs-secondary)'}}>
                                    Liderazgo y el&nbsp;Coaching
                                </h3>
                                <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77 text-center text-justify">
                                    El <b>liderazgo</b> y el <b>Coaching</b> están íntimamente&nbsp;relacionados.
                                    <br/><br/>
                                    El <b>Coaching</b> es una disciplina que se enfoca en acompañar a las personas en sus procesos de desaprender, aprender, desafiar creencias y alcanzar&nbsp;metas.
                                    <br/><br/>
                                    Un <b>Líder-Coach</b> se centra en ayudar a las personas a desarrollar al máximo todo su potencial y a alcanzar la mejor versión de sí mismo. Además, dirige, estructura y facilita procesos y actividades dentro de un grupo u organización para la consecución de los objetivos de la&nbsp;misma.
                                    <br/><br/>
                                    Dentro de los roles que debe cumplir un líder, se encuentra la motivación de personas y equipos de&nbsp;trabajo.
                                    <br/><br/>
                                    La motivación es un proceso psicológico de carácter multidimensional, y el liderazgo es una herramienta necesaria para dar respuestas a los conflictos, mejorar la comunicación, la autogestión y motivar a los demás para alcanzar los objetivos de una institución, organización o&nbsp;empresa.
                                </p>
                            </div>
                        </div>
                        <section className="features3 cid-rSVQ0cgT0R pt-5" id="features3-251">
                                <h4 className="mbr-section-subtitle mbr-regular mbr-fonts-style display-44 text-center" style={{color: 'var(--bs-secondary)'}}>
                                    CONOCÉ
                                </h4>
                                <h3 className="mbr-section-title mbr-bold mbr-white pb-2 mbr-fonts-style display-22 text-center" style={{color: 'var(--bs-secondary)'}}>
                                    MI PROPUESTA
                                </h3>
                                <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77 text-center">
                                    En base a mi experiencia durante más de 25 años desempeñándome como  <br/>docente
                                    y posteriormente como líder de un equipo directivo escolar durante 15&nbsp;años.
                                </p>
                                <div className="row gx-0 justify-content-center pt-5">
                                    <div className="item card1 p-3 col-12 col-md-7 col-lg-4">
                                        <div className="">
                                            <span className="mbr-iconfont mobi-mbri-user mobi-mbri" style={{backgroundColor: '#8e678c'}}>
                                                <FontAwesomeIcon icon={faBuildingColumns} size="1x" color='white'/>
                                            </span>
                                            <div className="card-box">
                                                <h4 className="card-title mbr-semibold pb-3 mbr-black mbr-fonts-style display-55" style={{color: '#8e678c'}}>Organizaciones</h4>
                                                <ul>
                                                    <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77 text-justify">
                                                        Nos especializamos en Instituciones educativas y pequeñas organizaciones, impulsando la mejora de las relaciones humanas y ayudamos a trabajar los desafíos colectivos, los procesos de transformación cultural, la definición de la misión, visión y valores y el desarrollo de una planificación&nbsp;estratégica.
                                                    </p>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item card2 p-3 col-12 col-md-7 col-lg-4">
                                        <div className="">
                                            <span className="mbr-iconfont mobi-mbri-sad-face mobi-mbri" style={{backgroundColor: '#8e678c'}}>
                                                <FontAwesomeIcon icon={faSitemap} size="1x" color='white'/>
                                            </span>
                                            <div className="card-box">
                                                <h4 className="card-title mbr-semibold pb-3 mbr-black mbr-fonts-style display-55" style={{color: '#8e678c'}}>Líderes</h4>
                                                    <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77 text-justify">
                                                        Acompañamos a líderes de instituciones y organizaciones públicas y privadas a realizar procesos de transformación hacia un liderazgo efectivo, potenciando sus talentos para el logro de objetivos personales y&nbsp;organizacionales.
                                                    </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item card3 p-3 col-12 col-md-7 col-lg-4">
                                        <div className="">
                                            <span className="mbr-iconfont mobi-mbri-sad-face mobi-mbri" style={{backgroundColor: '#8e678c'}}>
                                                <FontAwesomeIcon icon={faPeopleGroup} size="1x" color='white'/>
                                            </span>
                                            <div className="card-box">
                                                <h4 className="card-title mbr-semibold pb-3 mbr-black mbr-fonts-style display-55" style={{color: '#8e678c'}}>Equipos</h4>
                                                    <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77 text-justify">
                                                        Guiamos procesos de consolidación y fortalecimiento de equipos de trabajo para mejorar el clima laboral y enfrentar los desafíos que se&nbsp;presentan.
                                                    </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </section>

                    </div>
                </div>
                <div  id='buttonMostrarMas' className="d-flex justify-content-center" >
                    <Link href="#saberMasLiderazgoEfectivo">
                        <a data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="saberMasLiderazgoEfectivo"
                        className="btn btn-md btn-primary display-44" onClick={()=>setCollapsed(!collapsed)}>{collapsed?'QUIERO SABER MÁS': 'OCULTAR'} </a>
                    </Link>
                </div>

                {
                    !collapsed && <BubbleScrollTo itemId={'buttonMostrarMas'}/>
                }
            </div>
            <div id='saberMasLiderazgoEfectivo' className="features2 cid-rT0fsFPh8T collapse pb-0">
                <section className="cid-rSVRmJSAl2" id="progress1-2i">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="mbr-white col-md-12 video-col col-12 col-lg-6">
                                <div className="box liderazgo" style={{backgroundImage: 'url(/img/services/liderazgo-efectivo/2.jpg)'}}>
                                </div>
                            </div>


                            <div className="progress_elements col-lg-6">
                                <h4 className="mbr-section-subtitle align-left mbr-regular mbr-fonts-style display-44">COACHING</h4>

                                <h2 className="mbr-section-title pb-3 align-left mbr-bold mbr-fonts-style mbr-white display-22">
                                Autoliderazgo</h2>
                                <p className="mbr-section-text pb-4 mbr-fonts-style align-left display-77 opacity-75 pb-md-4 text-justify">
                                    Para ser un buen líder es imprescindible trabajar el autoliderazgo. De qué manera? Desarrollando nuestra inteligencia&nbsp;emocional.
                                    <br/><br/>
                                    David McClelland, sostiene que es necesario posibilitar un cambio de conductas y creencias tan enraizadas, pues dominan inconscientemente nuestras respuestas automáticas&nbsp;cotidianas. 
                                    <br/><br/>
                                    El cambio se produciría gracias a un proceso que supone confrontar la imagen ideal con la imagen real de uno mismo y la construcción de un plan de aprendizaje que permita  sustituir unas rutinas por&nbsp;otras.
                                </p> 
                            </div>
                        </div>
                    </div>
                </section>
                <div className="pt-5 mt-5">
                    <h4 className="mbr-section-subtitle mbr-regular mbr-fonts-style display-44 text-center pt-5" style={{color: 'var(--bs-secondary)'}}>
                        CATEGORÍAS
                    </h4>
                    <h3 className="mbr-section-title mbr-bold mbr-white pb-2 mbr-fonts-style display-22 text-center" style={{color: 'var(--bs-secondary)'}}>
                        COACHING EMPRESARIAL
                    </h3>
                    <section className="cid-rSVRmJSAl2 pt-5" style={{backgroundColor: 'transparent'}}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="mbr-white col-md-12 video-col col-12 col-lg-6 order-lg-2">
                                <div className="box liderazgo" style={{backgroundImage: 'url(/img/services/liderazgo-efectivo/3.jpg)'}}>
                                </div>
                            </div>
                            <div className="progress_elements col-lg-6">
                                <h4 className="mbr-section-subtitle align-left mbr-regular mbr-fonts-style display-44" style={{color: 'rgb(108, 91, 103)'}}>EMPRESARIAL</h4>
                                <h2 className="mbr-section-title pb-3 align-left mbr-bold mbr-fonts-style display-22" style={{color: 'rgb(108, 91, 103)'}}>
                                Coaching Ejecutivo</h2>
                                <p className="card-text display-77 mbr-regular text-center text-lg-start text-justify">
                                Consiste en un proceso donde el Líder-Coach  mantiene sesiones o encuentros individuales con su&nbsp;cliente. 
                                <br/><br/>
                                En el contexto planteado, el Coach ayuda a su cliente a desarrollar sus fortalezas como líder de un equipo de trabajo, identificando también aquéllas áreas que necesita&nbsp;mejorar.
                                <br/><br/>
                                El Coach realiza una evaluación diagnóstica sobre su perfil de liderazgo y lo impulsa a llevar adelante acciones que refuercen sus rasgos positivos y mejoren su liderazgo en su área de&nbsp;trabajo.
                                </p> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="mbr-white col-md-12 video-col col-12 col-lg-6">
                                <div className="box liderazgo" style={{backgroundImage: 'url(/img/services/liderazgo-efectivo/4.jpg)'}}>
                                </div>
                            </div>
                            <div className="progress_elements col-lg-6">
                                <h4 className="mbr-section-subtitle align-left mbr-regular mbr-fonts-style display-44" style={{color: 'rgb(108, 91, 103)'}}>EMPRESARIAL</h4>
                                <h2 className="mbr-section-title pb-3 align-left mbr-bold mbr-fonts-style display-22" style={{color: 'rgb(108, 91, 103)'}}>
                                Coaching de Equipos</h2>
                                <p className="card-text display-77 mbr-regular text-center text-lg-start text-justify">
                                    Las sesiones de Coaching de Equipos son sesiones grupales, en las que el Coach se enfoca en consolidar y fortalecer a un equipo de trabajo para mejorar el clima laboral,  el desempeño y enfrentar los desafíos que se presentan en una&nbsp;organización.
                                </p> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="mbr-white col-md-12 video-col col-12 col-lg-6 order-lg-2">
                                <div className="box liderazgo" style={{backgroundImage: 'url(/img/services/liderazgo-efectivo/5.jpg)'}}>
                                </div>
                            </div>
                            <div className="progress_elements col-lg-6">
                                <h4 className="mbr-section-subtitle align-left mbr-regular mbr-fonts-style display-44" style={{color: 'rgb(108, 91, 103)'}}>EMPRESARIAL</h4>
                                <h2 className="mbr-section-title pb-3 align-left mbr-bold mbr-fonts-style display-22" style={{color: 'rgb(108, 91, 103)'}}>
                                Coaching Organizacional</h2>
                                <p className="card-text display-77 mbr-regular text-center text-lg-start text-justify">
                                    Aquí, el Líder Coach trabaja con la organización como un cliente en sí mismo. Una organización es un sistema compuesto por partes que interactúan para alcanzar objetivos&nbsp;determinados.
                                    <br/><br/>
                                    Mejorar las relaciones entre los componentes del sistema organizacional y trabajar los desafíos colectivos, acompañar en la definición de la misión, visión y valores de la organización,  guiar procesos de transformación cultural y acompañar los procesos de planificación estratégica, es parte de la tarea de un Líder&nbsp;Coach.
                                </p> 
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </div>
        </LayoutServices>
    )
}

export default CoachingEducativo