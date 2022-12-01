import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import Booking from '../components/Booking'
import Link from 'next/link'
import Error404 from '../components/Error404'

const Custom404 = () => {
    return (
        <>
            <Head>
                <title>Marcela Caputo - Coaching y Educación Integral - Página no encontrada</title>
                <meta name="description" content="Página no encontrada - Error 404"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>


            <Layout>
                <Error404/>
            </Layout>
        </>
    )
}

export default Custom404