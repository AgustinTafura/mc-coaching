import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFemale, faMale, faRocket, faChild, faLightbulb, faGem } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const HomeServices = () => {

    return (
        <>


            <section className="accordion1 cid-rT0gfc1y8M" id="accordion1-47">
                <div className="">
                    <div className="wrapper">
                        <div className="row">

                                <h4 className="mbr-section-subtitle align-left mbr-regular mbr-fonts-style display-44">
                                    COACHING</h4>
                                <h3
                                    className="mbr-section-title align-left mbr-bold mbr-white pb-2 mbr-fonts-style display-22">
                                    Cómo lo hacemos</h3>
                            <div className="align-content-between col-lg-6 col-md-12 d-lg-flex flex-wrap mbr-black md-pb" style={{maxHeight: "310.85px"}}>
                                <p className="mbr-text mbr-white align-left mbr-regular mbr-fonts-style display-77 mt-3" style={{lineHeight:"1.8"}}>
                                    Marcela Caputo Coaching ofrece los servicios de Coaching personal,
                                    a través de la disciplinas del Life Coaching y el Coaching Ontológico, 
                                    sumando los aportes de la Programación Neurolingüística (P.N.L.) y 
                                    la inteligencia emocional para la comunicación efectiva; Coaching Vocacional; 
                                    Coaching Educativo, Liderazgo Efectivo; Coaching para emprendedores. 
                                </p>
                                {/* <ul className="mbr-text pb-4 mbr-white align-left mbr-regular mbr-fonts-style display-77">
                                    <li className='pb-2'>
                                        <b>Coaching Personal</b><br/> A través de la disciplinas 
                                        del Life Coaching y el Coaching Ontológico, sumando los aportes de la Programación Neurolingüística 
                                        (P.N.L.) y la inteligencia emocional para la comunicación efectiva;    
                                    </li>
                                    <li className='pb-2'><b>Coaching Vocacional</b></li>
                                    <li className='pb-2'><b>Coaching Educativo</b></li>
                                    <li className='pb-2'><b>Liderazgo Efectivo</b></li>
                                    <li className='pb-2'><b>Coaching para emprendedores</b></li>
                                </ul> */}
                                <div className="mbr-section-btn">
                                    <Link href="#servicios">
                                        <a className="btn btn-md btn-primary display-44" >VER MÁS</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-12 col-md-12 col-lg-6">
                                <div id="service-accordion_" className="panel-group accordionStyles accordion"
                                    role="tablist" aria-multiselectable="true">
                                    <div className="accordion-item card bg-transparent ">
                                        <div className="card-header" role="tab" id="headingOne">
                                            <a type='button' className="panel-title collapsed" data-bs-toggle="collapse"
                                                data-core="" href="#collapse1_80" aria-expanded="false"
                                                aria-controls="collapse1">
                                                <h5 className="mbr-fonts-style display-55">
                                                    <span className="sign mbr-iconfont mbri-arrow-down inactive"></span>Jóvenes y Estudiantes
                                                </h5>
                                            </a>
                                        </div>
                                        <div id="collapse1_80" className="panel-collapse noScroll collapse container " role="tabpanel"
                                            aria-labelledby="headingOne" data-parent="#service-accordion_">
                                            <div className="panel-body">
                                                <p className="mbr-fonts-style panel-text display-77">
                                                    Guiamos a adolescentes y jóvenes a descubrir sus áreas de competencia 
                                                    y a conectarse con ese oficio o carrera que lo acerque a su propósito de vida.
                                                </p>
                                                <p className="mbr-fonts-style panel-text display-77">
                                                    Acompañamos a estudiantes universitarios a terminar su carrera, 
                                                    a insertarse en el mundo laboral y profesional con los nuevos paradigmas 
                                                    del entorno organizacional, poniendo a su alcance herramientas para potenciar 
                                                    sus fortalezas y el desarrollo de los talentos.
                                                </p>
                                                <p className="mbr-fonts-style panel-text display-77">
                                                    Ayudamos a adultos a redescubrir sus áreas de competencia 
                                                    y reinventarse en su desempeño laboral, ofreciendo herramientas 
                                                    para emprender con éxito.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item card bg-transparent">
                                        <div className="card-header" role="tab" id="headingTwo">
                                            <a type='button' className="collapsed panel-title" data-bs-toggle="collapse"
                                                data-core="" href="#collapse2_80" aria-expanded="false"
                                                aria-controls="collapse2">
                                                <h5 className="mbr-fonts-style display-55">
                                                    <span className="sign mbr-iconfont mbri-arrow-down inactive"></span>
                                                    Líderes y Organizaciones
                                                </h5>
                                            </a>
                                        </div>
                                        <div id="collapse2_80" className="panel-collapse noScroll collapse container" role="tabpanel"
                                            aria-labelledby="headingTwo" data-parent="#service-accordion_">
                                            <div className="panel-body">
                                                <p className="mbr-fonts-style panel-text display-77">
                                                    Acompañamos a líderes de instituciones y organizaciones públicas y privadas a realizar procesos de transformación hacia un liderazgo efectivo, potenciando sus talentos para el logro de objetivos personales y organizacionales.
                                                </p>
                                                <p className="mbr-fonts-style panel-text display-77">
                                                    Guiamos procesos de consolidación y fortalecimiento de equipos de trabajo para mejorar el clima laboral y enfrentar los desafíos que se presentan.
                                                </p>
                                                <p className="mbr-fonts-style panel-text display-77">
                                                    Nos especializamos en Instituciones educativas y pequeñas organizaciones, como por ejemplo estudios contables, locales de venta de productos o servicios, etc. impulsando la mejora de las relaciones humanas y ayudamos a trabajar los desafíos colectivos, los procesos de transformación cultural, la definición de la misión, visión y valores y el desarrollo de una planificación estratégica.
                                                </p>
    
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item card bg-transparent">
                                        <div className="card-header" role="tab" id="headingThree">
                                            <a type='button' className="collapsed panel-title" data-bs-toggle="collapse"
                                                data-core="" href="#collapse3_80" aria-expanded="false"
                                                aria-controls="collapse3">
                                                <h5 className="mbr-fonts-style display-55">
                                                    <span className="sign mbr-iconfont mbri-arrow-down inactive"></span>
                                                        Vínculos Familiares
                                                </h5>
                                            </a>
                                        </div>
                                        <div id="collapse3_80" className="panel-collapse noScroll collapse container" role="tabpanel"
                                            aria-labelledby="headingThree" data-parent="#service-accordion_">
                                            <div className="panel-body">
                                                <p className="mbr-fonts-style panel-text display-77">
                                                    Ayudamos a  madres y padres  interesados  en comprender 
                                                    mejor a sus hijos y acompañarlos en el desarrollo de su 
                                                    inteligencia emocional, fortaleciendo los vínculos familiares.
                                                </p>
                                                <p className="mbr-fonts-style panel-text display-77">
                                                    Vivimos en un mundo hiperconectado e hiperinformado. En base a esta dinámica del mundo actual, guiamos procesos de aprendizaje para cualquier persona interesada en adquirir herramientas para mejorar su comunicación con sus estudiantes y sus pares.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item card bg-transparent">
                                        <div className="card-header" role="tab" id="headingFour">
                                            <a type='button' className="collapsed panel-title" data-bs-toggle="collapse"
                                                data-core="" href="#collapse4_80" aria-expanded="false"
                                                aria-controls="collapse4">
                                                <h5 className="mbr-fonts-style display-55">
                                                    <span className="sign mbr-iconfont mbri-arrow-down inactive"></span>
                                                    Emprendedores
                                                </h5>
                                            </a>
                                        </div>
                                        <div id="collapse4_80" className="panel-collapse noScroll collapse container" role="tabpanel"
                                            aria-labelledby="headingFour" data-parent="#service-accordion_">
                                            <div className="panel-body">
                                                <p className="mbr-fonts-style panel-text display-77">
                                                    Ésta modalidad está dirigida a emprendedores y emprendedoras, equipos de venta, pymes.
                                                </p>
                                                <p className="mbr-fonts-style panel-text display-77">
                                                    Consiste en adquirir de herramientas concretas y prácticas para emprender online. 
                                                </p>
                                                <p className="mbr-fonts-style panel-text display-77">
                                                    En la actualidad, las ventas de productos y servicios online, ponen la mirada en un público objetivo global. Vender ya no alcanza con la aplicación de una técnica , sino que es necesario conocer los procesos de decisión de compra de nuestro público objetivo. 
                                                </p>
                                                <p className="mbr-fonts-style panel-text display-77">
                                                    El Coaching para hombres y mujeres emprendedoras facilita tu camino al éxito en las ventas a través de   un proyecto estratégico que te permitirá alcanzar los objetivos, y te ayudará a vender más y mejor. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="features12 cid-rT0fyK9jWQ" id="features12-3y">
                <div className="row gx-0 justify-content-center">
                    <div className="mbr-black col-md-12 col-lg-6 align-center">                       
                        <h3 className="mbr-section-title mbr-bold mbr-black pb-5 mbr-fonts-style display-22">NUESTROS SERVICIOS</h3>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-big col-lg-6">
                            <div className="card p-3 col-12 col-md-12 col-lg-12">
                                <Link href="/servicios/life-coaching">
                                    <a >
                                        <div className="card-wrapper">
                                            <div className="img-wrapper">
                                                <img className="img-big" src="/img/services/life-coaching/1.jpg" alt="Marcela Caputo - Coaching life coaching"/>
                                                <div className="text-wrap">
                                                    <h4
                                                        className="card-title align-center mbr-semibold mbr-black mbr-fonts-style display-55">
                                                        Life Coaching
                                                    </h4>
                                                    <h5 className="mbr-section-subtitle align-center mbr-regular mbr-fonts-style display-44">
                                                        PERSONAL O PROFESIONAL
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-6">
                            <div className="row justify-content-center">

                                <div className="card p-3 col-12 col-md-6 col-lg-6">
                                    <Link href="/servicios/liderazgo-efectivo">
                                        <a >
                                            <div className="card-wrapper">
                                                <div className="img-wrapper">
                                                    <img src="/img/services/liderazgo-efectivo/0.png" alt="Marcela Caputo - Coaching liderazgo efectivo"/>
                                                    <div className="text-wrap">
                                                        <h4
                                                            className="card-title align-center mbr-semibold mbr-black mbr-fonts-style display-55">
                                                            Liderazgo Efectivo
                                                        </h4>
                                                        <h5 className="mbr-section-subtitle align-center mbr-regular mbr-fonts-style display-44">
                                                            EQUIPOS DE TRABAJO
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </div>

                                <div className="card p-3 col-12 col-md-6 col-lg-6">
                                    <Link href="/servicios/coaching-educativo">
                                        <a >
                                            <div className="card-wrapper">
                                                <div className="img-wrapper">
                                                    <img src="/img/services/coaching-educativo/0.jpg" alt="Marcela Caputo - Coaching coaching educativo"/>
                                                    <div className="text-wrap">
                                                        <h4
                                                            className="card-title align-center mbr-semibold mbr-black mbr-fonts-style display-55">
                                                            Coaching Educativo
                                                        </h4>
                                                        <h5 className="mbr-section-subtitle align-center mbr-regular mbr-fonts-style display-44">
                                                            HABILIDADES BLANDAS
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </div>

                                <div className="card p-3 col-12 col-md-6 col-lg-6">
                                    <Link href="/servicios/coaching-vocacional">
                                        <a >
                                            <div className="card-wrapper">
                                                <div className="img-wrapper">
                                                    <img src="/img/services/coaching-vocacional/0.jpg" alt="Marcela Caputo - Coaching coaching vocacional"/>
                                                    <div className="text-wrap">
                                                        <h4
                                                            className="card-title align-center mbr-semibold mbr-black mbr-fonts-style display-55">
                                                            Coaching Vocacional
                                                        </h4>
                                                        <h5 className="mbr-section-subtitle align-center mbr-regular mbr-fonts-style display-44">
                                                            ESTUDIANTES
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </div>



                                <div className="card p-3 col-12 col-md-6 col-lg-6">
                                    <Link href="/servicios/educacion-neuroemocional">
                                        <a >
                                            <div className="card-wrapper">
                                                <div className="img-wrapper">
                                                    <img src="/img/services/educacion-neuroemocional/0.png" alt="Marcela Caputo - Coaching educacion neuroemocional"/>
                                                    <div className="text-wrap">
                                                        <h4
                                                            className="card-title align-center mbr-semibold mbr-black mbr-fonts-style display-55">
                                                            Educación Neuroemocional
                                                        </h4>
                                                        <h5 className="mbr-section-subtitle align-center mbr-regular mbr-fonts-style display-44">
                                                            INTELIGENCIA EMOCIONAL
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features3 cid-rSVQ0cgT0R" id="features3-25">
                    <div className="row gx-0 justify-content-center">
                        <div className="item card1 p-3 col-12 col-md-7 col-lg-4">
                            <div className="card-wrapper">
                                <span className="mbr-iconfont mobi-mbri-user mobi-mbri">
                                    <FontAwesomeIcon icon={faRocket} size="1x" color='white'/>
                                </span>
                                <div className="card-box">
                                    <h4 className="card-title mbr-semibold pb-3 mbr-black mbr-fonts-style display-55">Misión</h4>
                                    <ul>
                                        <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77">
                                            Propiciar una nueva forma de educación que se ajuste a las necesidades actuales que requiere la universidad y el mundo laboral no sólo a nivel regional sino también a nivel global
                                        </p>
                                        <div className="card-title" data-bs-toggle="collapse" data-bs-target="#misionCollapse1" aria-expanded="false" aria-controls="misionCollapse1">
                                            <a>FACILITAR</a>
                                        </div>
                                        <p id='misionCollapse1' className='card-text mbr-regular collapse'>
                                            El desarrollo de las habilidades blandas a toda persona interesada en realizar un  proceso de autoconocimiento personal ,  descubrir su propósito de vida y orientar sus objetivos a los resultados que desea obtener en su vida personal, laboral o profesional.
                                        </p>
                                        <div className="card-title" data-bs-toggle="collapse" data-bs-target="#misionCollapse2" aria-expanded="false" aria-controls="misionCollapse2">
                                            <a>INSPIRAR</a>
                                        </div>
                                        <p id='misionCollapse2' className='card-text mbr-regular collapse'>
                                            A  otros a conectarse con su mejor versión para el logro de sus objetivos y metas. 
                                        </p>
                                        <div className="card-title" data-bs-toggle="collapse" data-bs-target="#misionCollapse3" aria-expanded="false" aria-controls="misionCollapse3">
                                            <a>AYUDAR</a>
                                        </div>
                                        <p id='misionCollapse3' className='card-text mbr-regular collapse'>
                                            A otras personas a mejorar su vida a través de una mirada distinta, para alcanzar una transformación personal.
                                        </p>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="item card2 p-3 col-12 col-md-7 col-lg-4">
                            <div className="card-wrapper">
                                <span className="mbr-iconfont mobi-mbri-sad-face mobi-mbri">
                                    <FontAwesomeIcon icon={faLightbulb} size="1x" color='white'/>
                                </span>
                                <div className="card-box">
                                    <h4 className="card-title mbr-semibold pb-3 mbr-black mbr-fonts-style display-55">Visión</h4>
                                    <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77">
                                    Buscamos formar y educar a aquéllas personas interesadas en iniciar procesos de autoconocimiento y desarrollo personal, a través de contenido neurosicoeducativo y de herramientas de Coaching.
                                    </p>
                                    <div className='card-text'>
                                        <Link href="#misionCollapse">
                                            <a data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="misionCollapse" style={{fontWeight: "500",marginTop: "1rem"}} className= 'card-title mbr-semibold pb-3 mbr-black mbr-fonts-style display-55'>+</a>
                                        </Link>
                                    </div>
                                    <div id='misionCollapse' className="card-text mbr-regular mbr-black mbr-fonts-style display-77 collapse">
                                        <p>
                                            Impulsamos a adolescentes y jóvenes a descubrir su verdadera vocación y a conectarse con ese oficio o carrera que lo acerque a su propósito de vida. 
                                        </p>
                                        <p>
                                            Procuramos la excelencia y nos proyectamos para construir un futuro mejor. 
                                            Contribuimos a través de la Educación emocional, a generar relaciones colaborativas  y a crear contextos más humanos, más resilientes.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="item card3 p-3 col-12 col-md-7 col-lg-4">
                            <div className="card-wrapper">
                                <span className="mbr-iconfont mobi-mbri-users mobi-mbri">
                                    
                                    <FontAwesomeIcon icon={faGem} size="1x" color='white'/>
                                </span>
                                <div className="card-box">
                                    <h4 className="card-title  mbr-semibold pb-3 mbr-black mbr-fonts-style display-55">Valores
                                    </h4>
                                    <ul>
                                        <li className="card-text mbr-regular mbr-black mbr-fonts-style display-77">Experiencia</li>
                                        <li className="card-text mbr-regular mbr-black mbr-fonts-style display-77">Confianza</li>
                                        <li className="card-text mbr-regular mbr-black mbr-fonts-style display-77">Confidencialidad y reserva profesional</li>
                                        <li className="card-text mbr-regular mbr-black mbr-fonts-style display-77">Pasión por lo que hacemos</li>
                                        <li className="card-text mbr-regular mbr-black mbr-fonts-style display-77">Formación permanente</li>
                                    </ul>
                                    
                                </div>

                            </div>
                        </div>


                    </div>
            </section>
        </>
    )
}

export default HomeServices