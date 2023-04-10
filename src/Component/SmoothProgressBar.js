import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function SmoothProgressBar({value,num}) {
  return (
    
    <ProgressBar  now={num} label={`${""}`} />
  );
}

export default SmoothProgressBar;


