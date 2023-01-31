
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser, faUserGraduate, faUserTie, faRocket, faLightbulb} from '@fortawesome/free-solid-svg-icons'
import LayoutServices from "../../../components/LayoutServices";
import Link from "next/link";
import CarouselProducts from "../../../components/CarouselProducts";
import BubbleScrollTo from "../../../components/BubbleScrollTo";

const CoachingPersonal = (props) => {
    const [collapsed, setCollapsed] = useState(true)

    return (
        <LayoutServices >

            <CarouselProducts products={props.services}/>


            <div className="features2 cid-rT0geqYDWl cid-rT0fsFPh8T">
                <div className="container images-container pb-5">
                    <div className="row justify-content-center">
                        <div className="img-col col-12 align-center col-lg-4" width='100%'>
                            <picture>
                                <img src="/img/services/coaching-personal/1.jpg" alt="Mobirise" style={{width:'100%', boxShadow: "rgb(0 0 0 / 40%) 0px 10px 50px -5px"}} />
                            </picture>
                        </div>
                        <div className="mbr-black col-lg-6">
                            <div className="content align-left mbr-white">
                                <p className="mbr-text pb-3 mbr-regular mbr-fonts-style display-77 text-center text-lg-start text-justify" >
                                    El Coaching es una disciplina innovadora que surge como una necesidad para facilitar procesos de aprendizaje y el desarrollo del ser humano, impulsando la creatividad y teniendo en cuenta las emociones, el cuerpo y el lenguaje como dominios habitados por el SER, que nos permiten transformarnos y crearnos nuevas oportunidades para vivir&nbsp;mejor.
                                    <br/><br/>
                                    Así, el <b>Coaching Personal</b> es un proceso personalizado y confidencial, orientado en ayudar al Coachee o cliente a alcanzar resultados mejores a los que está obteniendo en diferentes áreas de su vida personal o&nbsp;profesional.
                                    <br/><br/>
                                    El mundo actual requiere de personas abiertas y dispuestas a desaprender para volver a aprender, a desestructurarse para&nbsp;reinventarse.
                                    <br/><br/>
                                    Mi propuesta diferencial a través del <b>Coaching</b> y la <b>Educación Integral</b>, y tomando como base  las metodologías del Life Coaching, el Coaching Ontológico y los últimos avances en las Neurociencias, es que puedo ayudarte con propuestas prácticas y concretas en tu desarrollo personal para potenciar tus recursos y darle un verdadero sentido a tu&nbsp;vida.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div id='buttonMostrarMas' className=" d-flex justify-content-center" style={{paddingTop: '100px'}}>
                    <Link href="#saberMasPersonal">
                        <a data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="saberMasPersonal"
                        className="btn btn-md btn-primary display-44" onClick={()=>setCollapsed(!collapsed)}>{collapsed?'QUIERO SABER MÁS': 'OCULTAR'} </a>
                    </Link>
                </div>

                {
                    !collapsed && <BubbleScrollTo itemId={'buttonMostrarMas'}/>
                }
            </div>
            <div id='saberMasPersonal' className="features2 cid-rT0fsFPh8T collapse">
                    <div className="container">
                        <div className="row justify-content-center pb-5">
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
                                                <p className="card-text mbr-regular mbr-black mbr-fonts-style display-7 ">Que cada persona pueda desarrollar la mejor versión de sí&nbsp;misma.</p>
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
                                                <p className="card-text mbr-regular mbr-black mbr-fonts-style display-7">Acompañarte en el&nbsp;proceso.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8 py-5">
                                <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77 text-center text-justify">
                                Como especialista en Liderazgo y Coaching y mi formación en Neurosicoeducación, mis propuestas incluyen como eje transversal el desarrollo de la Educación Emocional de cada una de las personas que se acercan a la&nbsp;consulta.
                                <br/><br/>
                                Los seres humanos poseemos toda la capacidad para convertir nuestras relaciones personales en una gran oportunidad para crecer y desarrollarnos en&nbsp;sociedad.
                                <br/><br/>
                                A través del Coaching Personal, podemos obtener una “ caja de herramientas” muy completa para convertir las circunstancias de la vida, buenas o malas, en nuevas oportunidades de aprendizaje y de crecimiento óptimo , que nos conducen a ver el entorno, las personas y las situaciones cotidianas desde una perspectiva distinta y nos ayudan a mejorar nuestra vida personal y/o profesional poniendo en marcha nuestros deseos y recursos&nbsp;internos. 
                                <br/><br/>
                                Cuando hacemos foco en aquéllo que realmente deseamos y que nos motiva;  cuando somos capaces de cambiar el observador que somos, podemos construirnos una nueva vida potenciando la confianza en nosotros mismos, y vivir con más armonía y plenitud, mientras descubrimos una nueva visión que nos acerca a convivir mejor con los demás y a compartir todo lo bueno con quienes nos&nbsp;rodean.
                                De esta manera, generamos círculos virtuosos y nos alejamos de los círculos viciosos.
                                <br/><br/>
                                Wayne Dyer expresaba en una de sus conferencias, lo siguiente:
                                <br/>
                                <q style={{fontSize:' 1.3rem'}}>Si tú cambias la forma en que ves las cosas, esas cosas que tú observas, cambiarán.” 
                                Por ello es que afirmamos que el cambio no está fuera de nosotros, sino dentro. 
                                Y es en este sentido, en que el Coaching puede impulsarte a que logres esa transformación que estás&nbsp;buscando.</q>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="accordion1 cid-rT0gfc1y8M" id="content4-46" style={{background: "#9e9e9e0f"}}>
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
                                                                ¿A quiénes están dirigidas las sesiones de  Coaching personal ?
                                                            </h5>
                                                        </a>
                                                    </div>
                                                    <div id="collapse1_80" className="panel-collapse noScroll collapse container " role="tabpanel"
                                                        aria-labelledby="headingOne" data-parent="#service-accordion_">

                                                                <ul className="mbr-text pb-3 mbr-regular mbr-fonts-style display-77 text-start">
                                                                    <li>Niños y adolescentes que requieran del desarrollo de habilidades intra e interpersonales, regular mejor sus emociones, desarrollar y potenciar sus funciones cognitivas ( funciones ejecutivas ).</li>
                                                                    <br/>
                                                                    <li>Adolescentes que requieran descubrir sus recursos creativos y desarrollar sus talentos, desarrollar la tolerancia, aprender a comunicarse mejor, prepararse para afrontar el desarraigo de su hogar e irse a estudiar a otra ciudad, organizarse mejor en sus estudios.</li>
                                                                    <br/>
                                                                    <li>Cualquier persona joven o adulta que desee fortalecer su autoestima, autoconocerse mejor para vincularse mejor con su entorno familiar y/o laboral.</li>
                                                                    <br/>
                                                                    <li>Personas que deseen emprender y necesitan plantear objetivos y alcanzar metas.</li>
                                                                    <br/>
                                                                    <li>Jóvenes y adultos que quieran reinventarse laboralmente y deseen fortalecer la autoconfianza y potenciar sus recursos creativos.</li>
                                                                    <br/>
                                                                    <li>Personas que deseen potenciar sus emprendimientos laborales a través del Marketing Estratégico Digital . ( Venta online ).</li>
                                                                    <br/>
                                                                    <li>Personas que necesiten sostener determinadas actividades necesarias o saludables , como por ejemplo una dieta, el gimnasio, estudiar inglés .</li>
                                                                    <br/>
                                                                </ul>

                                                    </div>
                                                </div>
                                                <div className="accordion-item card bg-transparent">
                                                    <div className="card-header" role="tab" id="headingTwo">
                                                        <a type='button' className="collapsed panel-title" data-bs-toggle="collapse"
                                                            data-core="" href="#collapse2_80" aria-expanded="false"
                                                            aria-controls="collapse2">
                                                            <h5 className="mbr-fonts-style display-55 text-start">
                                                                <span className="sign mbr-iconfont mbri-arrow-down inactive ps-3"></span>
                                                                ¿Para qué tomar sesiones de  Coaching?
                                                            </h5>
                                                        </a>
                                                    </div>
                                                    <div id="collapse2_80" className="panel-collapse noScroll collapse container" role="tabpanel"
                                                        aria-labelledby="headingTwo" data-parent="#service-accordion_">
                                                        <div className="panel-body">
                                                            <p className="mbr-text pb-3 mbr-regular mbr-fonts-style display-77 text-start">
                                                            Potenciar cualquier área  de tu vida personal o profesional. Por ejemplo:
                                                            <br/><br/>
                                                            Área de la salud.
                                                            <br/>
                                                            Área del trabajo y el disfrute del ocio o tiempo libre.
                                                            <br/>
                                                            Área del amor , la familia y las amistades.
                                                            <br/>
                                                            Área del crecimiento personal.
                                                            <br/>
                                                            Área del entorno.
                                                            <br/>
                                                            Área profesional.

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
                                                                ¿Qué otros aspectos de mi vida personal puedo abordar en un proceso de Coaching?
                                                            </h5>
                                                        </a>
                                                    </div>
                                                    <div id="collapse3_80" className="panel-collapse noScroll collapse container" role="tabpanel"
                                                        aria-labelledby="headingThree" data-parent="#service-accordion_">
                                                        <div className="panel-body">
                                                            <p className="mbr-text pb-3 mbr-regular mbr-fonts-style display-77 text-start">
                                                            Si has notado que tu forma de comunicarte no es óptima y eso te genera problemas vinculares  con otras personas en tu entorno familiar o laboral.
                                                            <br/><br/>
                                                            Si sientes que necesitas solucionar algunos conflictos internos.
                                                            <br/><br/>
                                                            Aprender a regular y gestionar tus emociones para tener una vida más armónica y con más paz.
                                                            <br/><br/>
                                                            Comprender, transitar y eliminar los miedos que internamente te impiden alcanzar mejores resultados.
                                                            <br/><br/>
                                                            Desterrar creencias que limitan tus acciones cotidianas y reemplazarlas por creencias que potencien tus objetivos  y tus deseos en la vida.
                                                            <br/><br/> 
                                                            Desarrollar constancia y perseverancia para llevar adelante un proceso determinado, como  por ejemplo puede ser adelgazar o estudiar un idioma.
                                                            <br/><br/>
                                                            Potenciar tu energía y tu motivación para sostener determinados proyectos y objetivos que te gustaría alcanzar en la vida.
                                                            <br/><br/> 
                                                            Desarrollar la creatividad y potenciar tus talentos personales.
                                                            <br/><br/>
                                                            Descubrir o redescubrir tu vocación ( en este caso reforzaré mi propuesta con Coaching Vocacional ).
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item card bg-transparent">
                                                    <div className="card-header" role="tab" id="headingFour">
                                                        <a type='button' className="collapsed panel-title" data-bs-toggle="collapse"
                                                            data-core="" href="#collapse4_80" aria-expanded="false"
                                                            aria-controls="collapse4">
                                                            <h5 className="mbr-fonts-style display-55 text-start">
                                                                <span className="sign mbr-iconfont mbri-arrow-down inactive ps-3"></span>
                                                                ¿Cuánto tiempo dura una sesión y con qué frecuencia puedo tomar una sesión de Coaching?
                                                            </h5>
                                                        </a>
                                                    </div>
                                                    <div id="collapse4_80" className="panel-collapse noScroll collapse container" role="tabpanel"
                                                        aria-labelledby="headingFour" data-parent="#service-accordion_">
                                                        <div className="panel-body">
                                                            <p className="mbr-text pb-3 mbr-regular mbr-fonts-style display-77 text-start">
                                                                Cada sesión de Coaching dura entre 50 a 60 minutos y puede ser de modalidad online o presencial.
                                                                <br/><br/>
                                                                ( La modalidad presencial  aplica solamente para la ciudad de Las Flores, en la Pcia. de Bs. As. )
                                                                <br/><br/>
                                                                Los encuentros son generalmente semanales, pero también pueden acordarse encuentros cada diez ( 10 ) días o quincenalmente.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item card bg-transparent">
                                                    <div className="card-header" role="tab" id="headingFour">
                                                        <a type='button' className="collapsed panel-title" data-bs-toggle="collapse"
                                                            data-core="" href="#collapse5_80" aria-expanded="false"
                                                            aria-controls="collapse5">
                                                            <h5 className="mbr-fonts-style display-55 text-start">
                                                                <span className="sign mbr-iconfont mbri-arrow-down inactive ps-3"></span>
                                                                ¿Cómo se producen los encuentros de las sesiones online y qué otros requisitos debo tener en cuenta?
                                                            </h5>
                                                        </a>
                                                    </div>
                                                    <div id="collapse5_80" className="panel-collapse noScroll collapse container" role="tabpanel"
                                                        aria-labelledby="headingFour" data-parent="#service-accordion_">
                                                        <div className="panel-body">
                                                            <p className="mbr-text pb-3 mbr-regular mbr-fonts-style display-77 text-start">
                                                                Las sesiones online se realizan mediante alguna de las siguientes plataformas de video llamada, según previo acuerdo con el consultante.
                                                                <br/><br/>
                                                                Zoom - Facetime - Google Meet - Whatsapp -
                                                                <br/><br/>
                                                                Tu celular, netbook o computadora debe tener habilitada la cámara, pues la sesión online se realiza únicamente por video llamada.
                                                                <br/><br/>
                                                                No es posible la sesión online a través de una llamada telefónica.
                                                                <br/><br/>
                                                                Es preciso hacerla a través de una videollamada donde la cámara permanezca encendida todo el tiempo que dure la sesión para que la dinámica conversacional sea conectiva.
                                                                <br/><br/>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item card bg-transparent">
                                                    <div className="card-header" role="tab" id="headingFour">
                                                        <a type='button' className="collapsed panel-title" data-bs-toggle="collapse"
                                                            data-core="" href="#collapse6_80" aria-expanded="false"
                                                            aria-controls="collapse6">
                                                            <h5 className="mbr-fonts-style display-55 text-start">
                                                                <span className="sign mbr-iconfont mbri-arrow-down inactive ps-3"></span>
                                                                ¿Cómo es la dinámica de la sesión?
                                                            </h5>
                                                        </a>
                                                    </div>
                                                    <div id="collapse6_80" className="panel-collapse noScroll collapse container" role="tabpanel"
                                                        aria-labelledby="headingFour" data-parent="#service-accordion_">
                                                        <div className="panel-body">
                                                            <p className="mbr-text pb-3 mbr-regular mbr-fonts-style display-77 text-start">
                                                                Un Coach establece una conversación inicial con el consultante ( Coachee ), para indagar  el motivo de la consulta. El Coach explica la modalidad de las sesiones, los aspectos éticos de confidencialidad y reserva  de las conversaciones y otros  aspectos formales de la misma.
                                                                <br/><br/>
                                                                El Coach ayuda al consultante o Coachee a describir su situación actual y aquélla que desea alcanzar.
                                                                <br/><br/> 
                                                                En la dinámica conversacional, el Coach realiza diversos registros sobre las inquietudes del / de la consultante , y éste/a puede realizar también registros y actividades prácticas que lo ayudarán a descubrir los obstáculos que le impiden alcanzar sus objetivos.
                                                                <br/><br/> 
                                                                Se establece un plan de acción concreto y práctico que llevará al consultante al logro de sus objetivos.
                                                                <br/><br/>
                                                                En todo momento, el Coach acompaña al cliente a monitorear su plan de acción.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item card bg-transparent">
                                                    <div className="card-header" role="tab" id="headingFour">
                                                        <a type='button' className="collapsed panel-title" data-bs-toggle="collapse"
                                                            data-core="" href="#collapse7_80" aria-expanded="false"
                                                            aria-controls="collapse7">
                                                            <h5 className="mbr-fonts-style display-55 text-start">
                                                                <span className="sign mbr-iconfont mbri-arrow-down inactive ps-3"></span>
                                                                ¿En qué consisten las sesiones grupales de  Coaching de familia?
                                                            </h5>
                                                        </a>
                                                    </div>
                                                    <div id="collapse7_80" className="panel-collapse noScroll collapse container" role="tabpanel"
                                                        aria-labelledby="headingFour" data-parent="#service-accordion_">
                                                        <div className="panel-body">
                                                            <p className="mbr-text pb-3 mbr-regular mbr-fonts-style display-77 text-start">
                                                                La pandemia nos ha puesto a prueba con la convivencia, y hemos vivenciado más que en cualquier otro momento que no se trata  de algo fácil.
                                                                <br/><br/>
                                                                En un grupo familiar conviven diferentes personas con diferentes edades y diferentes hábitos, gustos e intereses que influyen en la forma de organizarse a nivel personal y que muchas veces dificultan la buena convivencia y el equilibrio en el hogar.
                                                                <br/><br/>
                                                                Ser capaces de prevenir  los conflictos o encontrar soluciones posibles, requiere competencias que ayuden a restablecer las buenas relaciones.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item card bg-transparent">
                                                    <div className="card-header" role="tab" id="headingFour">
                                                        <a type='button' className="collapsed panel-title" data-bs-toggle="collapse"
                                                            data-core="" href="#collapse8_80" aria-expanded="false"
                                                            aria-controls="collapse8">
                                                            <h5 className="mbr-fonts-style display-55 text-start">
                                                                <span className="sign mbr-iconfont mbri-arrow-down inactive ps-3"></span>
                                                                ¿Cómo es la dinámica de la sesión de coaching familiar?
                                                            </h5>
                                                        </a>
                                                    </div>
                                                    <div id="collapse8_80" className="panel-collapse noScroll collapse container" role="tabpanel"
                                                        aria-labelledby="headingFour" data-parent="#service-accordion_">
                                                        <div className="panel-body">
                                                            <p className="mbr-text pb-3 mbr-regular mbr-fonts-style display-77 text-start">
                                                                Un Coach establece una conversación con la familia donde inicialmente realiza un diagnóstico en base a la situación actual que plantean y la situación  que desean alcanzar.
                                                                <br/><br/>
                                                                El Coach define junto a cada familia los objetivos y se establece un plan de acción concreto y práctico que la familia pondrá en marcha, promoviendo el aprendizaje y el trabajo colaborativo.
                                                                <br/><br/>
                                                                Para ello, el Coach acompañará a cada integrante a desarrollar y potenciar determinadas habilidades y competencias de autoconfianza, comunicación positiva, respeto y empatía por el otro.
                                                                <br/><br/> 
                                                                Toda familia es un sistema; por lo tanto para que cada integrante pueda transformar el modo en que observa las situaciones de la vida  y que esa transformación se sostenga en el tiempo, es necesario que esté acompañada de la transformación de todo el sistema. 
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item card bg-transparent">
                                                    <div className="card-header" role="tab" id="headingFour">
                                                        <a type='button' className="collapsed panel-title" data-bs-toggle="collapse"
                                                            data-core="" href="#collapse9_80" aria-expanded="false"
                                                            aria-controls="collapse9">
                                                            <h5 className="mbr-fonts-style display-55 text-start">
                                                                <span className="sign mbr-iconfont mbri-arrow-down inactive ps-3"></span>
                                                                ¿Cómo es la sesión de Coaching grupal con amigos/ conocidos convivientes?
                                                            </h5>
                                                        </a>
                                                    </div>
                                                    <div id="collapse9_80" className="panel-collapse noScroll collapse container" role="tabpanel"
                                                        aria-labelledby="headingFour" data-parent="#service-accordion_">
                                                        <div className="panel-body">
                                                            <p className="mbr-text pb-3 mbr-regular mbr-fonts-style display-77 text-start">
                                                                La dinámica es similar a la que se lleva adelante en el proceso de Coaching familiar. 
                                                                <br/><br/>
                                                                Puedes consultarme por chat privado para que puedas despejar tus dudas puntuales dependiendo de las características del grupo que desea iniciar un proceso de Coaching.
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
                    </div> */}
                    <div className="container">
                        <div className="row justify-content-center py-5">
                            <div className="col-lg-8 py-5 text-center">
                                <div className="pb-5">
                                    <h4 className="mbr-section-subtitle mbr-regular mbr-fonts-style display-44" style={{color: 'var(--bs-secondary)'}}>
                                        UNA MATERIA PENDIENTE
                                    </h4>
                                    <h3 className="mbr-section-title mbr-bold mbr-white pb-2 mbr-fonts-style display-22" style={{color: 'var(--bs-secondary)'}}>
                                        Educación Emocional
                                    </h3>
                                    <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77 text-center text-justify">
                                        Los desafíos del mundo actual pospandemia y la experiencia que atravesamos todos los seres humanos del mundo durante el año 2020 y parte del 2021 requiere de nuevas preguntas para abordar nuestra vida cotidiana. Quiénes sómos, qué cosas priorizamos , qué nos apasiona hacer, cuánto demuestro el afecto que siento por mis seres queridos, cuánto tiempo de calidad le dedico a mis hijos, cómo aprender cosas nuevas, cómo desaprender para volver a aprender .
                                        <br/><br/>
                                        La ciencia demuestra que el aprendizaje es la clave del progreso humano. Sin embargo, la mayoría de nosotros hemos recibido en la escuela, contenidos sobre distintas materias, pero poco sabemos acerca de cómo funciona nuestro cerebro y la estrecha conexión que tiene con nuestro cuerpo, mucho menos sabemos por qué nos emocionamos, de dónde provienen nuestros sentimientos, y cómo podemos mejorar nuestros comportamientos para lograr una convivencia armónica en los ámbitos en que nos desempeñamos.
                                        <br/><br/>
                                        La ansiedad, el estrés, la depresión y los trastornos emocionales van en aumento, según trabajos de investigación de la Organización Mundial de la Salud.
                                        <br/><br/>
                                        Por ello y gracias a los relevantes descubrimientos de las neurociencias y el impulso que el Psicólogo Daniel Goleman le dio al concepto de Inteligencia Emocional como capacidad para reconocer nuestros propios sentimientos y los de los demás, de regular nuestras emociones y automotivarnos, la educación emocional o educación neuroemocional, a mi criterio, se ha transformado en una herramienta fundamental para contribuir a tener una vida plena, pues - insisto-, son nuestras emociones las que definen nuestra forma de reaccionar y actuar ante los estímulos que se presentan ante nosotros en nuestra vida cotidiana.
                                        <br/><br/>
                                    </p>
                                    <picture>
                                        <img src="/img/services/coaching-personal/icon.png" alt="icon" style={{width:'100px'}} />
                                    </picture>
                                </div>


                                <div className="pb-5">
                                    <h3 className="mbr-fonts-style display-55 text-center mb-3" style={{color: '#6c5b67'}}>
                                        ¿Qué es la Neurosicoeducación?
                                    </h3>
                                    <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77 text-center text-justify">
                                        La Neurosicoeducación es un sistema abierto de educación, que promueve el enriquecimiento de la comprensión sobre la naturaleza humana, respetando siempre como base, la información que se sustenta en trabajos de investigación científicos.
                                        <br/><br/>
                                        En palabras del Doctor Carlos A. Logatt Grabner,
                                        <br/>
                                        <q style={{fontSize:' 1.3rem'}}>El término Neurosicoeducación es un neologismo que busca ser identificado como una representación del aporte de la ciencia al desarrollo humano y a nuestro crecimiento como mejores personas, con la convicción de que la sociedad actual necesita (…) que podamos desarrollar valores que nos permitan vivir en un mundo globalizado donde el YO se transforme en NOSOTROS</q>.
                                        <br/><br/>
                                        Asimismo, el Dr. Logatt Grabner expresa que
                                        <br/>
                                        <q style={{fontSize:' 1.3rem'}}>Si deseamos revertir las diversas dificultades de convivencia que se observan en las diferentes sociedades actuales, el conocimiento y el control del mundo interior de quienes las integran(…) es una necesidad imperiosa que abarca a toda la humanidad en su conjunto.</q>
                                        <br/><br/>
                                        La Inteligencia emocional puede ser desarrollada en todas las personas y abarca las competencias personales, dentro de las cuales podemos distinguir a la autoconciencia, la autorregulación y la automotivación , y por otro lado,  las competencias sociales, que incluyen el desarrollo de la empatía y la capacidad para relacionarnos con los demás (habilidades sociales).
                                    </p>
                                </div>
                                <div className="pb-5">
                                    <h3 className="mbr-fonts-style display-55 text-center mb-3" style={{color: '#6c5b67'}}>
                                        ¿Por qué es importante la educación emocional?
                                    </h3>
                                    <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77 text-center text-justify">
                                        Comprender nuestras emociones y poder regularlas, nos conducen a alcanzar nuestros objetivos y estas competencias nos permiten comprender las emociones de los demás ( la empatía ), influenciando de manera positiva el núcleo familiar donde vivimos, el ámbito laboral donde nos desempeñamos y la sociedad donde interactuamos.
                                        <br/><br/>
                                        Diversos estudios científicos demuestran que el cerebro necesita emocionarse para aprender. Las emociones son el motor que nos guía hacia el bienestar o hacia el caos.
                                    </p>
                                </div>
                                <div className="pb-5">
                                    <h3 className="mbr-fonts-style display-55 text-center mb-3" style={{color: '#6c5b67'}}>
                                        MI PROPUESTA
                                    </h3>
                                    <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77 text-center text-justify">
                                        Asumir el compromiso de difundir y aplicar en mis cursos, webinarios y talleres, los conceptos de la educación emocional, los trabajos que surgen de las investigaciones científicas con responsabilidad y de manera didáctica, de tal modo que sea accesible para todas aquéllas personas, sin importar su edad, que deseen transitar un camino de transformación que les permita vivir su vida con mayor bienestar, alcanzando una sociedad más justa , más tolerante, más igualitaria y más respetuosa .
                                        <br/><br/>
                                        Si eres una <b>mamá o papá o adulto a cargo</b> de un niño o de un adolescente, y sentís que necesitás mejores herramientas para dialogar con ellos , poner límites, ser más amorosos, comprenderlos mejor, ser capaces de ponerse en sus lugares para acompañarlos en esas etapas tan importantes de la vida de una persona.
                                        <br/><br/>
                                        Si eres <b>docente</b> y necesitas herramientas para mejoras tus prácticas aúlicas en cuanto a la relación que estableces con tus estudiantes; si formas parte de un equipo docente o directivo y buscas herramientas para autoliderar mejor tus emociones y poder generar mejores vínculos, prevenir o intervenir en situaciones conflictivas.
                                        <br/><br/>
                                        Si eres un <b>trabajador o un profesional</b> que desea gestionar y regular sus emociones para desempeñarte con mayor motivación y confianza, gestionar mejor tus equipos de trabajo, desarrollar empatía , tratar con personas difíciles, y cualquier otra situación que requiera del desarrollo de tu inteligencia emocional, siempre enfocada en obtener más y mejores beneficios para tí y el entorno,  entonces te invito a que hagas un recorrido por todo el sitio y estés atento o atenta a los cursos que próximamente estarán publicados en este espacio.
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