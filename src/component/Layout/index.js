import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import Head from 'next/head'


  function index({ children }) {
  return (
    <div className="container">
       <Head>
        <title>MAS</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous"></link>
      </Head>
      <Nav />
      <main className="container_inner">
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default index
