import React, { Suspense } from 'react';

import './all.scss';

const Footer = React.lazy(() => import('components/Footer'));

function All() {
  return (
    <body className="container">
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </body>
  );
}

export default All;
