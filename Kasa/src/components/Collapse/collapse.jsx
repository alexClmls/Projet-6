import React, { useState, useRef } from 'react';
import upArrow from '../../assets/logos/up-arrow.svg';
import './collapse.scss';

function Collapse({ title, content, wrapperTag = 'p', className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  }

  const CollapseContent = ({ children }) => {
    const WrapperTag = wrapperTag;
    return (
      <WrapperTag>
        {children}
      </WrapperTag>
    );
  };

  return (
    <div className={`collapse ${isOpen ? 'open' : 'closed'} ${className}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <span>{title}</span>
        <span className={`arrow ${isOpen ? 'open' : 'closed'}`}>
          <img src={upArrow} alt="Flèche" className={`rotate ${isOpen ? 'rotate-open' : 'rotate-closed'}`} />
        </span>
      </div>
      <div
        ref={contentRef}
        className={`collapse-content ${className}`}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0',
          overflow: 'hidden',
          transition: 'max-height 0.5s',
        }}
      >
        <CollapseContent>
          {content}
        </CollapseContent>
      </div>
    </div>
  );
}

export default Collapse;
