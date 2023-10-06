import React, { useState } from 'react';
import backArrow from '../../assets/logos/back-arrow.svg';
import upArrow from '../../assets/logos/up-arrow.svg';

function Collapse({ title, content, wrapperTag = 'p', className = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  }

  const CollapseContent = ({ children }) => {
    const WrapperTag = wrapperTag;
    return <WrapperTag className={`collapse-content ${className}`}>{children}</WrapperTag>;
  };

  return (
    <div className={`collapse ${isOpen ? 'open' : 'closed'} ${className}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <span>{title}</span>
        <span className={`arrow ${isOpen ? 'open' : 'closed'}`}>
          {isOpen ? <img src={backArrow}/> : <img src={upArrow}/>}
        </span>
      </div>
      {isOpen && <CollapseContent>{content}</CollapseContent>}
    </div>
  );
}

export default Collapse;

