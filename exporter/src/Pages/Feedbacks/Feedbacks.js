import React from 'react';
import feedbackA from '../../img/amin-feedback.png';
import feedbackJ from '../../img/feedback-Jamie.png';
import './_feedback.scss';

function Feedbacks() {
  return (
    <section className="feedbacks">
      <div className="feedback">
        <img src={feedbackJ} alt="House 1" className="feedback__img" />
        <svg className="feedback__like">
          <use xlinkHref="img/sprite.svg#icon-heart-full" />
        </svg>
        <div className="feedback__location">
          <svg>
            <use xlinkHref="img/sprite.svg#icon-map-pin" />
          </svg>
          <p>Data Explorer</p>
        </div>
        <div className="feedback__rooms">
          <svg>
            <use xlinkHref="img/sprite.svg#icon-profile-male" />
          </svg>
          <p>Lead Designer</p>
        </div>
        <button className="btn feedback__btn">
          <a
            className="custom-a"
            href="https://www.linkedin.com/in/hamed-minaee-4074093b/"
            target="_blank"
            rel="noreferrer"
          >
            Check in Linkedin
            {' '}
          </a>
        </button>
      </div>

      <div className="feedback">
        <img src={feedbackA} alt="House 1" className="feedback__img" />
        <svg className="feedback__like">
          <use xlinkHref="img/sprite.svg#icon-heart-full" />
        </svg>
        <div className="feedback__location">
          <svg>
            <use xlinkHref="img/sprite.svg#icon-map-pin" />
          </svg>
          <p>Data Explorer</p>
        </div>
        <div className="feedback__rooms">
          <svg>
            <use xlinkHref="img/sprite.svg#icon-profile-male" />
          </svg>
          <p>Front End Developer</p>
        </div>

        <button className="btn feedback__btn">
          <a
            className="custom-a"
            href="https://www.linkedin.com/in/hamed-minaee-4074093b/"
            target="_blank"
            rel="noreferrer"
          >
            Check in Linkedin
          </a>
        </button>
      </div>
    </section>
  );
}

export default Feedbacks;
