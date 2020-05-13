/* eslint-disable import/extensions */

import React from 'react';
import { PropTypes } from 'prop-types';
import Videos from './videos.jsx';

const Steps = ({
  hidden, number, text, videos,
}) => (
  <div>
    <p>
      {number}
      .
    </p>
    <li className="steps-list-item">
      {text}
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
            {videos.map((video) => <Videos video={video} />)}
            <div className="carousel-controls">
              <button type="button">Previous</button>
              <button type="button">Next</button>
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
