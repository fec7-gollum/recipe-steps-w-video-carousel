import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';


const CarouselComponent = styled.div`
  z-index: -1;
  width: 200%;
  height: 100%;
  transition: transform .6s cubic-bezier(.55,.085,.68,.53);
  transform: ${(props) => (props.isSlid ? 'translateX(-50%)' : 'translateX(0%)')};
`;

const CarouselVideo = styled.video`
  z-index: 2;
  width: 58vw;
  object-fit: contain;
`;

const VideoSource = styled.source`
`;

const Videos = ({
  video, isSlid,
}) => (
  <CarouselComponent isSlid={isSlid}>
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


Videos.propTypes = {
  isSlid: PropTypes.bool.isRequired,
  video: PropTypes.shape({
    steps_id: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Videos;
