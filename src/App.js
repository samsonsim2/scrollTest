import logo from "./logo.svg";
import "./App.css";
import script from "./Script";
import Script from "./Script";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
 
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
      const distance = lenis.scroll - section.offsetTop; // start measure scroll distance when it hits the video section
      const total = section.clientHeight - (window.innerHeight)
      // console.log(section.clientHeight )
      // console.log(window.innerHeight)
      // console.log(total)
      
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
      
      
      <div ref={containerRef} style={{ position: "relative"    } }>
        <div style={{ height: "18000px", background: "yellow" }}>
          <div
            style={{
              border: "10px greensolid",
              height: "2000px",
              position: "sticky",
              top: 0,
               
              
            }}
          >
            <video
              src="ProductVideo_small.mp4"
              ref={videoRef}
              style={{  width:"100%", objectFit: "contain"   }}
            ></video>
          </div>
        </div>
        {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "absolute",
            top: 0,
            height: "80%",
            width: "100%",
            zIndex: 100,
          }}
        >
          <h1>hi</h1>
          <h1>hi</h1>
          <h1>hi</h1>
        </div> */}
      </div>

      <div
        style={{ backgroundColor: "red",   height: "3000px" }}
      ></div>

      <div
        style={{ backgroundColor: "blue",   height: "100vh" }}
      ></div>
 
      {/* <header>
        <h1>
          <img src="logo.svg" alt="Wildrise" />
        </h1>

        <nav>
          <a href="#">Discover</a>
          <a href="#">Our Story</a>
        </nav>

        <nav>
          <a href="#">The Latest</a>
          <a href="#">Campsites</a>
        </nav>
      </header>

      <section class="hero">
        <h2>Let's face it, there's nothing quite like it.</h2>
      </section>

      <section class="intro">
        <div>
          <p>
            At Wildrise, we're all about embracing the outdoor life. We've got
            this deep-rooted belief that the wild, untamed places out there are
            where you discover your true self. That's why we're on a mission to
            ignite a lifelong love affair with the great outdoors for folks.
          </p>

          <p>
            <a href="#" class="button">
              Discover Campsites
            </a>
          </p>
        </div>
      </section>

      <section ref={containerRef} class="vid" style={{border:"2px solid red"}}>
        <div class="holder">
          <video  ref={videoRef} src="vid.mp4" autoplay muted loop playsinline></video>
        </div>

        <div class="story">
          <div>
            <h3 style={{color:"black"}}>In the heart of Wildrise&hellip;</h3>
          </div>
          <div>
            <h3 style={{color:"black"}}>&hellip;where the breezes play.</h3>
          </div>
          <div>
            <h3 style={{color:"black"}}>We embrace the call of the wild each day.</h3>
          </div>
          <div>
            <h3 style={{color:"black"}}>Untamed places stretch,</h3>
          </div>
          <div>
            <h3 style={{color:"black"}}>vast and wide.</h3>
          </div>
          <div>
            <h3 style={{color:"black"}}>Whispering secrets of a world outside.</h3>
          </div>
        </div>
      </section>

      <section class="savvy">
        <h3>Think of us as your adventure-savvy older sibling.</h3>

        <div>
          <p>
            <img
              src="ice.jpg"
              alt="Photo of camping equipment on a snowy ground"
            />
          </p>

          <p>
            We've got the coolest gear and the hottest tips to help you dive
            headfirst into nature's wonders. Whether you're in it for the
            adrenaline rush, the peaceful escape, or just a breath of fresh air
            with friends, we've got your back. You're saying "yes" to preserving
            the environment, supporting sustainable business practices, and
            keeping the spirit of adventure alive.
          </p>

          <p>
            <a href="#" class="button">
              Read the latest tips
            </a>
          </p>
        </div>
      </section> */}
    </>
  );
}

export default App;
