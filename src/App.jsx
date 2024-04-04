import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Table from "./components/Table/Table"
import './App.css'


function App() {


  return (
    <>
      <Header/>
      <Banner/>
      <Table/>
    </>
  )
}

export default App
