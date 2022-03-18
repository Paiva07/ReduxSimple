import './Card.css';
import React from 'react';

function getColor(props) {
  if (props.red) return 'Red';
  if (props.green) return 'Green';
  if (props.blue) return 'Blue';
  if (props.purple) return 'Purple';
  return '';
}

const Card = ({ title, children, ...props }) => {
  return (
    <div className={`Card ${getColor(props)}`}>
      <div className="Header">
        <span className="Title">{title}</span>
      </div>
      <div className="Content">{children}</div>
    </div>
  );
};

export default Card;
