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
  dispaly: flex;
  justify-content: flex-end;
`;
const ButtonPrev = styled.button`
& {
  background: none!important;
  border: none;
  padding: 0 !important;
  text-decoration: underline;
  cursor: pointer;
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
  text-decoration: underline;
  cursor: pointer;
}
&:focus {
  outline: 0;
}
`;
class Steps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSlid: false,
    };
    this.toggleSlide = this.toggleSlide.bind(this);
  }

  toggleSlide() {
    const { isSlid } = this.state;
    this.setState({
      isSlid: !isSlid,
    });
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
                {/* <ol className="control-indicators-list">
                  <li className="control-indicators" />
                  <li className="control-indicators" />
                </ol> */}
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
