import React from 'react';
import Full from './Factory/full';
import Card from './Factory/card';

function Lodgement({ type, data }) {
  if (type === 'Full') {
    return <Full location={data} />;
  } else if (type === 'Card') {
    return (
      <div id='card'>
        {data.map((annonce) => (
          <Card
            key={annonce.id}
            location={annonce}
          />
        ))}
      </div>
    );
  } else {
    throw new Error('Type de composant non pris en charge');
  }
}

export default Lodgement;
