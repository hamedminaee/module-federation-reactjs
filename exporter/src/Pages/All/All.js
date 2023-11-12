import React from 'react';

import './all.scss';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Brief from '../Brief/Brief';
import Skills from '../Skills/Skills';
import Feedbacks from '../Feedbacks/Feedbacks';
import Footer from '../Footer/Footer.jsx';
import Bio from '../Bio/Bio';
import StoryPic from '../Bio/StoryPic';

function All() {
  return (
    <body className="container">
      <Sidebar />
      <Header />
      <Brief />
      <Skills />
      <StoryPic />
      <Bio />

      <Feedbacks />
      <Footer />
    </body>
  );
}

export default All;
