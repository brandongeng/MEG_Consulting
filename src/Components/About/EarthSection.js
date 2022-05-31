import styled from "styled-components";
import earth from "../../Images/About/help.mp4";



const SectionContainer = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: #cce1cf;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  position: sticky;
  flex-wrap: wrap;
  top: -1px;
  max-width: 100%;
`;

const TitleTextContainer = styled.div`
  background-color: transparent;
  width: fit-content;
  max-width: 600px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  margin-right: 5vw;
`;

const TitleText = styled.h1`
  font-size: 8vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  color: transparent;
  font-weight: 900;
  line-height: 82%;
  color: white;
  text-align: right;
`;

const Spacer = styled.div`
  width: 100%;
  height: 50vh;
`;

const VideoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: -1;
  max-width: 100%;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: 0;
`;

function EarthSection() {
  return (
    <SectionContainer>
      <TitleTextContainer>
        <TitleText>DOWN TO EARTH PEOPLE</TitleText>
      </TitleTextContainer>
      <VideoContainer>
        <Video autoPlay playsInline loop muted>
          <source src={earth} type="video/mp4" />
        </Video>
      </VideoContainer>
      <Spacer />
    </SectionContainer>
  );
}

export default EarthSection;
