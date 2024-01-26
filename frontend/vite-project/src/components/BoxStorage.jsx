// BoxStorage.js

import React from 'react';
import './BoxStorage.css'; // Import your styles
import HighlightedBox from './HighlightedBox';
import axios from 'axios';

const BoxStorage = ({ datas,setData }) => {
  // function deleteHandler(index){
  //   const name = "soham";
  //   axios.delete(`http://localhost:3000/deleteStaff/${name}`)
  //   // datas.splice(index, 1)
  //   console.log(datas)
  //   setData(datas)
  // }
  return (
    <div className='box-container'>


    <div className="box-storage">
      {datas.map((data,index) => (
          <HighlightedBox  data={data} />
          ))}
    </div>
        </div>
  );
};

export default BoxStorage;
