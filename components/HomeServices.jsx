import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFemale, faMale, faGraduationCap, faChild, faBriefcase, faHandsHoldingChild } from '@fortawesome/free-solid-svg-icons'

const HomeServices = () => {

    return (
        <>
            <section className="features3 cid-rSVQ0cgT0R pt-5" id="features3-25">
                <div className=" pt-5">
                    <div className="row justify-content-center">
                        <div className="mbr-black col-md-12 col-lg-6 align-center">                       
                            <h3 className="mbr-section-title mbr-bold mbr-black pb-5 mbr-fonts-style display-22">NUESTROS SERVICIOS</h3>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="item card1 p-3 col-12 col-md-7 col-lg-4">
                            <div className="card-wrapper">
                                <span className="mbr-iconfont mobi-mbri-user mobi-mbri">
                                    <FontAwesomeIcon icon={faGraduationCap} size="1x" color='white'/>
                                </span>
                                <div className="card-box">
                                    <h4 className="card-title mbr-semibold pb-3 mbr-black mbr-fonts-style display-55">Estudiantes</h4>
                                    <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77">Guiamos a adolescentes y jóvenes
                                        a descubrir sus áreas de competencia y a conectarse con ese oficio o carrera que lo acerque a su 
                                        propósito de vida.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item card2 p-3 col-12 col-md-7 col-lg-4">
                            <div className="card-wrapper">
                                <span className="mbr-iconfont mobi-mbri-sad-face mobi-mbri">
                                    <FontAwesomeIcon icon={faBriefcase} size="1x" color='white'/>
                                </span>
                                <div className="card-box">
                                    <h4 className="card-title mbr-semibold pb-3 mbr-black mbr-fonts-style display-55">Profesionales</h4>
                                    <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77">
                                    Acompañamos a líderes de instituciones y organizaciones públicas y privadas
                                    a realizar procesos de transformación hacia un liderazgo efectivo, 
                                    potenciando sus talentos para el logro de objetivos personales y organizacionales.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="item card3 p-3 col-12 col-md-7 col-lg-4">
                            <div className="card-wrapper">
                                <span className="mbr-iconfont mobi-mbri-users mobi-mbri">
                                    
                                    <FontAwesomeIcon icon={faHandsHoldingChild} size="1x" color='white'/>
                                    {/* <FontAwesomeIcon icon={faFemale} size="1x" color='white'/>
                                    <FontAwesomeIcon icon={faChild} size="xs" color='white'/>
                                    <FontAwesomeIcon icon={faMale} size="1x" color='white'/> */}
                                </span>
                                <div className="card-box">
                                    <h4 className="card-title  mbr-semibold pb-3 mbr-black mbr-fonts-style display-55">Familia
                                    </h4>
                                    <p className="card-text mbr-regular mbr-black mbr-fonts-style display-77">
                                        Ayudamos a  madres y padres  interesados  en comprender mejor a sus hijos 
                                        y acompañarlos en el desarrollo de su inteligencia emocional, fortaleciendo 
                                        los vínculos familiares.
                                    </p>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className="accordion1 cid-rT0gfc1y8M" id="accordion1-47">




                <div className="container">
                    <div className="wrapper">
                        <div className="row">

                            <div className="mbr-black col-md-12 md-pb col-lg-6">
                                <h4 className="mbr-section-subtitle align-left mbr-regular mbr-fonts-style display-44">
                                    COACHING</h4>
                                <h3
                                    className="mbr-section-title align-left mbr-bold mbr-white pb-2 mbr-fonts-style display-22">
                                    Cómo lo hacemos</h3>
                                <p className="mbr-text pb-4 mbr-white align-left mbr-regular mbr-fonts-style display-77">
                                    Ofrecemos servicios de Coaching de Vida (Life Coaching), Coaching Vocacional, 
                                    Coaching Educativo, Coaching y Liderazgo efectivo , que facilitan el abordaje de
                                    los cambios de paradigma del contexto actual. 
                                    {/* centrando la importancia de la 
                                    Educación Neuroemocional como área transversal para aprender a gestionar y regular emociones,
                                    potenciar la comunicación y mejorar los vínculos intra e interpersonales en todos los ámbitos
                                    de desempeño de las personas. */}
                                </p>
                                <div className="mbr-section-btn"><a className="btn btn-md btn-primary display-44"
                                        href="#servicios">VER MÁS</a></div>
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
                                                    <span className="sign mbr-iconfont mbri-arrow-down inactive"></span>Estudiantes
                                                </h5>
                                            </a>
                                        </div>
                                        <div id="collapse1_80" className="panel-collapse noScroll collapse " role="tabpanel"
                                            aria-labelledby="headingOne" data-parent="#service-accordion_">
                                            <div className="panel-body">
                                                <p className="mbr-fonts-style panel-text display-77">
                                                    Acompañamos a estudiantes universitarios a terminar su carrera, 
                                                    a insertarse en el mundo laboral y profesional con los nuevos 
                                                    paradigmas del entorno organizacional, poniendo a su alcance 
                                                    herramientas para potenciar sus fortalezas y el desarrollo de los talentos.
                                                </p>
                                                <p className="mbr-fonts-style panel-text display-77">
                                                    Ayudamos a adultos a redescubrir sus áreas de competencia y reinventarse en
                                                    su desempeño laboral, ofreciendo herramientas para emprender con éxito.
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
                                                    Lideres
                                                </h5>
                                            </a>
                                        </div>
                                        <div id="collapse2_80" className="panel-collapse noScroll collapse" role="tabpanel"
                                            aria-labelledby="headingTwo" data-parent="#service-accordion_">
                                            <div className="panel-body">
                                                <p className="mbr-fonts-style panel-text display-77">
                                                    Impulsamos a equipos docentes y a estudiantes de profesorados 
                                                    a desarrollar habilidades de liderazgo efectivo para el aula 
                                                    y para los equipos de conducción escolar, brindamos herramientas 
                                                    de educación emocional para la mejora del clima escolar.
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
                                        <div id="collapse3_80" className="panel-collapse noScroll collapse" role="tabpanel"
                                            aria-labelledby="headingThree" data-parent="#service-accordion_">
                                            <div className="panel-body">
                                                <p className="mbr-fonts-style panel-text display-77">Lorem ipsum dolor sit
                                                    amet, consectetur
                                                    adipiscing elit. Curabitur in nulla ut magna vehicula libero luctus
                                                    in ipsum
                                                    consequat faucibus. Ut porta nulla ac dapibus convallis. Curabitur
                                                    sit amet
                                                    massa quam. In ut ex auctor.</p>
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
                                                    Equipos de Trabajo
                                                </h5>
                                            </a>
                                        </div>
                                        <div id="collapse4_80" className="panel-collapse noScroll collapse" role="tabpanel"
                                            aria-labelledby="headingFour" data-parent="#service-accordion_">
                                            <div className="panel-body">
                                                <p className="mbr-fonts-style panel-text display-77">
                                                    Acompañamos a líderes de instituciones y organizaciones 
                                                    públicas y privadas a realizar procesos de transformación 
                                                    hacia un liderazgo efectivo, potenciando sus talentos para 
                                                    el logro de objetivos personales y organizacionales.
                                                </p>
                                                <p className="mbr-fonts-style panel-text display-77">
                                                    Guiamos procesos de consolidación y fortalecimiento de equipos 
                                                    de trabajo para mejorar el clima laboral y enfrentar los desafíos 
                                                    que se presentan.
                                                </p>
                                                <p className="mbr-fonts-style panel-text display-77">
                                                    Impulsamos la mejora de las relaciones entre los distintos componentes 
                                                    de un sistema organizacional y  ayudamos a trabajar los desafíos colectivos, 
                                                    los procesos de transformación cultural, la definición de la misión, visión y 
                                                    valores de la organización o institución y el desarrollo de una  planificación estratégica.
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
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-md-12 col-big col-lg-6">
                            <div className="card p-3 col-12 col-md-12 col-lg-12">
                                <a href="/servicios/life-coaching">
                                    <div className="card-wrapper">
                                        <div className="img-wrapper">
                                            <img className="img-big" src="/img/services/life-coaching/1.jpg" alt="Marcela Caputo - Coaching"/>
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
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-6">
                            <div className="row justify-content-center">

                                <div className="card p-3 col-12 col-md-6 col-lg-6">
                                    <a href="/servicios/liderazgo-efectivo">
                                        <div className="card-wrapper">
                                            <div className="img-wrapper">
                                                <img src="/img/services/liderazgo-efectivo/0.png" alt="Marcela Caputo - Coaching"/>
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
                                </div>

                                <div className="card p-3 col-12 col-md-6 col-lg-6">
                                    <a href="/servicios/coaching-educativo">
                                        <div className="card-wrapper">
                                            <div className="img-wrapper">
                                                <img src="/img/services/coaching-educativo/0.jpg" alt="Marcela Caputo - Coaching"/>
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
                                </div>

                                <div className="card p-3 col-12 col-md-6 col-lg-6">
                                    <a href="/servicios/coaching-vocacional">
                                        <div className="card-wrapper">
                                            <div className="img-wrapper">
                                                <img src="/img/services/coaching-vocacional/0.jpg" alt="Marcela Caputo - Coaching"/>
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
                                </div>



                                <div className="card p-3 col-12 col-md-6 col-lg-6">
                                    <a href="/servicios/educacion-neuroemocional">
                                        <div className="card-wrapper">
                                            <div className="img-wrapper">
                                                <img src="/img/services/educacion-neuroemocional/0.png" alt="Marcela Caputo - Coaching"/>
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
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeServices