import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import Booking from '../components/Booking'

const conoceme = () => {
    return (
        <>
            <Head>
                <title>Marcela Caputo - Coaching y Educación Integral - Solicitá una sesion gratuita</title>
                <meta name="description" content="Agenda tu primera cita gratuita de 30 minutos, para contarme sobre tu consulta y obtener mayor información sobre mis cursos"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>


            <Layout>
                <Booking/>
            </Layout>
        </>
    )
}

export default conoceme