import React from 'react'
import Head from 'next/head'
import Layout from './Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons'
import { useRouter } from "next/router"
import { sections, generalFAQ } from '../data'
import SectionInfo from './SectionInfo'
import Link from 'next/link'
import { faDesktop, faDollarSign, faTimeline } from '@fortawesome/free-solid-svg-icons'



const LayoutSesions = ({ children, ...pageProps }) => {

    const {productName} = pageProps
    const router = useRouter()
    const {asPath} = router
    const urlTitle = asPath.split('/')[2]
    const services = sections.find(service=>service.name === 'servicios')
    const service = services.list.find(service=>service.link === urlTitle)
    const product = service.products.find(p=>p.title === productName)
    

    function toARS(value) {
        return new Intl.NumberFormat('es-ar', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 0
        }).format(value)
    }
    function toUSD(value) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
        }).format(value)
    }

    return (
    <>
        <Head>  
            {/* <title>{service.meta.title}</title>
            <meta  name="description" content={service.meta.description} /> */}
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Layout>
            <SectionInfo/>
            <section className="form cid-rT0gOkWcki" id="form4-50">
                <div className="container mb-5">
                    <div className="row">
                        <div className="mbr-black col-md-12">
                            <div className="content align-center mbr-white text-start">
                                <h3 className="mbr-section-subtitle mbr-regular mbr-fonts-style display-44 text-uppercase">{product.type}</h3>
                                <h2 className="mbr-section-title mbr-bold mbr-fonts-style display-22 text-uppercase text-start">{product.title}</h2>
                                <p className="mbr-text pb-3 mbr-regular mbr-fonts-style display-77">
                                {product.subtitle}
                                </p>
                            </div>
                        </div>
                        <div className="mbr-black col-lg-7">
                            <div className="content align-left mbr-white">
                                <div className="col-12 cid-rT0gfc1y8M pt-2 pt-lg-0">
                                    <div id="service-accordion_" className="panel-group accordionStyles accordion" role="tablist" aria-multiselectable="true">
                                        {
                                            product.intro && (
                                                < div className='pb-5'>
                                                    {product.intro?.map((element,key)=>
                                                        <div key={key} className="display-77 mbr-black mbr-fonts-style mbr-regular mbr-text" dangerouslySetInnerHTML={{__html: element}}/>
                                                    )}
                                                </div>
                                            )
                                        }
                                        {
                                            product.faq.map((data,key)=>{
                                                return (
                                                    <div key={key} className="text-start card">
                                                        <div className="card-header " role="tab" id={`heading-${key}`}>
                                                            <a type='button' className="collapsed panel-title custom" data-bs-toggle="collapse"
                                                                data-core="" href={`#collapse-question-${key}`} aria-expanded="false"
                                                                aria-controls={`collapse${key}`}>
                                                                <h5 className="mbr-fonts-style display-55 text-left mb-3 text-start" style={{color:'var(--bs-secondary)'}}>
                                                                    <span className="sign mbr-iconfont mbri-arrow-down inactive ps-3"></span>
                                                                    
                                                                    <span dangerouslySetInnerHTML={{__html: data[0]}}/>
                                                                </h5>
                                                            </a>
                                                        </div>
                                                        <div id={`collapse-question-${key}`} className="panel-collapse noScroll collapse container" role="tabpanel"
                                                            aria-labelledby={`heading-${key}`} data-parent="#service-accordion_">
                                                            <div className="panel-body">
                                                                {
                                                                    data[1].map((el,index)=>
                                                                        <div key={index} className='mbr-text pb-3 mbr-regular mbr-fonts-style display-77 text-start'><span dangerouslySetInnerHTML={{__html: el}}/></div>
                                                                    
                                                                    )
                                                                }
                                                                    
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-1'></div>

                        <div className="col-lg-4 mx-auto mbr-form position-relative py-5 pt-lg-0 g-0" data-form-type="formoid">
                            <div className='sticky-sidebar'>
                                <div className="form-col sticky-item px-lg-4" data-form-type="formoid">
                                    <div className="col-lg-12 col-md-12 col-sm-12 mb-4" >
                                        <h6 className="mbr-section-subtitle mbr-fonts-style display-44" style={{color:'var(--bs-secondary)'}}>
                                            SESIONES  
                                        </h6>
                                    </div>

                                    <div className='row justify-content-center'>
                                        <div className='row d-flex col-sm-10 col-md-6 col-lg-12 g-0'>

                                            <div className='col-3 text-center mb-4 align-self-center'>
                                                <FontAwesomeIcon icon={faCalendar} size="3x" color='var(--bs-secondary)'/>
                                            </div>
                                            <div className='col-9 mbr-regular mb-4 fw-normal text-black'>
                                                <b>INICIO:</b> 
                                                <br/>
                                                {product.dateStart}
                                            </div>

                                            <div className='col-3 text-center mb-4 align-self-center'>
                                                <FontAwesomeIcon icon={faClock} size="3x" color='var(--bs-secondary)'/>
                                            </div>
                                            <div className='col-9 mbr-regular mb-4 fw-normal text-black'>
                                                <b>DIAS Y HORARIO</b>
                                                <br/>
                                                A coordinar según disponibilidad
                                            </div>

                                            <div className='col-3 text-center mb-4 align-self-center'>
                                                <FontAwesomeIcon icon={faDesktop} size="3x" color='var(--bs-secondary)'/>
                                                </div>
                                            <div className='col-9 mbr-regular mb-4 fw-normal text-black'>
                                            <b>MODALIDAD</b>
                                                <br/>
                                                {product.mode}
                                            </div>
                                            <Link className="col-lg-12 col-md-12 col-sm-12 align-center" href={product.waLink}>
                                                <a>
                                                    <button type="button" className="btn btn-primary display-44">CONSULTAR</button>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>


            </section>
            {children}
        </Layout>           
  </>
  )
}

export default LayoutSesions