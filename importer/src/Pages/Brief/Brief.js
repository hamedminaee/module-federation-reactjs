import React from 'react';
import './_brief.scss';
import hamedPhoto from '../../img/Hamed-photo.jpg';

function Brief() {
  return (
    <div className="brief">
      <h3 className="heading-3-medium">Senior Software Developer</h3>
      <div className="brief__list">
        <img src={hamedPhoto} alt="" className="brief__img" />
        <div className="brief__details">
          <h4 className="heading-4 heading-4--light">Hamed Minaee</h4>
          <p className="brief__sold">Software Developer & IT Consultant</p>
        </div>
      </div>
    </div>
  );
}

export default Brief;
