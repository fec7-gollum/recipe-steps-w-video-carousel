/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { PropTypes } from 'prop-types';
import Videos from './videos.jsx';


function Steps(props) {
  let videos;
  if (props.videos.length === 1) {
    videos = (
      <div className="videos-wrapper">
        {props.videos.map((video) => <Videos video={video} />)}
      </div>
    );
  } else if (props.videos.length === 2) {
    videos = (
      <div className="videos-wrapper">
        <div className="carousel-wrapper">
          {props.videos.map((video, index) => <Videos num={index} video={video} />)}
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
    <li className="steps-list-item">
      {props.text}
      {videos}
    </li>
  );
}

Steps.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape({
    steps_id: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  text: PropTypes.string.isRequired,
};

export default Steps;
