import React from 'react'
import Head from 'next/head'
import Layout from './Layout'
import { ParallaxBanner } from 'react-scroll-parallax';
import { useRouter } from "next/router"
import { sections } from '../data'
import SectionInfo from './SectionInfo'
import Link from 'next/link'



const LayoutProducts = ({ children, ...pageProps }) => {

    const {productName} = pageProps
    const router = useRouter()
    const {asPath} = router
    const urlTitle = asPath.split('/')[2].replace("-", " ")
    const services = sections.find(service=>service.name === 'servicios')
    const service = services.list.find(service=>service.name === urlTitle)
    const product = service.products.find(p=>p.title === productName)

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
                                {
                                    product.shortDescription.map((element,index)=>{
                                        return (
                                            
                                                index === 0 ?
                                                <h3 key={index} className="mbr-fonts-style display-55 text-left mb-3" style={{color: "rgb(108, 91, 103)"}}>
                                                    {element}
                                                </h3>
                                                
                                                :   (<p key={index} className={`mbr-text mbr-regular mbr-fonts-style display-77 ${index === 0 ?'pb-0' : 'pb-2'}`}>
                                                        <span dangerouslySetInnerHTML={{__html: element}}/>
                                                    </p>)
                                            
                                        )
                                    })
                                }
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
                                                        <p key={i} className="display-77 mbr-black mbr-fonts-style mbr-regular mbr-text">
                                                            {element}
                                                        </p>
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

                        <div className="col-lg-4 mx-auto mbr-form position-relative" data-form-type="formoid">
                            <div className='sticky-sidebar'>
                                <div className="form-col sticky-item" data-form-type="formoid">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <h6 className="mbr-section-subtitle mbr-fonts-style display-44">
                                            DATOS DEL CURSO  
                                        </h6>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <h5 className="mbr-fonts-style display-55 text-start" style={{color: 'var(--bs-secondary)'}}>
                                            PRECIOS
                                        </h5>
                                    </div>
                                    <div className='pt-3'>
                                        <p className="mbr-text pb-3 mbr-regular mbr-fonts-style display-77 align-left">
                                            BLA BLA BLA
                                        </p>
                                    </div>
                                    <Link className="col-lg-12 col-md-12 col-sm-12 align-center" href='/agenda'>
                                        <a>
                                            <button type="button" className="btn btn-primary display-44">COMPRAR</button>
                                        </a>
                                    </Link>
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
                                                                        : <p key={index} className='mbr-text pb-3 mbr-regular mbr-fonts-style display-77 text-start'>{el}</p>
                                                                    
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