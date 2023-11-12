import React from 'react';
import sprite from '../../img/sprite.svg';
import './_skills.scss';

function Skills() {
  return (
    <section className="features">
      <div className="feature">
        <svg className="feature__icon">
          <use xlinkHref={`${sprite}#icon-global`} />
        </svg>
        <h4 className="heading-4 heading-4--dark">Front End:</h4>
        <p className="feature__text">
          Reactjs / Redux / Javascript / HTML / CSS
        </p>
      </div>

      <div className="feature">
        <svg className="feature__icon">
          <use xlinkHref={`${sprite}#icon-trophy`} />
        </svg>
        <h4 className="heading-4 heading-4--dark">AWS Certificates: </h4>
        <p className="feature__text">
          AWS Cloud Practitioner (Active) / AWS Devops Engineer - Professional
          (Expired) / AWS Certified Solution Architect (Expired) / AWS Certified
          Developer (Expired)
        </p>
      </div>

      <div className="feature">
        <svg className="feature__icon">
          <use xlinkHref={`${sprite}#icon-map-pin`} />
        </svg>
        <h4 className="heading-4 heading-4--dark">Version Control: </h4>
        <p className="feature__text">Git / Bitbucket / Code Commit</p>
      </div>

      <div className="feature">
        <svg className="feature__icon">
          <use xlinkHref={`${sprite}#icon-key`} />
        </svg>
        <h4 className="heading-4 heading-4--dark">Backend:</h4>
        <p className="feature__text"> Nodejs / Python / Typescript </p>
      </div>

      <div className="feature">
        <svg className="feature__icon">
          <use xlinkHref={`${sprite}#icon-presentation`} />
        </svg>
        <h4 className="heading-4 heading-4--dark">Devops</h4>
        <p className="feature__text">
          {' '}
          AWS Services / Kubernetes / Openshift / Travis / Jenkins
        </p>
      </div>

      <div className="feature">
        <svg className="feature__icon">
          <use xlinkHref={`${sprite}#icon-lock`} />
        </svg>
        <h4 className="heading-4 heading-4--dark">Agile methedology</h4>
        <p className="feature__text">
          I have been working in agile enviroment for the past 10 years and I
          have run and managed many agile ceremonies such as scrum, retro,
          sprint planning and backlog refinement
        </p>
      </div>
    </section>
  );
}

export default Skills;
