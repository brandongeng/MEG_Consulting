import BdtHome from "../Components/BDT/BdtHome";
import BdtInfo from "../Components/BDT/BdtInfo";
import ToHomeSection from "../Components/BDT/ToHomeSection";
import Nav from "../Components/General/Nav";

import { useEffect } from 'react' 
import { useLocation } from 'react-router-dom'
import ReactGA from "react-ga4";
import rg4js from "raygun4js";

function BDT() {

  let location = useLocation();
  ReactGA.initialize("G-GC3DF08WD9");

  useEffect(() => {
      ReactGA.set({ page: window.location.pathname }); // Update the user's current page
      ReactGA.send({ hitType: "pageview", page: window.location.pathname});
      rg4js('trackEvent', {
        type: 'pageView',
        path: '/' + window.location.pathname // Or perhaps window.location.hash
      });
      console.log(`You changed the page to: ${location.pathname}`) 
    },[location]) 

  return (
    <div>
      <BdtHome />
      <BdtInfo />
      <ToHomeSection />
      <Nav color={0} home={1} />
    </div>
  );
}

export default BDT;
