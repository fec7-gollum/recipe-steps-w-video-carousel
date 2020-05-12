/* eslint-disable import/extensions */

import React from 'react';
import { PropTypes } from 'prop-types';
import Videos from './videos.jsx';

const Steps = ({
  hidden, number, text, videos,
}) => {
  let vids;

  if (hidden) {
    vids = false;
  } else if (videos.length === 1) {
    vids = (
      <div className="videos-wrapper">
        {videos.map((video) => <Videos video={video} />)}
      </div>
    );
  } else if (videos.length === 2) {
    vids = (
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

    );
  }
  return (
    <div>
      <p>
        {number}
        .
      </p>
      <li className="steps-list-item">
        {text}
        {vids}
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
