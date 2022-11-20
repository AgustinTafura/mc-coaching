import Link from "next/link"


const HomeAboutMe = () => {

    return (
        <section className="cid-rSVRmJSAl2" id="progress1-2i">
            <div className="container-fluid">
                <div className="row">
                    <div className="mbr-white col-md-12 video-col col-12 col-lg-6">
                        <div className="box">
                            {/* <div className="mbr-media show-modal align-center py-2" data-modal=".modalWindow">
                                <div className="icon-wrap">
                                    <span className="mbr-iconfont mobi-mbri-play mobi-mbri"></span>
                                </div>
                            </div> */}
                        </div>
                    </div>


                    <div className="progress_elements col-lg-6">
                        <h4 className="mbr-section-subtitle align-left mbr-regular mbr-fonts-style display-44">CONOCEME</h4>

                        <h2 className="mbr-section-title pb-3 align-left mbr-bold mbr-fonts-style mbr-white display-22">
                            Soy Marcela
                        </h2>
                        <p className="mbr-section-text mbr-fonts-style align-left display-77 ">
                        Vivo mi vida haciendo lo que me apasiona.
                        </p>
                        <p className="mbr-section-text pb-4 mbr-fonts-style align-left display-77 opacity-75">
                            Leer, estudiar, conocer, transmitir lo que aprendo,  alumbrar caminos y dejar huellas positivas para otros. 
                            Me conecta con mi propósito de&nbsp;vida.
                            <br/><br/>
                            Luego de 30 años en las aulas y 15 años en gestión educativa, abrí en 2019 mi Consultorio de Coaching presencial y online y comencé a dar talleres, cursos y capacitaciones.
                            <br/><br/>
                            Me capacité en Neuropsicoeducación y en Coaching Vocacional. Actualmente estoy finalizando mi tesis para obtener el título de Especialista Universitaria en Liderazgo y Coaching.
                            <br/><br/>
                            Te invito a navegar el sitio y a conocer más sobre nuestros servicios.
                            <br/>
                            Puedes contactarme y recibiré tus inquietudes personalmente, en un marco de absoluta reserva profesional garantizada.
                        </p>
                        <Link href="/conoceme">
                            <a  style={{color: "white",fontWeight: "500",marginTop: "1rem"}}>Más sobre mi</a>
                        </Link>    

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeAboutMe