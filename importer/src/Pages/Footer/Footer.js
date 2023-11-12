import React from 'react';
import './_footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <ul className="nav">
        <li className="nav__item">
          <a
            href="https://www.ibm.com/docs/en/environmental-intel-suite?topic=center-data-explorer"
            className="nav__link"
            target="_blank"
            rel="noreferrer"
          >
            IBM Project
          </a>
        </li>
        <li className="nav__item">
          <a
            href="https://tj.news/telegraph-journal"
            className="nav__link"
            target="_blank"
            rel="noreferrer"
          >
            JDI (BNI) project
          </a>
        </li>
      </ul>
      <p className="copyright">&copy; Copyright 2023 by Hamed Minaee.</p>
    </footer>
  );
}

export default Footer;
