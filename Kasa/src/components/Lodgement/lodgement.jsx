import React from 'react';
import Full from './Factory/full';
import Card from './Factory/card';

function Lodgement({ type, data }) {
  if (type === 'Full') {
    return <Full lodgement={data} />;
  } else if (type === 'Card') {
    return <Card lodgements={data}/>
  } else {
    throw new Error('Type de composant non pris en charge');
  }
}

export default Lodgement;
