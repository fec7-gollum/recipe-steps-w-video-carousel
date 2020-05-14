/* eslint-disable import/extensions */

import React from 'react';
import { PropTypes } from 'prop-types';
import Videos from './videos.jsx';

const Steps = ({
  hidden, number, text, videos,
}) => {
  const onClickPrev = () => {
    const x = document.getElementsByClassName(`carousel-component ${number}`);
    for (let i = 0; i < x.length; i += 1) {
      x[i].classList.remove('slide-right');
      x[i].classList.add('slide-left');
    }
  };

  const onClickNext = () => {
    const x = document.getElementsByClassName(`carousel-component ${number}`);
    for (let i = 0; i < x.length; i += 1) {
      x[i].classList.remove('slide-left');
      x[i].classList.add('slide-right');
    }
  };

  return (
    <div className="steps-individual-wrapper">
      <p className="steps-list-number">
        {number}
        .
      </p>
      <li className="steps-list-item">
        <p className="steps-list-text">
          {text}
        </p>

        {videos.length === 1
        && !hidden
        && (
        <div className="videos-wrapper">
            {videos.map((video) => <Videos video={video} />)}
        </div>
        )}
        {videos.length === 2
        && !hidden
        && (
          <div className="videos-wrapper">
            <div className="carousel-wrapper">
              <div className="carousel-cover-left" />
              {videos.map((video) => <Videos video={video} stepNum={number} />)}
              <div className="carousel-cover-right" />
            </div>
            <div className="controls-wrapper">
              <button type="button" className="button-prev" onClick={onClickPrev}>Previous</button>
              <button type="button" className="button-next" onClick={onClickNext}>Next</button>
              {/* <ol className="control-indicators-list">
                <li className="control-indicators" />
                <li className="control-indicators" />
              </ol> */}
            </div>
          </div>
        )}
      </li>
    </div>
  );
};

Steps.propTypes = {
  hidden: PropTypes.bool.isRequired,
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  videos: PropTypes.arrayOf(PropTypes.shape({
    steps_id: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
};

export default Steps;
