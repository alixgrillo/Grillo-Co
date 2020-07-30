import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { PromiseProvider } from "mongoose";

const MobileResponsive = (props) => {
  //   const isDesktopOrLaptop = useMediaQuery({
  //     query: "(min-device-width: 1224px)",
  //   });
  //   const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  //   const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  //   const isTabletOrMobileDevice = useMediaQuery({
  //     query: "(max-device-width: 1224px)",
  //   });
  //   const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  //   const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  // const isPhone = useMediaQuery({ query: "(max-device-width: 480px)" });
  // const isTablet = useMediaQuery({ query: "(max-device-width: 1024px)" });
  const mobile = useMediaQuery({ query: "(max-device-width: 1223px)" });

  useEffect(() => {
    if (mobile) {
      props.loadMobile(mobile);
    }
  });

  return (
    <div>
      {/* <h1>Device Test!</h1>
      {isDesktopOrLaptop && (
        <>
          <p>You are a desktop or laptop</p>
          {isBigScreen && <p>You also have a huge screen</p>}
          {isTabletOrMobile && (
            <p>You are sized like a tablet or mobile phone though</p>
          )}
        </>
      )}
      {isTabletOrMobileDevice && <p>You are a tablet or mobile phone</p>}
      <p>Your are in {isPortrait ? "portrait" : "landscape"} orientation</p>
      {isRetina && <p>You are retina</p>} */}
    </div>
  );
};

export default MobileResponsive;
