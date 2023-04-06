import React from 'react'
import logo from '../logo.svg';
import Navbar from './Navbar'
import Footer from './Footer'
import Products from './Products'


const Home = () => {
    return (
        <div>
        <img src={logo} className="App-logo" alt="logo" style={{ height: '100px', width: '100px' }} />

            <Navbar />
            <Products />
            <Footer />
        </div>
    )
}

export default Home