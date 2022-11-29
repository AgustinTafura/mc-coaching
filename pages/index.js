import Image from 'next/image'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import HomeParallax from '../components/HomeParallax'
import HomeAboutMe from '../components/HomeAboutMe'
import HomeServices from '../components/HomeServices'
import Frase from '../components/Frase'
import { Spinner } from '../components/Spinner'

const Index = ({...pageProps}) => {
    const {firstEnter,setFirstEnter} = pageProps
    const [loading, setLoading] = useState(true)    
    useEffect(() => {
        console.log(firstEnter)
        setTimeout(() => {
            setLoading(false),
            setFirstEnter(false)
        },  2500);
      
    
      return () => {
        
      }
    }, [])


    if (loading && firstEnter){
        return (
          <Spinner/>
        )
      }

    return (
        <>
            <Head>
                <title>Marcela Caputo - Coaching y Educación Integral</title>
                <meta name="description" content="Sesiones online o presencial de Coaching Personal, Coaching Vocacional, Coaching Educativo, Coaching Efectivo y Coaching para Emprendedores. Nos centramos en el desarrollo de las Habilidades Blandas, la Inteligencia Emocional y la Comunicación Efectiva como áreas transversales para aprender nuevos hábitos, regular emociones y mejorar los vínculos interpersonales en todos los ámbitos de desempeño de las personas."/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Layout>
                <HomeParallax/>
                <Frase/>
                <HomeServices/>
                <HomeAboutMe/>
            </Layout>
        </>
    )
}

export default Index
