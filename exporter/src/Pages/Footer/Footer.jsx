import React from 'react';
import './_footer.scss';

function Footer({ props }) {
  return (
    <div className="card">
      <img src={props.avatar} alt="" />
      <p>
        {props.first_name}
      </p>
    </div>
  );
}

export default Footer;
