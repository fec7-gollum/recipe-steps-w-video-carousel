/* eslint-disable import/extensions */

import React from 'react';
import { PropTypes } from 'prop-types';
import Videos from './videos.jsx';

const Steps = ({
  hidden, number, text, videos,
}) => {
  const onClick = () => {
    // const x = document.getElementsByClass(`carousel-component ${number}`);

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
              <div className="slide">
                {videos.map((video) => <Videos video={video} stepNum={number} />)}
              </div>
              <div className="carousel-cover-right" />
            </div>
            <div className="controls-wrapper">
              <button type="button" onClick={onClick()}>Previous</button>
              <button type="button" onClick={onClick()}>Next</button>
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
