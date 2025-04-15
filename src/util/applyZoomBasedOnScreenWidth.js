export function applyZoomBasedOnScreenWidth() {
  const width = window.innerWidth;
  let zoom = 1;

  if (width >= 2560) {
    zoom = 0.9;
  } else if (width >= 1920) {
    zoom = 0.85;
  } else if (width >= 1440) {
    zoom = 0.85;
  }

  document.body.style.zoom = zoom;
  const elements = document.getElementsByClassName("site");
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    el.style.minHeight = `${100 / zoom}vh`;
    el.style.minHeight = `${100 / zoom}dvh`;
  }
}
