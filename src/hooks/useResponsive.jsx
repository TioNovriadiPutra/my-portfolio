import React from "react";
import { useMediaQuery } from "react-responsive";

const useResponsive = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-width: 1224px)",
  });

  return {
    isTabletOrMobileDevice,
  };
};

export default useResponsive;
