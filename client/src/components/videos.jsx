import React from 'react';
import { PropTypes } from 'prop-types';

function Videos({ video }) {
  return (
    <div className="carousel-component">
      <video
        playsInline
        autoPlay
        muted
        loop
      >
        <source
          src={video.url}
          type="video/mp4"
        />
      </video>
    </div>
  );
}

Videos.propTypes = {
  video: PropTypes.shape({
    steps_id: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Videos;
