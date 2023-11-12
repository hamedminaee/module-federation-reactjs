import React from 'react';
import './_header.scss';

function Header() {
  return (
    <header className="header">
      <img src="../../img/logo1.png" alt="" className="header__logo" />
      <h3 className="heading-2">Full stack Developer and Devops:</h3>
      <h1 className="heading-1">Devops / Backend / Frontend</h1>
      <div className="header__seenon-text">
        Companies I have worked for (currently working at IBM)
      </div>
      <div className="header__seenon-logos">
        <div className="heading-3-white">IBM</div>
        <div className="heading-3-white">JDI(BNI)</div>
        <div className="heading-3-white">Siemens</div>
      </div>
    </header>
  );
}

export default Header;
