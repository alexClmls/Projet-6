import React, { useState } from 'react';
import backArrow from '../../assets/logos/back-arrow.svg';
import upArrow from '../../assets/logos/up-arrow.svg';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={"collapse ${isOpen ? 'open' : 'closed'}"}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <span>{title}</span>
        <span className={`arrow ${isOpen ? 'open' : 'closed'}`}>
          {isOpen ? <img src={backArrow}/> : <img src={upArrow}/>}
        </span>
      </div>
      {isOpen && (
        <ul className="collapse-content">
          <li>{content}</li>
        </ul>
      )}
    </div>
  );
}

export default Collapse;
