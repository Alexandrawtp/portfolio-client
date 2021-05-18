import React, { useRef, useEffect, Fragment } from "react";
import ReactPlayer from "react-player";

const MobileVideo = (props) => {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.addEventListener(
      "contextmenu",
      function(e) {
        e.preventDefault();
      },
      false
    );

    return videoRef.current.removeEventListener(
      "contextmenu",
      function(e) {
        e.preventDefault();
      },
      false
    );
  }, []);

  return (
    <Fragment>
      <div ref={videoRef}>
        <ReactPlayer
          className='video-project-mobile'
          playing={true}
          width="90%"
          height="100%"
          controls={true}
          url={props.video}
          config={{ file: { attributes: { controlsList: "nodownload" } } }}
        />
      </div>
    </Fragment>
  );
}

export default MobileVideo;
