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
  width: 58vw;
  height: 100%;
  margin-left: -58vw;
`;
const ControlsWrapper = styled.div`
  display: grid;
  grid-template-columns: 70% 15% 15%;
`;

const ButtonPrev = styled.button`
& {
  background: none!important;
  border: none;
  padding: 0 !important;
  cursor: pointer;
  grid-column: 2 / 3;
  text-align: right;
  font-size: 0.8em;
  text-transform: uppercase;
}
&:focus {
  outline: 0;
}
`;
const ButtonNext = styled.button`
& {
  background: none!important;
  border: none;
  padding: 0 !important;
  cursor: pointer;
  grid-column: 3 / 4;
  text-align: right;
  font-size: 0.8em;
  text-transform: uppercase;
}
&:focus {
  outline: 0;
}
`;

const IndicatorsWrapper = styled.ol`
  grid-column: 1 / 4;
  display: flex;
  justify-content: center;
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const Indicators = styled.li`
& {
  cursor: pointer;
  height: 5px;
  width: 5px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 100%;
  display: inline-block;
  transition: background-color 0.6s ease;
} &:active {
  background-color: #717171;
} &:hover {
  background-color: #717171;
} &:focus {
  outline: 0;
}
`;

class Steps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSlid: false,
      nextActive: true,
      prevActive: false,
    };
    this.toggleSlide = this.toggleSlide.bind(this);
  }

  toggleSlide() {
    const {
      isSlid, nextActive, prevActive,
    } = this.state;
    this.setState({
      isSlid: !isSlid,
    }, this.setState({
      nextActive: !nextActive,
    }, this.setState({
      prevActive: !prevActive,
    })));
  }

  render() {
    const {
      hidden, number, text, videos,
    } = this.props;
    const { isSlid } = this.state;
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
                {videos.map((video) => <Videos video={video} isSlid={isSlid} />)}
                <CarouselCover />
              </CarouselWrapper>
              <ControlsWrapper>
                <ButtonPrev type="button" onClick={this.toggleSlide}> &larr; Previous </ButtonPrev>
                <ButtonNext type="button" onClick={this.toggleSlide}> Next &rarr; </ButtonNext>
                <IndicatorsWrapper>
                  <Indicators onClick={this.toggleSlide} />
                  <Indicators onClick={this.toggleSlide} />
                </IndicatorsWrapper>
              </ControlsWrapper>
            </VideoWrapper>
          )}
        </StepsListItem>
      </StepsIndividualWrapper>
    );
  }
}

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
