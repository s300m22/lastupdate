import React from 'react'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'
const layout = ({children}) => {
    return (
        <div>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />
                <title>Home</title>
                <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.png" />
                <link rel="stylesheet" href="/plugins/datatables/datatables.min.css"/>
                

               
            </Head>
            <div className="main-wrapper">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default layout
