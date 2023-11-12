import React, { Suspense, useState, useEffect } from 'react';

import './all.scss';

const Footer = React.lazy(() => import('components/Footer'));

function All() {
  const [allData, setAllData] = useState([]);

  useEffect(async () => {
    const resp = await fetch('https://reqres.in/api/users?page=2');
    const data = await resp.json();
    console.log(data);
    setAllData(data);
  }, []);
  const getCards = () => {
    console.log('1111');
    if (allData && allData.length === 0) {
      return (<div>Loading</div>);
    }
    const cards = allData.data.map((item) => (
      <Suspense fallback={null}>
        <Footer props={item} />
      </Suspense>
    ));
    console.log('2222');
    console.log(cards);
    return cards;
  };
  return (
    <body className="container">
      {getCards()}
    </body>
  );
}

export default All;
