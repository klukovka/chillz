export function applyZoomBasedOnScreenWidth() {
  const width = window.innerWidth;
  let zoom = 1;

  if (width >= 2560) {
    zoom = 0.9;
  } else if (width >= 1440) {
    zoom = 0.85;
  }

  // Check if zoom is supported
  const isZoomSupported = !(
    navigator.userAgent.toLowerCase().indexOf("firefox") > -1
  );

  if (isZoomSupported) {
    // Use zoom property (supported in Chrome, Safari, Edge)
    document.body.style.zoom = zoom;
  } else {
    // Firefox and other browsers that don't support zoom
    // Use transform scale instead
    document.body.style.transformOrigin = "top left";
    document.body.style.transform = `scale(${zoom})`;
    document.body.style.width = `${100 / zoom}%`;

    // Apply appropriate margin/padding to prevent content cutoff
    // This might need adjustment based on your layout
    document.body.style.height = "100vh";
    document.body.style.overflow = "auto";
  }

  // Adjust elements with "site" class
  const elements = document.getElementsByClassName("site");
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    el.style.minHeight = `${100 / zoom}vh`;
    el.style.minHeight = `${100 / zoom}dvh`;
  }
}
