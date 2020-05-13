/* eslint-disable import/extensions */

import React from 'react';
import { PropTypes } from 'prop-types';
import Videos from './videos.jsx';

const Steps = ({
  hidden, number, text, videos,
}) => {
  const onClickNext = (id) => {
    // document.getElementById(id).classList.add('active');
    // // classList.remove("active");
  };
  const onClickPrev = (id) => {
    // element.classList.add("active");
    // classList.remove("active");
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
              {videos.map((video) => <Videos video={video} stepNum={number} />)}
              <div className="carousel-controls">
                <button type="button" onClick={onClickNext}>Previous</button>
                <button type="button" onClick={onClickPrev}>Next</button>
              </div>
              <ol className="carousel-indicators-list">
                <li className="carousel-indicators" />
                <li className="carousel-indicators" />
              </ol>
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
