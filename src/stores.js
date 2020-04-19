import watchMedia from "svelte-media";

const mediaqueries = {
  desktop: 'screen and (min-width: 769px)',
  mobile: 'screen and (max-width: 768px)'
  // small: "screen and (max-width: 849px)",
  // large: "screen and (min-width: 850px)",
  // short: "screen and (max-height: 399px)",
  // landscape: "screen and (orientation: landscape) and (max-height: 499px)",
  // tiny: "screen and (orientation: portrait) and (max-height: 599px)",
  // dark: "screen and (prefers-color-scheme: dark)",
  // noanimations: "screen and (prefers-reduced-motion: reduce)"
};

export const media = watchMedia(mediaqueries);
