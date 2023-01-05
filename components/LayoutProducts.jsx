import React from 'react'
import Head from 'next/head'
import Layout from './Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons'
import { useRouter } from "next/router"
import { sections, generalFAQ } from '../data'
import SectionInfo from './SectionInfo'
import Link from 'next/link'
import { faDesktop, faDollarSign, faTimeline } from '@fortawesome/free-solid-svg-icons'



const LayoutProducts = ({ children, ...pageProps }) => {

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
                        <div className="mbr-black col-md-12 pb-5">
                            <div className="content align-center mbr-white">
                                <h3 className="mbr-section-subtitle mbr-regular mbr-fonts-style display-44">CURSO</h3>
                                <h2 className="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-22 text-uppercase">{product.title}</h2>
                                <p className="mbr-text pb-3 mbr-regular mbr-fonts-style display-77">
                                {product.subtitle}
                                </p>
                            </div>
                        </div>
                        <div className="mbr-black col-lg-7">
                            <div className="content align-left mbr-white">
                                <h3 className="mbr-fonts-style display-55 text-left mt-5 mb-3" style={{color: "rgb(108, 91, 103)"}}>
                                    ¿A quiénes está dirigida ésta propuesta?
                                </h3>
                                <div className="link-wrap text-left">
                                    {
                                        product.target.map((element,i)=>{
                                            return (
                                                <div key={i} className="display-77 mbr-black mbr-fonts-style mbr-regular mbr-text" dangerouslySetInnerHTML={{__html: element}}/>
                                            )
                                        })
                                    }
                                </div>
                                {
                                    product.shortDescription.map((element,index)=>{
                                        return (
                                            
                                            index === 0 ?
                                            <h3 key={index} className="mbr-fonts-style display-55 text-left mb-3" style={{color: "rgb(108, 91, 103)"}}>
                                                {element}
                                            </h3>
                                            
                                            :   (<div key={index} className={`mbr-text mbr-regular mbr-fonts-style display-77 mb-3 ${index === 0 ?'pb-0' : 'pb-2'}`}>
                                                    <span dangerouslySetInnerHTML={{__html: element}}/>
                                                </div>)
                                        )
                                    })
                                }
                                {
                                    product.longDescription && 
                                    <>
                                        <h3 className="mbr-fonts-style display-55 text-left mt-5 mb-3" style={{color: "rgb(108, 91, 103)"}}>
                                            En este curso aprenderás a…
                                        </h3>
                                        <div className="link-wrap text-left">
                                            {
                                                product.longDescription.map((element,i)=>{
                                                    return (
                                                        <li key={i} className="link display-77 mbr-black mbr-fonts-style mbr-regular mbr-text">
                                                            {element}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </div>
                                    </>
                                }

                                <div>
                                    <h3 className="mbr-fonts-style display-55 text-left mt-5 mb-3" style={{color: "rgb(108, 91, 103)"}}>
                                        Objetivos
                                    </h3>
                                    {
                                        product.goals.map((element,i)=>{
                                            return (
                                                <div key={i} className="display-77 mbr-black mbr-fonts-style mbr-regular mbr-text">
                                                    {element}
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <div>
                                    <h3 className="mbr-fonts-style display-55 text-left mt-5 mb-3" style={{color: "rgb(108, 91, 103)"}}>
                                        Contenido
                                    </h3>
                                    <ol>
                                        {
                                            product.content.map((element,i)=>{
                                                return (
                                                    typeof element !== 'string' ?
                                                    <div key={i} className="display-77 mbr-black mbr-fonts-style mbr-regular mbr-text mt-3"
                                                        style={{padding: '0.2rem 0',marginBottom: '0.5rem'}}>
                                                        <b>{element[0]}</b>
                                                        {element[1].map((el,index)=><li key={index} className="display-77 mbr-black mbr-fonts-style mbr-regular mbr-text">{el}</li>)}
                                                    </div>
                                                    :
                                                    <li key={i} className="display-77 mbr-black mbr-fonts-style mbr-regular mbr-text"
                                                        style={{padding: '0.2rem 0',marginBottom: '0.5rem'}}>
                                                        {element}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ol>
                                </div>

                                <div>
                                    <h3 className="mbr-fonts-style display-55 text-left mt-5 mb-3" style={{color: "rgb(108, 91, 103)"}}>
                                        Por qué realizar un curso en esta casa
                                    </h3>
                                        {
                                            product.value.map((element,i)=>{

                                                if(typeof element === 'string') {
                                                    return (
                                                        <div key={i} className="display-77 mbr-black mbr-fonts-style mbr-regular mbr-text mb-3">
                                                            <span dangerouslySetInnerHTML={{__html: element}}/>
                                                        </div>
                                                    )
                                                } else {
                                                    return(
                                                        <ul key={i} className='pb-3' style={{listStyle: 'inside',listStyleType: 'square'}}>
                                                            {element.map((item,key)=>{
                                                                return (
                                                                    <li key={key} className="display-77 mbr-black mbr-fonts-style mbr-regular mbr-text"
                                                                        style={{padding: '0.2rem 0',marginBottom: '0.5rem'}}>
                                                                        {item}
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    )
                                                }
                                            })
                                        }
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-1'></div>

                        <div className="col-lg-4 mx-auto mbr-form position-relative py-5 pt-lg-0 g-0" data-form-type="formoid">
                            <div className='sticky-sidebar'>
                                <div className="form-col sticky-item px-lg-4" data-form-type="formoid">
                                    <div className="col-lg-12 col-md-12 col-sm-12 mb-4" >
                                        <h6 className="mbr-section-subtitle mbr-fonts-style display-44" style={{color:'var(--bs-secondary)'}}>
                                            PRÓXIMO CURSO  
                                        </h6>
                                    </div>

                                    <div className='row justify-content-center'>
                                        <div className='row d-flex col-sm-10 col-md-6 col-lg-12 g-0'>

                                            <div className='col-3 text-center mb-4 align-self-center'>
                                                <FontAwesomeIcon icon={faCalendar} size="3x" color='var(--bs-secondary)'/>
                                            </div>
                                            <div className='col-9 mbr-regular mb-4 fw-normal text-black'>
                                                <b>INICIO:</b> {product.dateStart}
                                                <br/>
                                                <b>FIN:</b> {product.dateEnd}
                                            </div>

                                            <div className='col-3 text-center mb-4 align-self-center'>
                                                <FontAwesomeIcon icon={faClock} size="3x" color='var(--bs-secondary)'/>
                                            </div>
                                            <div className='col-9 mbr-regular mb-4 fw-normal text-black'>
                                                <b>DIAS Y HORARIO</b>
                                                <br/>
                                                {
                                                    product.days.map((day,key)=> {
                                                        return (<span key={key}>{day[0]} - {day[1]}</span>)
                                                    })
                                                }
                                            </div>

                                            <div className='col-3 text-center mb-4 align-self-center'>
                                                <FontAwesomeIcon icon={faTimeline} size="3x" color='var(--bs-secondary)'/>
                                            </div>
                                            <div className='col-9 mbr-regular mb-4 fw-normal text-black'>
                                            <b>CANTIDAD DE ENCUENTROS:</b> {product.numberOfSesions}
                                                <br/>
                                                <b>TIEMPO TOTAL:</b> {product.numberOfHours} horas
                                            </div>

                                            <div className='col-3 text-center mb-4 align-self-center'>
                                                <FontAwesomeIcon icon={faDesktop} size="3x" color='var(--bs-secondary)'/>
                                                </div>
                                            <div className='col-9 mbr-regular mb-4 fw-normal text-black'>
                                            <b>MODALIDAD</b>
                                                <br/>
                                                {product.mode}
                                            </div>
                                            <div className='col-3 text-center align-self-center'>
                                                <FontAwesomeIcon icon={faDollarSign} size="3x" color='var(--bs-secondary)'/>
                                                </div>
                                            <div className='col-4 mbr-regular  fw-normal text-black'>
                                            <b>ARGENTINA</b>
                                                <br/>
                                                <del>ARS {toARS(product.investment.argentina.price)}</del>
                                                <br />
                                                <b>ARS {toARS(product.investment.argentina.price*((100-product.investment.argentina.discount)/100))}*</b>
                                            </div>
                                            {
                                                product.investment.exterior && (
                                                    <div className='col-4 mbr-regular  fw-normal text-black'>
                                                        <b>EXTERIOR</b>
                                                            <br/>
                                                            <del>USD {toUSD(product.investment.exterior.price)}</del>
                                                            <br />
                                                            <b>USD {toUSD(product.investment.exterior.price*((100-product.investment.exterior.discount)/100))}*</b>
                                                    </div>
                                                )
                                            }
                                            {
                                                product.investment.discountDate && <div className='my-3 text-center' style={{fontSize:'12px'}}>* Precio PROMOCIONAL hasta el {product.investment.discountDate} o <b>3 cuotas Sin Interes</b> sobre el precio de&nbsp;lista. <b>CUPOS&nbsp;LIMITADOS</b></div>
                                            }
                                            <Link className="col-lg-12 col-md-12 col-sm-12 align-center" href={product.paymentLink}>
                                                <a>
                                                    <button type="button" className="btn btn-primary display-44">COMPRAR</button>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>

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
                                        {
                                            product.faq.map((data,key)=>{
                                                return (
                                                    <div key={key} className="accordion-item card bg-transparent">
                                                        <div className="card-header" role="tab" id={`heading-${key}`}>
                                                            <a type='button' className="collapsed panel-title" data-bs-toggle="collapse"
                                                                data-core="" href={`#collapse-question-${key}`} aria-expanded="false"
                                                                aria-controls={`collapse${key}`}>
                                                                <h5 className="mbr-fonts-style display-55 text-start">
                                                                    <span className="sign mbr-iconfont mbri-arrow-down inactive ps-3"></span>
                                                                    {data[0]}
                                                                </h5>
                                                            </a>
                                                        </div>
                                                        <div id={`collapse-question-${key}`} className="panel-collapse noScroll collapse container" role="tabpanel"
                                                            aria-labelledby={`heading-${key}`} data-parent="#service-accordion_">
                                                            <div className="panel-body">
                                                                {
                                                                    data[1].map((el,index)=>
                                                                        data[1].length > 1 ?
                                                                            <li key={index} className='mbr-text pb-3 mbr-regular mbr-fonts-style display-77 text-start'>{el}</li>
                                                                        : <p key={index} className='mbr-text pb-3 mbr-regular mbr-fonts-style display-77 text-start'><span dangerouslySetInnerHTML={{__html: el}}/></p>
                                                                    
                                                                    )
                                                                }
                                                                    
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        
                                        {/* GENERAL FAQS - INICIO*/}

                                        {
                                            generalFAQ.map((data,key)=>{
                                                return (
                                                    <div key={key} className="accordion-item card bg-transparent">
                                                        <div className="card-header" role="tab" id={`heading-11${key}`}>
                                                            <a type='button' className="collapsed panel-title" data-bs-toggle="collapse"
                                                                data-core="" href={`#collapse-question-11${key}`} aria-expanded="false"
                                                                aria-controls={`collapse11${key}`}>
                                                                <h5 className="mbr-fonts-style display-55 text-start">
                                                                    <span className="sign mbr-iconfont mbri-arrow-down inactive ps-3"></span>
                                                                    {data[0]}
                                                                </h5>
                                                            </a>
                                                        </div>
                                                        <div id={`collapse-question-11${key}`} className="panel-collapse noScroll collapse container" role="tabpanel"
                                                            aria-labelledby={`heading-11${key}`} data-parent="#service-accordion_">
                                                            <div className="panel-body">
                                                                {
                                                                    data[1].map((el,index)=>
                                                                        <p key={index} className='mbr-text pb-3 mbr-regular mbr-fonts-style display-77 text-start'><span dangerouslySetInnerHTML={{__html: el}}/></p>
                                                                    )
                                                                }
                                                                    
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        {/* GENERAL FAQS - FIN*/}
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

export default LayoutProducts