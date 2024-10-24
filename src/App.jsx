import { useState } from 'react'
import Navbar from '../src/components/Navbar.jsx'
import Home from './section/Home.jsx'
import InformasiPublik from './section/InformasiPublik.jsx'
import Layanan from './section/Layanan.jsx'
import Produk from './section/Produk.jsx'
import RencanaTerbit from './section/RencanaTerbit.jsx'
import ArticlePage from './section/ArticlePage.jsx'
// import ChatBot from './components/Chatbot.jsx'
import ChatbotWidget from './components/ChatbotWidget.jsx'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <InformasiPublik></InformasiPublik>
    <Layanan></Layanan>
    <Produk></Produk>
    <RencanaTerbit></RencanaTerbit>
    <ArticlePage></ArticlePage>
    {/* <ChatBot></ChatBot> */}
    <ChatbotWidget></ChatbotWidget>


    </>
  )
}

export default App
