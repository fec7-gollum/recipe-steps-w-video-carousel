import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const CarouselComponent = styled.div`
  z-index: -1;
  width: 200%;
  height: 100%;
`;

const CarouselVideo = styled.video`
  z-index: 2;
  width: 36.5vw;
  object-fit: contain;
`;

const VideoSource = styled.source`
`;

const Videos = ({
  stepNum, video,
}) => {
  const classNameWithNumber = `carousel-component ${stepNum}`;
  return (
    <CarouselComponent className={classNameWithNumber}>
      <CarouselVideo
        playsInline
        autoPlay
        muted
        loop
      >
        <VideoSource
          src={video.url}
          type="video/mp4"
        />
      </CarouselVideo>
    </CarouselComponent>
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
