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
                <title>Marcela Caputo Coaching</title>
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
