import React from 'react';
import './Tooltip.css';


const Tooltip = ({ text, children,direction}) => {
    return (
        <div className="tooltip">
        {children}
        <span className={`tooltip-text tooltip-${direction}`}>{text}</span>
      </div>
    );
  };
  
  export default Tooltip;
