import styled from "styled-components";
import { keyframes } from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../Components/General/Nav";
import WebButton from "../Components/General/WebButton";
import ClientButton from "../Components/General/ClientButton";
import SocialButton from "../Components/General/SocialButton";

const GoToHomePage = keyframes`
    0% { 
      opacity: 1;
      height: 100vh;
    };
    99% { 
      opacity: 0;
      height: 100vh;
    };
    100% { 
      opacity: 0;
      height: 0vh;
    };

`;

const LoadContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation-name: ${GoToHomePage};
  animation-delay: 2.5s;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  position: absolute;
  top: 0;
  right: 0;
`;

const TextContainer = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-size: 3vmin;
`;

const TextShiftTop = keyframes`
  0% {transform: translate(0,37.5%);}
  100% {transform: translate(0,100%);}
`;

const TextShiftBottom = keyframes`
  0% {transform: translate(0,-37.5%);}
  100% {transform: translate(0,-100%);}
`;
const HomeTitleTextTop = styled.h1`
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  -webkit-text-stroke: 0.02em #dbbdd3;
  text-decoration: none;
  color: transparent;
  font-weight: 900;
  line-height: 80%;
  padding-bottom: 0.5%;
  animation-name: ${TextShiftTop};
  animation-delay: 0.5s;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

const HomeTitleTextBottom = styled.h1`
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  -webkit-text-stroke: 0.02em #dbbdd3;
  text-decoration: none;
  color: transparent;
  font-weight: 900;
  line-height: 80%;
  padding-bottom: 0.5%;
  animation-name: ${TextShiftBottom};
  animation-delay: 0.5s;
  animation-duration: 2s;
  animation-fill-mode: forwards;
`;

const HomeTitleTextCenter = styled.h1`
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  -webkit-text-stroke: 0.02em #dbbdd3;
  text-decoration: none;
  color: #dbbdd3;
  font-weight: 900;
  line-height: 82%;
  padding-bottom: 0.5%;
`;

const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const HomePageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #dbbdd3;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  position: relative;
  transition: background-color 0.2s;
`;

const HomeNavContainer = styled.div`
  font-size: 3vmin;
  white-space: nowrap;
  cursor: pointer;
`;
const HomeNavText = styled.h1`
  & {
    font-size: 6vmin;
    font-family: futura-pt, sans-serif;
    margin: 0;
    padding: 0;
    color: #1e1e1e;
    font-weight: 900;
    background-clip: text;
    -webkit-background-clip: text;
    position: relative;
    line-height: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
    text-align: center;
  }
  &:before {
    -webkit-text-stroke: 0;
    content: attr(data-title);
    background: #dbbdd3;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 0%;
    transition: all 0.3s ease-out;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  &:hover::before {
    width: 100%;
  }
`;

const LineBreak = styled.div`
  width: 100%;
  height: 0;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  color: #1e1e1e;
  display: flex;
  align-items: center;
  transition: all 0.2s;
`;

const ScrollContainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: hidden;
`;

const Scroll = keyframes`
  from {
    transform: translateX(100vw);
  }
  to {
    transform: translateX(-100%);
  }
`;

const ScrollText = styled.h1`
  display: inline-block;
  width: fit-content;
  font-size: 6vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-weight: 900;
  color: #dbbdd3;
  animation-name: ${Scroll};
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 4.5vmax;
  left: 4.5vmax;
`

const SocialContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content:center;
  bottom: 3vmax;
  right: 4.5vmax;
`

const HorizontalSpacer = styled.div`
  height:1px;
  width:3vh;
  background-color:#1e1e1e;
`

const VerticalSpacer = styled.div`
width:100%;
height:1vh;
` 

function App() {
  const [scrollID, setScrollID] = useState(0);

  const scrollStatue = [
    "",
    "ABOUT US",
    "OUR PROJECTS",
    "OUR TEAM",
    "APPLICATION"
  ];

  return (
    <HomeContainer>
      <HomePageContainer
        style={{ backgroundColor: scrollID !== 0 ? "#1e1e1e" : "#DBBDD3" }}
      >

        <ButtonContainer>
          <WebButton visible={scrollID} />
          <VerticalSpacer/>
          <ClientButton  visible={scrollID} />
        </ButtonContainer>

        <SocialContainer>
          <SocialButton visible = {scrollID} social = {0}/>
          <HorizontalSpacer/>
          <SocialButton visible = {scrollID} social = {1}/>
          <HorizontalSpacer/>
          <SocialButton visible = {scrollID} social = {2}/>

        </SocialContainer>

        <ScrollContainer style={{ top: "15vh" }}>
          <ScrollText
            style={{
              visibility: scrollID !== 0 ? "visible" : "hidden",
              animationDelay: "-6s"
            }}
          >
            {scrollStatue[scrollID]}
          </ScrollText>
        </ScrollContainer>
        <ScrollContainer style={{ top: "25vh" }}>
          <ScrollText
            style={{
              visibility: scrollID !== 0 ? "visible" : "hidden",
              animationDelay: "-2s",
              animationDirection: "reverse"
            }}
          >
            {scrollStatue[scrollID]}
          </ScrollText>
        </ScrollContainer>
        <ScrollContainer style={{ top: "65vh" }}>
          <ScrollText
            style={{
              visibility: scrollID !== 0 ? "visible" : "hidden",
              animationDelay: "-19s"
            }}
          >
            {scrollStatue[scrollID]}
          </ScrollText>
        </ScrollContainer>
        <ScrollContainer style={{ top: "75vh" }}>
          <ScrollText
            style={{
              visibility: scrollID !== 0 ? "visible" : "hidden",
              animationDelay: "-18s",
              animationDirection: "reverse"
            }}
          >
            {scrollStatue[scrollID]}
          </ScrollText>
        </ScrollContainer>
        <ScrollContainer style={{ top: "85vh" }}>
          <ScrollText
            style={{
              visibility: scrollID !== 0 ? "visible" : "hidden",
              animationDelay: "-12s"
            }}
          >
            {scrollStatue[scrollID]}
          </ScrollText>
        </ScrollContainer>
        <LogoContainer style={{ visibility: scrollID === 0 ? "100%" : "0%" }}>
          <Nav color={0} home={0} />
        </LogoContainer>
        <LogoContainer style={{ opacity: scrollID !== 0 ? "100%" : "0%" }}>
          <Nav color={1} home={0} />
        </LogoContainer>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <HomeNavContainer>
            <HomeNavText
              data-title="ABOUT US"
              onMouseEnter={() => {
                setScrollID(1);
              }}
              onMouseLeave={() => {
                setScrollID(0);
              }}
            >
              {" "}
              ABOUT US{" "}
            </HomeNavText>
          </HomeNavContainer>
        </Link>
        <LineBreak />
        <Link to="/projects" style={{ textDecoration: "none" }}>
          <HomeNavContainer>
            <HomeNavText
              data-title="OUR PROJECTS"
              onMouseEnter={() => {
                setScrollID(2);
              }}
              onMouseLeave={() => {
                setScrollID(0);
              }}
            >
              OUR PROJECTS
            </HomeNavText>
          </HomeNavContainer>
        </Link>
        <LineBreak />
        <Link to="/team" style={{ textDecoration: "none" }}>
          <HomeNavContainer>
            <HomeNavText
              data-title="OUR TEAM"
              onMouseEnter={() => {
                setScrollID(3);
              }}
              onMouseLeave={() => {
                setScrollID(0);
              }}
            >
              OUR TEAM
            </HomeNavText>
          </HomeNavContainer>
        </Link>
        <LineBreak />
        <Link to="/application" style={{ textDecoration: "none" }}>
          <HomeNavContainer>
            <HomeNavText
              data-title="APPLICATION"
              onMouseEnter={() => {
                setScrollID(4);
              }}
              onMouseLeave={() => {
                setScrollID(0);
              }}
            >
              APPLICATION
            </HomeNavText>
          </HomeNavContainer>
          </Link>
      </HomePageContainer>
      <LoadContainer>
        <TextContainer style={{ transform: "translate(0,75%)" }}>
          <HomeTitleTextTop style={{ transform: "translate(0,37.5%)" }}>
            MEG CONSULTING
          </HomeTitleTextTop>
        </TextContainer>
        <TextContainer style={{ transform: "translate(0,37.5%)" }}>
          <HomeTitleTextTop style={{ transform: "translate(0,37.5%)" }}>
            MEG CONSULTING
          </HomeTitleTextTop>
        </TextContainer>
        <TextContainer>
          <HomeTitleTextTop style={{ transform: "translate(0,37.5%)" }}>
            MEG CONSULTING
          </HomeTitleTextTop>
        </TextContainer>
        <TextContainer>
          <HomeTitleTextCenter>MEG CONSULTING</HomeTitleTextCenter>
        </TextContainer>
        <TextContainer>
          <HomeTitleTextBottom style={{ transform: "translate(0, -37.5%)" }}>
            MEG CONSULTING
          </HomeTitleTextBottom>
        </TextContainer>
        <TextContainer style={{ transform: "translate(0, -37.5%)" }}>
          <HomeTitleTextBottom style={{ transform: "translate(0, -37.5%)" }}>
            MEG CONSULTING
          </HomeTitleTextBottom>
        </TextContainer>
        <TextContainer style={{ transform: "translate(0, -75%)" }}>
          <HomeTitleTextBottom style={{ transform: "translate(0, -37.5%)" }}>
            MEG CONSULTING
          </HomeTitleTextBottom>
        </TextContainer>
      </LoadContainer>
    </HomeContainer>
  );
}

export default App;
