import React from 'react';
import './_bio.scss';
import s4 from '../../img/software-4.jpg';
import s2 from '../../img/software-2.jpg';

function StoryPic() {
  return (
    <div className="bio__pictures">
      <img src={s2} alt="Couple with new house" className="bio__img--1" />
      <img src={s4} alt="New house" className="bio__img--2" />
    </div>
  );
}

export default StoryPic;
