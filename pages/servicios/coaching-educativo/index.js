
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser, faUserGraduate, faUserTie, faRocket, faLightbulb} from '@fortawesome/free-solid-svg-icons'
import LayoutServices from "../../../components/LayoutServices.jsx";
import CarouselProducts from "../../../components/CarouselProducts.jsx";
import Link from "next/link";
import BubbleScrollTo from "../../../components/BubbleScrollTo.js";

const CoachingEducativo = ({...props}) => {
    const [collapsed, setCollapsed] = useState(true)

    return (
        <LayoutServices >

            <CarouselProducts title={'Cursos'} products={props.services}/>
            
            <div className="features2 cid-rT0geqYDWl cid-rT0fsFPh8T">
                <div className="container images-container pb-5">
                    <div className="row justify-content-center">
                        <div className="mbr-black col-lg-5">
                            <div className="content align-left mbr-white">
                                <p className="mbr-text pb-3 mbr-regular mbr-fonts-style display-77 text-center text-lg-start" >
                                    El <b>Coaching Educativo</b> es una propuesta transversal en el proceso de enseñanza y aprendizaje que abarca todo el desarrollo integral como ser humano, y crea espacios donde escuchamos de manera activa y acompañamos el proceso de autodescubrimiento, sin imponer nuestras opiniones y puntos de&nbsp;vista.
                                    <br/>
                                    <br/>
                                    A través de esta metodología los alumnos se hacen conscientes de su realidad individual (quiénes son), de su capacidad intrínseca para superar sus problemas o bloqueos en relación al estudio y alcanzar los objetivos que deseen plantearse (Por ej: aprobar una materia, aprender a estudiar, aprobar el&nbsp;curso).
                                </p>
                            </div>
                        </div>
                        <div className="img-col col-lg-5" width='100%'>
                            <picture>
                                <img src="/img/services/coaching-educativo/0.jpg" alt="Mobirise" style={{width:'100%',boxShadow: "rgb(0 0 0 / 40%) 0px 10px 50px -5px"}} />
                            </picture>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-8 pt-5 text-center">
                            <div className="pb-5">
                                <h4 className="mbr-section-subtitle mbr-regular mbr-fonts-style display-44" style={{color: 'var(--bs-secondary)'}}>
                                    SERVICIO
                                </h4>
                                <h3 className="mbr-section-title mbr-bold mbr-white pb-2 mbr-fonts-style display-22" style={{color: 'var(--bs-secondary)'}}>
                                    Nuestra propuesta
                                </h3>
                                <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77 text-center">
                                    A través del Coaching Educativo, buscamos: 
                                    <br/><br/>
                                    Brindar herramientas a los docentes para que acompañen a sus alumnos a desarrollar sus fortalezas, el autoconcepto, la autoestima, la confianza y la seguridad en sí mismo, para que sean capaces de centrar la atención en el proceso de aprendizaje y  afrontar a largo plazo los nuevos formatos de trabajo&nbsp;futuro.
                                    <br/><br/>
                                    Formar a los equipos de conducción escolar para liderar propuestas de cambio e innovación, incorporando una mirada sistémica al interior de las instituciones educativas y de cara a las nuevas exigencias de una educación de calidad que prepare a los estudiantes de todas las edades para abordar los nuevos futuros y las nuevas demandas&nbsp;laborales.
                                    <br/><br/>
                                </p>
                            </div>
                            <div className="pb-5">
                                <h3 className="mbr-fonts-style display-55 text-center mb-3" style={{color: '#6c5b67'}}>
                                    ¿A qué personas está destinada esta propuesta?
                                </h3>
                                <div className="card-text mbr-regular mbr-black mbr-fonts-style display-77 text-start text-sm-center">
                                    El Coaching Educativo como disciplina innovadora está destinada a
                                    <br/><br/>
                                    <div className="row">
                                        <div className="col-lg-6">
                                        -Educadores de todos los niveles de la educación formal y no&nbsp;formal.
                                        <br/>
                                        -Orientadores sociales y&nbsp;educacionales.
                                        <br/>
                                        -Bibliotecarios.
                                        <br/>
                                        -Formadores, capacitadores y&nbsp;facilitadores.
                                        <br/>
                                        -Estudiantes de&nbsp;profesorados.
                                        </div>
                                        <div className="col-lg-6">
                                        -Coordinadores de grupos o equipos de&nbsp;trabajo.
                                        <br/>
                                        -Preceptores.
                                        <br/>
                                        -Equipos&nbsp;directivos.
                                        <br/>
                                        -Padres y familias interesadas en aportar herramientas modernas e innovadoras en la educación de sus hijos en el seno&nbsp;familiar.
                                        </div>
                                    </div>
                                    <br/><br/>
                                    El modelo escolar tiene más de 200 años. El avance a pasos agigantados de la tecnología y el mundo global, han transformado a las sociedades, y la escuela contribuye en muchos sentidos a que los alumnos vayan perdiendo sus capacidades&nbsp;creativas.
                                    <br/><br/>
                                    Llenamos la cabeza de los alumnos de contenidos para el futuro, un futuro incierto en el que muy probablemente habrá trabajos nuevos que hoy todavía no se han&nbsp;inventado. 
                                    <br/><br/>
                                    Por eso es tan importante el desarrollo de capacidades y nuevas  estrategias para su vida diaria, y también lo es para formar a los docentes en este&nbsp;sentido.
                                    <br/><br/>
                                    Esta propuesta brinda a los equipos docentes herramientas para un liderazgo efectivo en el aula; una nueva forma de interactuar con los&nbsp;alumnos. 
                                    <br/><br/>
                                    Estamos transitando un cambio de paradigma, y es necesario y urgente incorporar a nuestra caja de herramientas, nuevos recursos para afrontarlo de la mejor&nbsp;manera. 
                                    <br/><br/><br/><br/>
                                    <b>Si te sientes</b> comprometido o comprometida con esta&nbsp;idea.
                                    <br/><br/>
                                    <b>Si sientes</b> como nosotros, que siempre algo nuevo y mejor puede&nbsp;hacerse.
                                    <br/><br/>
                                    <b>Si entiendes</b> como nosotros que aportar valor a los nuevos desafíos, redundará en un mundo un poco mejor para nosotros y nuestro&nbsp;entorno.
                                    <br/><br/>
                                    <b>Si sientes</b> como nosotros, que dejar huellas positivas es necesario para construir algo mejor, entonces escríbenos y únete a nuestros cursos, talleres y sesiones personalizadas&nbsp;online.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div id='buttonMostrarMas' className=" d-flex justify-content-center" style={{paddingTop: '100px'}}>
                    <Link href="#saberMasEducativo">
                        <a data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="saberMasEducativo"
                        className="btn btn-md btn-primary display-44" onClick={()=>setCollapsed(!collapsed)}>{collapsed?'QUIERO SABER MÁS': 'OCULTAR'} </a>
                    </Link>
                </div>

                {
                    !collapsed && <BubbleScrollTo itemId={'buttonMostrarMas'}/>
                }
                
            </div>

            <div id='saberMasEducativo' className="features2 cid-rT0fsFPh8T collapse">
                <div className="accordion1 cid-rT0gfc1y8M" id="content4-46" style={{background: "#9e9e9e0f"}}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="mbr-black col-lg-8 py-5" style={{alignSelf: 'center'}}>
                                <div className="content align-center mbr-white">
                                    <h4 className="mbr-section-subtitle mbr-regular mbr-fonts-style display-44" style={{color: 'var(--bs-secondary)'}}>
                                        CONSULTAS
                                    </h4>
                                    <h3 className="mbr-section-title mbr-bold mbr-white pb-2 mbr-fonts-style display-22" style={{color: 'var(--bs-secondary)'}}>
                                        Preguntas Frecuentes
                                    </h3>
                                    <div className="col-12">
                                        <div id="service-accordion_" className="panel-group accordionStyles accordion"
                                            role="tablist" aria-multiselectable="true">
                                            <div className="accordion-item card bg-transparent ">
                                                <div className="card-header" role="tab" id="headingOne">
                                                    <a type='button' className="panel-title collapsed" data-bs-toggle="collapse"
                                                        data-core="" href="#collapse1_80" aria-expanded="false"
                                                        aria-controls="collapse1">
                                                        <h5 className="mbr-fonts-style display-55 text-start">
                                                            <span className="sign mbr-iconfont mbri-arrow-down inactive ps-3"></span>
                                                            ¿Qué promueve el Coaching Educativo?
                                                        </h5>
                                                    </a>
                                                </div>
                                                <div id="collapse1_80" className="panel-collapse noScroll collapse container " role="tabpanel"
                                                    aria-labelledby="headingOne" data-parent="#service-accordion_">
                                                    <p className="mbr-text pb-3 mbr-regular mbr-fonts-style display-77 text-start">
                                                    Por medio del <b>Coaching Educativo</b>, los estudiantes aprenden a auto-observarse y autoconocerse para poder hacerse responsables de sí mismos, de sus actos y el diseño de su propia&nbsp;vida.
                                                    <br/><br/>
                                                    Las bases del <b>Coaching Educativo</b>, así como el Coaching Personal, se sustentan en la Psicología positiva, la Neuroeducación y la Inteligencia&nbsp;Emocional.
                                                    <br/><br/>
                                                    Los niños y adolescentes culminan la escuela y tienen muy claro en qué disciplinas no son buenos, en qué no saben desempeñarse bien. Pero lo que no saben, es cuál es su potencial, no saben para qué son buenos. Esto nos lleva directamente al ejercicio del <b>Coaching Vocacional</b>, que podrás ver en otra de las pestañas de nuestros servicios . Un joven que no ha iniciado un proceso de autoconocimiento, no puede definir su vocación porque desconoce sus&nbsp;capacidades.
                                                    <br/><br/>
                                                    Nos proponemos abordar el aprendizaje significativo y participativo, e impulsar el desarrollo de las habilidades blandas- tan buscadas hoy por los empleadores- fuera del lenguaje tradicional de la educación y tomando en cuenta los grandes avances de las neurociencias respecto de cómo aprende nuestro cerebro, lo cual hace de esta oferta, una modalidad mucho más motivadora y&nbsp;efectiva.
                                                    <br/><br/>
                                                    Por último quiero contarte que el <b>Coaching Educativo</b> no se centra en la enseñanza o transmisión de contenidos, sino en ofrecer posibilidades de mejorar el rendimiento de los estudiantes a través del proceso de&nbsp;autoconocimiento.
                                                    <br/><br/>
                                                    Una educación para el mundo global y de cara a los nuevos futuros,  requiere de un acompañamiento para desarrollar las capacidades de los alumnos,  propiciar el ejercicio de una mentalidad abierta y de crecimiento constantes, más que la instrucción; ya que el aprendizaje se desarrolla de manera natural, debido a la curiosidad por lo novedoso, que todo niños y joven posee de manera&nbsp;intrínseca. 
                                                    <br/><br/>
                                                    El <b>Coaching Educativo</b> promueve una enseñanza integral y efectiva para un aprendizaje significativo de la mano de un Educador –Coach  que guíe el desarrollo de las competencias necesarias para enfrentar la vida personal y profesional de cada&nbsp;persona.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="accordion-item card bg-transparent">
                                                <div className="card-header" role="tab" id="headingTwo">
                                                    <a type='button' className="collapsed panel-title" data-bs-toggle="collapse"
                                                        data-core="" href="#collapse2_80" aria-expanded="false"
                                                        aria-controls="collapse2">
                                                        <h5 className="mbr-fonts-style display-55 text-start">
                                                            <span className="sign mbr-iconfont mbri-arrow-down inactive ps-3"></span>
                                                            ¿Cuál es  la diferencia entre un educador y un educador-Coach?
                                                        </h5>
                                                    </a>
                                                </div>
                                                <div id="collapse2_80" className="panel-collapse noScroll collapse container" role="tabpanel"
                                                    aria-labelledby="headingTwo" data-parent="#service-accordion_">
                                                    <div className="panel-body">
                                                        <p className="mbr-text pb-3 mbr-regular mbr-fonts-style display-77 text-start">
                                                        La diferencia radica en que este último busca desafiar los modelos tradicionales y acompañar en el desarrollo de habilidades específicas y por sobre todo las habilidades blandas, que escasamente se enseñan en la&nbsp;escuela.
                                                        <br/><br/>
                                                        Entre las <b>habilidades blandas</b> más buscadas en las instituciones, organizaciones, comercios y empleadores en general se&nbsp;destacan:
                                                        <br/><br/>
                                                        - La Inteligencia emocional
                                                        <br/>
                                                        - La capacidad de autoliderazgo y liderazgo
                                                        <br/>
                                                        - El trabajo en Equipo
                                                        <br/>
                                                        - La comunicación asertiva
                                                        <br/><br/>
                                                        Los grupos eficaces requieren de líderes que sepan comunicar, gestionar y dar feedback  a todos sus miembros, promoviendo en cada uno de los integrantes un rol activo y colaborativo, permitiéndoles asumir protagonismo y delegando en ellos determinadas funciones que los hagan sentir parte de la&nbsp;organización.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item card bg-transparent">
                                                <div className="card-header" role="tab" id="headingThree">
                                                    <a type='button' className="collapsed panel-title" data-bs-toggle="collapse"
                                                        data-core="" href="#collapse3_80" aria-expanded="false"
                                                        aria-controls="collapse3">
                                                        <h5 className="mbr-fonts-style display-55 text-start">
                                                            <span className="sign mbr-iconfont mbri-arrow-down inactive ps-3"></span>
                                                            ¿Cuál es el rol del educador-Coach?
                                                        </h5>
                                                    </a>
                                                </div>
                                                <div id="collapse3_80" className="panel-collapse noScroll collapse container" role="tabpanel"
                                                    aria-labelledby="headingThree" data-parent="#service-accordion_">
                                                    <div className="panel-body">
                                                        <p className="mbr-text pb-3 mbr-regular mbr-fonts-style display-77 text-start">
                                                            Ayuda a las <b>personas</b> a descubrir las estrategias efectivas de&nbsp;aprendizaje.
                                                            <br/><br/>
                                                            En el caso de los <b>niños y adolescentes</b>, ayuda a promover el pensamiento independiente y creativo, la sensibilización emocional, la capacidad de reflexión y el reconocimiento y regulación de sus emociones para el desarrollo de  su potencial en la vida&nbsp;adulta.
                                                            <br/><br/>
                                                            En el caso de los <b>equipos docentes</b>, acompaña a asumir un rol más activo en los grupos y a buscar soluciones ingeniosas a los desafíos, brindándoles herramientas para transformarse en un buen líder dentro del&nbsp;aula.
                                                            <br/><br/>
                                                            Promueve en las personas un cambio de actitud y el desarrollo de&nbsp;competencias.
                                                            <br/><br/>
                                                            Proporciona un espacio de escucha activa y de autoindagación  que permite la observación, ampliar la mente y profundizar en los desafíos e inquietudes de las personas, para generar un cambio que les permita&nbsp;alcanzarlos.
                                                            <br/><br/>
                                                            Permite un aprendizaje experiencial, ya que nuestro cerebro aprende más y mejor cuando debate  y practica sobre el tema que se&nbsp;aborda.
                                                            <br/><br/>
                                                            Pone el foco en tu situación actual y te acompaña a alcanzar aquello que quieres Ser. La dinámica incluye procesos de aprendizaje, entendiendo el concepto de desaprender para aprender y la importancia de la formación continua y permanente para que nuestro cerebro se mantenga joven,activo y&nbsp;sano.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-8 py-5 text-center">
                            <div className="pb-5">
                                <h4 className="mbr-section-subtitle mbr-regular mbr-fonts-style display-44" style={{color: 'var(--bs-secondary)'}}>
                                    DINÁMICA
                                </h4>
                                <h3 className="mbr-section-title mbr-bold mbr-white pb-2 mbr-fonts-style display-22" style={{color: 'var(--bs-secondary)'}}>
                                    El Coaching Educativo en los Equipos&nbsp;Directivos
                                </h3>
                                <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77 text-center">
                                    Los Equipos directivos lideran propuestas de cambio. 
                                    <br/>
                                    Y un verdadero líder es aquél que está convencido de que el cambio es&nbsp;posible. 
                                    <br/><br/>
                                    Los equipos directivos podrán impulsar una educación innovadora en sus escuelas y colegios, motivando a sus equipos docentes a utilizar esta disciplina, integrando una mirada sistémica al interior de su&nbsp;institución.
                                    <br/><br/>
                                    La escucha activa y la empatía son herramientas eficaces para que los equipos de conducción acompañen a sus docentes a encontrar su mejor versión , a desarrollar todo su potencial como educadores y a promover el ejercicio del autoliderazgo y el liderazgo en el&nbsp;aula.
                                </p>
                            </div>
                            <div className="pb-5">
                                <h3 className="mbr-fonts-style display-55 text-center mb-3" style={{color: '#6c5b67'}}>
                                    Despertar la motivación
                                </h3>
                                <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77 text-center">
                                    Despertar la motivación y  acompañar a adolescentes, jóvenes , adultos y adultos mayores a entrenarse en el autoconocimiento, es el eje central para identificar sus posibilidades y barreras personales y del entorno, para poder plantearse qué cambios desean realizar y a dónde quieren llegar, trabajando en un plan de acción concreto para desarrollar al máximo sus fortalezas y todo su potencial en relación a sus&nbsp;estudios.
                                </p>
                            </div>
                            <div className="pb-5">
                                <h3 className="mbr-fonts-style display-55 text-center mb-3" style={{color: '#6c5b67'}}>
                                    Algo más sobre <br/> la dinámica del Coaching Educativo
                                </h3>
                                <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77 text-center">
                                    La educación es siempre una posibilidad que puede darle un giro a la historia del mundo. En la actualidad nos enfrentamos a desafíos nuevos donde el cambio se da de manera vertiginosa. Aquéllo para lo que enseñamos hoy, seguramente no les sirva para desempeñarse en el futuro. Por eso es que es tan relevante acompañar a desarrollar una mentalidad de crecimiento, y empezar a mirar al mundo con otros&nbsp;ojos.
                                    <br/><br/>
                                    La pandemia marcó un antes y un después en ese sentido, y aceleró el cambio de paradigma que ya había comenzado a transitar a nivel&nbsp;global. 
                                    <br/><br/>
                                    En este siglo, necesitamos fomentar una educación integral, empezar a reconocernos como seres humanos que interactuamos en un medio ambiente con otras personas, y que, despojados de nuestros roles sociales, nos urge observar la vida desde otro&nbsp;lugar. 
                                    <br/><br/>
                                    Como expresa John Whitmore,
                                    <br/>
                                    <q style={{fontSize:' 1.3rem'}}>El Coaching no consiste en enseñar, sino en crear las condiciones necesarias para aprender y&nbsp;crecer</q>.
                                    <br/><br/>
                                    Sobrevivir a esta época de incertidumbre y cambios cada vez más acelerados, implica ser conscientes de la necesidad de desarrollar nuestra capacidad de pensar, reflexionar y sentir, entendiendo que somos una unidad cuerpo-cerebro-mente en un medio ambiente que nos condiciona pero también nos abre puertas; y por ello es tan importante aprender a ser flexibles y estar abiertos a las nuevas&nbsp;ideas.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </LayoutServices>
    )
}

export default CoachingEducativo