import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import HighlightedBox from './components/HighlightedBox'
import BasicForm from './components/BasicForm'
import axios from "axios";
import BoxStorage from './components/BoxStorage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  const [datas, setDatas] = useState([])
  
  useEffect(()=>{
    axios.get('http://localhost:3000/tracker')
      .then(function(response){
        setDatas(response.data)
      
      })
  },[datas]);
  return (
    <>
    {/* <div>
      <Sidebar></Sidebar>
    </div> */}
    <Sidebar></Sidebar>
    <BoxStorage datas={datas}></BoxStorage>
    <BasicForm></BasicForm>
    {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<BasicForm></BasicForm>}></Route>
      <Route path='/form' element={<BasicForm></BasicForm>}></Route>
      <Route path='/view' element={<BoxStorage></BoxStorage>}></Route>
    </Routes>
    </BrowserRouter> */}
     

    </>
  )
}

export default App
