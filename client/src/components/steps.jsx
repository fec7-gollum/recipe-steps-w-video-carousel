/* eslint-disable import/extensions */

import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import Videos from './videos.jsx';


const StepsIndividualWrapper = styled.div`
  padding-bottom: 2vh;
  margin-bottom: 1.5vh;
  border-bottom: 5px solid black;
`;

const StepsListNumber = styled.p`
  font-size: 3em;
  margin: 0px;
  padding: 0px;
`;

const StepsListItem = styled.li`
  word-wrap: break-word;
`;
const StepsListText = styled.p`
`;

const VideoWrapper = styled.div`
  overflow: hidden;
`;

const CarouselWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const CarouselCover = styled.div`
  z-index: 10;
  background-color:white;
  width: 36.5vw;
  height: 100%;
  margin-left: -36.5vw;
`;

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
    <StepsIndividualWrapper>
      <StepsListNumber>
        {number}
        .
      </StepsListNumber>
      <StepsListItem>
        <StepsListText>
          {text}
        </StepsListText>

        {videos.length === 1
        && !hidden
        && (
        <VideoWrapper>
            {videos.map((video) => <Videos video={video} />)}
        </VideoWrapper>
        )}
        {videos.length === 2
        && !hidden
        && (
          <VideoWrapper>
            <CarouselWrapper>
              <CarouselCover />
              {videos.map((video) => <Videos video={video} stepNum={number} />)}
              <CarouselCover />
            </CarouselWrapper>
            <div className="controls-wrapper">
              <button type="button" className="button-prev" onClick={onClickPrev}>Previous</button>
              <button type="button" className="button-next" onClick={onClickNext}>Next</button>
              {/* <ol className="control-indicators-list">
                <li className="control-indicators" />
                <li className="control-indicators" />
              </ol> */}
            </div>
          </VideoWrapper>
        )}
      </StepsListItem>
    </StepsIndividualWrapper>
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
