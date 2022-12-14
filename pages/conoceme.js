import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import Me from '../components/Me'

const conoceme = () => {
    return (
        <>
            <Head>
                <title>Marcela Caputo - Coaching y Educación Integral - Biografía y Experiencias</title>
                <meta name="description" content="Conocé más acerca de mi vida, mi formación y experiencia."/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Layout>
                <Me/>
            </Layout>
        </>
    )
}

export default conoceme