import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import HighlightedBox from './components/HighlightedBox'
import BasicForm from './components/BasicForm'
import axios from "axios";
function App() {
  const [datas, setDatas] = useState([])
  
  useEffect(()=>{
    axios.get('http://localhost:3000/tracker')
      .then(function(response){
        setDatas(response.data)
        console.log(datas);
      })
  },[]);
  return (
    <>
      <Sidebar></Sidebar>
      <BasicForm></BasicForm>
    </>
  )
}

export default App
