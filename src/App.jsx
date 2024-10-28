import { useState } from 'react'
import './App.css'
import Navbar from './component/nav bar/navbar'
import Banner from './component/Banner/Banner'
import Blog from './component/Blogs/Blog'
import Footer from '../src/component/Footer/Footer';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Blog></Blog>
      <Footer></Footer>
    </>
  )
}

export default App
