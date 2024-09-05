import React from 'react';

function Shape({ shape }) {
  const style = {
    width: '100px',
    height: '100px',
    margin: 'auto',
    backgroundColor: 'lightblue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    borderRadius: shape === 'circle' ? '50%' : shape === 'square' ? '0' : '0',
    clipPath: shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
  };

  return <div style={style}>{shape}</div>;
}

export default Shape;
