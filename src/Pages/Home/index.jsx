import React from 'react'
import Categories from '../../components/Categories'
import Footer from '../../components/Footer'
import Navbar from '../../components/navbar'
import OrderDetail from '../../components/OrderDetails'
import Welcome from '../../components/Welcome'


const Home = () => {
  return (
    <>
      <Navbar/>
      <div style={{marginTop:"104px"}}>

        <OrderDetail/>
       <Welcome/>
       <Categories/>
       <Footer/>
      </div>
    </>
  )
}

export default Home
