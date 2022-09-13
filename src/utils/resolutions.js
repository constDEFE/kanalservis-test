const resolutions = {
  mobile: "480px",
  tablet: "600px",
  desktop: "1280px",
};

export const devices = {
  mobile: `only screen and (max-width: ${resolutions.mobile})`,
  tablet: `only screen and (min-width: ${resolutions.tablet})`,
  desktop: `only screen and (min-width: ${resolutions.desktop})`,
};
