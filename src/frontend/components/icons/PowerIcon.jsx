export function PowerIcon(props) {
  return (
    <svg
      aria-labelledby={props.label}
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      viewBox={props.viewBox || '0 0 1280 1280'}
      class={props.class}
      style={props.style}
    >
      {!!props.label && <title>{props.label}</title>}
      <path d="M631 299.4c-17.8 3.8-31.2 18.5-34 37.1-.7 4.7-1 50.5-.8 138l.3 131 2.3 6c10.1 27 41.2 38.5 65.1 24.2 9.8-5.9 17.6-17.2 20.1-29.1.7-3.5 1-47.9.8-138.6l-.3-133.5-2.2-5.7c-5.9-15.5-19.2-26.8-34.7-29.7-7.2-1.3-9.5-1.3-16.6.3z"/><path d="M500 328.4c-96.3 43.3-167.2 128.7-192 231-6.8 28.1-9.4 50.2-9.4 80.6 0 38.6 4.9 69.8 16.6 106C354.9 869.1 462.6 960.2 591 979.4c24.4 3.7 57 4.7 81 2.6 124.9-11.2 233.2-88.9 282.8-203 14.7-33.9 24.1-71.5 27.3-108.8 1.5-17.7.6-56-1.6-72.2-10.2-75.6-42.4-141.8-94.8-195.6-27.5-28.3-57.5-50.4-91.3-67.3-12.6-6.3-23.9-11.1-26.1-11.1-1.1 0-1.3 8.7-1.3 47.4v47.4l13.8 9.7c17.7 12.6 28.3 21.5 40.7 34 39.6 39.8 64.2 91 71.1 147.5 2.2 18 1.4 55.3-1.4 71.5-7.5 42.2-23.1 78.5-48.5 112.4-9.2 12.4-36.4 39.6-48.8 48.8-30.5 22.8-65.7 38.9-101 46.3-23.7 4.9-56.8 6.5-80.4 4-85.6-9.3-160.6-61.7-198.9-138.9-12.1-24.5-19.5-48.1-23.7-75.6-2.9-18.4-3.1-49.9-.5-68.9 5.8-42.8 22.9-84.3 49.2-119.6 15.5-20.9 30.3-35.3 59.6-58.1l15.3-11.9.7-5.3c1.1-9.1.9-56.6-.4-74-1-13.9-1.5-16.7-2.8-16.6-.8 0-5.8 1.9-11 4.3z"/>
    </svg>
  );
}
