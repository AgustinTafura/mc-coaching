import Image from 'next/image'
import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import HomeParallax from '../components/HomeParallax'
import HomeAboutMe from '../components/HomeAboutMe'
import HomeServices from '../components/HomeServices'
import Frase from '../components/Frase'

const index = () => {

    return (
        <>
            <Head>
                <title>Marcela Caputo Coaching</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Layout>
                <HomeParallax/>
                <HomeServices/>
                <Frase/>
                <HomeAboutMe/>
            </Layout>
        </>
    )
}

export default index
