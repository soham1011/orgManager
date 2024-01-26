// HighlightedBox.js

import React from 'react';
import './HighlightedBox.css'; // Import your styles if you have any
import axios from 'axios';

const HighlightedBox = ({ data}) => {
 
  function updateHandler(){

  }

  function deleteHandler(){
    const name = "soham";
    axios.delete(`http://localhost:3000/deleteStaff/${name}`)
  }
  return (
    <div className="highlighted-box">
      
      <div className="content">
        
             <div>
                <h1>{data?.name}</h1>
                <h2>{data?.gender}</h2>
                <button onClick={ deleteHandler}>delete</button>
                <button onClick={updateHandler}>update</button>
            </div>
        
        
      </div>
    </div>
  );
};

export default HighlightedBox;






