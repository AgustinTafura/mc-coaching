import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import Booking from '../components/Booking'
import SectionInfo from '../components/SectionInfo'
import Link from 'next/link'
import ContactForm from '../components/ContactForm'

const contacto = () => {
    return (
        <>
            <Head>
                <title>Marcela Caputo - Coaching y Educación Integral - Contacto</title>
                <meta name="description" content="Contáctame por WhatsApp, telefono o email para obenter información o agendar una sesión online o presencial de Coaching Personal, Coaching Vocacional, Coaching Educativo, Coaching Efectivo y Coaching para Emprendedores."/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Layout>
                <SectionInfo/>
                <section className="contacts4 cid-rT0gvCY3SQ" id="contacts4-4k">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="card p-3 col-12 col-md-6 col-lg-4">
                                <div className="justify-content-start">
                                    <div className="card-box align-left">
                                        <h3 className="mbr-section-subtitle align-left mbr-regular mbr-black mbr-fonts-style display-44">
                                            CONTACTO
                                        </h3>
                                        <h4 className="card-title align-left pb-1 mbr-semibold mbr-black mbr-fonts-style display-55">
                                            Espero tu mensaje</h4>
                                        {/* <p className="mbr-text  mbr-fonts-style display-77"> */}
                                            <Link href = "mailto: info@marcelacaputo.com.ar">
                                                <a className='mbr-text  mbr-fonts-style display-77'>
                                                    info@marcelacaputo.com.ar<br/>
                                                </a>
                                            </Link>
                                            <Link href = "tel:+5492244408516">
                                                <a className='mbr-text  mbr-fonts-style display-77'>
                                                    +(549) 2244 408516
                                                </a>
                                            </Link>
                                        {/* </p> */}
                                        <div className="link-wrap">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card p-3 col-12 col-md-6 col-lg-4">
                                <div className="justify-content-start">
                                    <div className="card-box align-left">
                                        <h3 className="mbr-section-subtitle align-left mbr-regular mbr-black mbr-fonts-style display-44">
                                            ENCONTRANOS</h3>
                                        <h4 className="card-title align-left pb-1 mbr-semibold mbr-black mbr-fonts-style display-55">
                                            Redes Sociales
                                        </h4>
                                        <Link href="https://www.facebook.com/neuroeducacionycoaching">
                                            <a className='mbr-text  mbr-fonts-style display-77'>
                                                <span className="socicon-facebook socicon me-2"/>
                                                Facebook
                                            </a>
                                        </Link><br/>
                                        <Link href="https://www.instagram.com/marcelacaputo_lidercoach/">
                                            <a className='mbr-text  mbr-fonts-style display-77'>
                                                <span className="socicon-instagram socicon me-2"/>
                                                Instagram
                                            </a>
                                        </Link><br/>
                                        <Link href="https://www.youtube.com/channel/UC_KxRomgrGaNlccWnPnPS1w">
                                            <a className='mbr-text  mbr-fonts-style display-77'>
                                                <span className="socicon-youtube socicon me-2"/>
                                                Youtube
                                            </a>
                                        </Link><br/>
                                        <Link href="https://www.linkedin.com/in/marcela-caputo-03aa40122/">
                                            <a className='mbr-text  mbr-fonts-style display-77'>
                                                <span className="socicon-linkedin socicon me-2"/>
                                                Linkedin
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card p-3 col-12 col-md-6 col-lg-4">
                                <div className="justify-content-start">
                                    <div className="card-box align-left">
                                        <h3 className="mbr-section-subtitle align-left mbr-regular mbr-black mbr-fonts-style display-44">
                                            AGENDA    
                                        </h3>
                                        <h4 className="card-title align-left pb-1 mbr-semibold mbr-black mbr-fonts-style display-55">
                                            Reservar una cita
                                        </h4>
                                        <p className="mbr-text mbr-fonts-style display-77">
                                            Puedes contactarme y recibiré tus inquietudes personalmente, 
                                            en un marco de absoluta reserva profesional garantizada.
                                        </p>
                                        <Link className="col-lg-12 col-md-12 col-sm-12 align-center" href='/agenda'>
                                            <a>
                                                <button type="button" className="btn btn-primary display-44">RESERVAR</button>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ContactForm/>
            </Layout>
        </>
    )
}

export default contacto