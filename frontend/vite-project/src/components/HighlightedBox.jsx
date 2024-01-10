// HighlightedBox.js

import React from 'react';
import './HighlightedBox.css'; // Import your styles if you have any

const HighlightedBox = ({ datas }) => {
  return (
    <div className="highlighted-box">
      
      <div className="content">
        {datas.map(function(data){
            return <div>
                <h1>data.name</h1>
                <h2>data.gender</h2>
            </div>
        })}
        
      </div>
    </div>
  );
};

export default HighlightedBox;
