import React from 'react';
import { PropTypes } from 'prop-types';

const Videos = ({
  stepNum, video,
}) => {
  const classNameWithNumber = `video ${stepNum}`;
  return (
    <div className="carousel-component">
      <video
        className={classNameWithNumber}
        playsInline
        autoPlay
        muted
        loop
      >
        <source
          className="video-source"
          src={video.url}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

Videos.propTypes = {
  stepNum: PropTypes.number.isRequired,
  video: PropTypes.shape({
    steps_id: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Videos;
