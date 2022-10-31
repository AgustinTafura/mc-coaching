import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import { ParallaxBanner } from 'react-scroll-parallax';
import { useRouter } from "next/router"
import { sections } from '../data'

const LayoutServices = ({ children, ...pageProps }) => {
    const router = useRouter()
    const {asPath} = router
    const urlTitle = asPath.split('/')[2].replace("-", " ")
    const services = sections.find(service=>service.name === 'servicios')
    const service = services.list.find(service=>service.name === urlTitle)

    return (
    <>
        <Head>  
            <title>Marcela Caputo Coaching</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Layout>
            <ParallaxBanner 
                layers={[{ image: service.img, speed: -25, expanded: false, aspectratio: '2 / 1' }]}
                className="aspect-[2/1] cid-rT0frzju8E " data-sortbtn="btn-primary"
            >
                        <div className="mbr-overlay" style={{backgroundColor: "rgb(0, 0, 0)", opacity: "0.6"}}></div>
                        <div className="container align-left">
                            <div className="row justify-content-center">
                                <div className="mbr-black col-md-12 col-lg-12">
                                    
                                    <h1 className="mbr-section-title mbr-bold mbr-white pb-2 mbr-fonts-style display-11 text-capitalize">
                                        <span>
                                            &nbsp;{service.name.split(' ')[0]}&nbsp;
                                            <br/>
                                            &nbsp;{service.name.split(' ')[1]}&nbsp;
                                            <br/>
                                        </span>
                                    </h1>
                                    <p className="mbr-text pb-4 mbr-white mbr-regular mbr-fonts-style display-77 col-lg-7">
                                        {service.description}
                                    </p>
                        </div>
                    </div>
                </div>
            </ParallaxBanner>
            {children}
        </Layout>           
  </>
  )
}

export default LayoutServices