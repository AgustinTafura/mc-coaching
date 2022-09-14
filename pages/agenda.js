import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import Booking from '../components/Booking'

const conoceme = () => {
    return (
        <>
            <Head>
                <title>Marcela Caputo Coaching</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Layout>
                <Booking/>
            </Layout>
        </>
    )
}

export default conoceme