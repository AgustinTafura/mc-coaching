import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import Booking from '../components/Booking'
import SectionInfo from '../components/SectionInfo'
import Link from 'next/link'

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
                <div id="mc_embed_signup">
                    <form action="https://marcelacaputo.us2.list-manage.com/subscribe/post?u=e189a517f55a714f9692514ed&amp;id=6493dd146b&amp;f_id=00da6de0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                        <div id="mc_embed_signup_scroll">
                        <h2>Subscribe</h2>
                        <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">Email  <span className="asterisk">*</span>
                </label>
                    <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" required/>
                    <span id="mce-EMAIL-HELPERTEXT" className="helper_text">tudireccion@gmail.com</span>
                </div>
                <div className="mc-field-group">
                    <label htmlFor="mce-FNAME">Nombre </label>
                    <input type="text" value="" name="FNAME" className="" id="mce-FNAME"/>
                    <span id="mce-FNAME-HELPERTEXT" className="helper_text"></span>
                </div>
                <div className="mc-field-group">
                    <label htmlFor="mce-LNAME">Apellido </label>
                    <input type="text" value="" name="LNAME" className="" id="mce-LNAME"/>
                    <span id="mce-LNAME-HELPERTEXT" className="helper_text"></span>
                </div>
                <div className="mc-field-group size1of2">
                    <label htmlFor="mce-MOBILE">Teléfono Móvil </label>
                    <input type="text" name="MOBILE" className="" value="" id="mce-MOBILE"/>
                    <span id="mce-MOBILE-HELPERTEXT" className="helper_text"></span>
                    
                </div>
                    <div id="mce-responses" className="clear foot">
                        <div className="response" id="mce-error-response" style={{display:"none"}}></div>
                        <div className="response" id="mce-success-response" style={{display:"none"}}></div>
                    </div>
                        {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                    <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_e189a517f55a714f9692514ed_6493dd146b" tabIndex="-1" value=""/></div>
                        <div className="optionalParent">
                            <div className="clear foot">
                                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                                <p className="brandingLogo"><a href="http://eepurl.com/io-lx6" title="Mailchimp - email marketing made easy and fun"><picture><img alt="Marcela Caputo - Coaching life coaching" src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"/></picture></a></p>
                            </div>
                        </div>
                    </div>
                </form>
                </div>

            </Layout>
        </>
    )
}

export default contacto