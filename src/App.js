import logo from "./logo.svg";
import "./App.css";
import script from "./Script";
import Script from "./Script";
import { Suspense, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
 
const Loading=()=>{
  return(
<h1>loading</h1>)
}
function App() {

  const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = containerRef.current;

    const scroll = () => {
      const distance =  lenis.scroll - section.offsetTop ; // start measure scroll distance when it hits the video section
      const total = section.clientHeight -  window.innerHeight
     
      
      let percentage = distance / total;
      console.log(lenis.scroll);
      console.log(lenis.actualScroll);
      percentage = Math.max(0, percentage);
      percentage = Math.min(percentage, 1);

      if (video.duration > 0) {
        video.currentTime = video.duration * percentage;
      }
    };

    window.addEventListener("scroll", scroll);
  }, []);

  // const section = document.querySelector("section.vid");
  // const vid = section.querySelector("video");

  return (
    <>
      
      
        <div ref={containerRef} style={{ height: "18000px", background: "yellow",position: "relative"  }}>
          <div
            style={{
              border: "10px greensolid",
              height: "2000px",
              position: "sticky",
              top: 0,
               
              
            }}
          >
            <Suspense fallback={<Loading />}>
            <video
              src="finalcompressed.mp4"
              ref={videoRef}
              type='video/mp4' 
              style={{  width:"100%", objectFit: "cover"   }}
               muted
            ></video>
            </Suspense>
          </div>
   
        
      </div>

{/*     
            <otherDivs/> */}
       
    </>
  );
}

const MainComponent=({container})=>{

  

}
const otherDivs= ()=>{
  return <>
  <div
        style={{ backgroundColor: "red",   height: "3000px" }}
      ></div>

      <div
        style={{ backgroundColor: "blue",   height: "100vh" }}
      ></div>
     
      </>

}
export default App;
