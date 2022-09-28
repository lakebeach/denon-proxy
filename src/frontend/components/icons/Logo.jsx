export function Logo(props) {
  return (
    <svg
      aria-labelledby={props.label}
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      viewBox={props.viewBox || '-16 -16 540 540'}
      class={props.class}
      style={props.style}
    >
      {!!props.label && <title>{props.label}</title>}
      <path style={{fill: 'currentcolor'}} d="M155.5 32.4c-8.3 2-14.6 5.6-21.1 12-6.5 6.6-10.5 13.7-12.3 22.4-1.6 7.5-1.6 370.9 0 378.4 3.6 17.1 17.5 31 34.7 34.7 7.4 1.5 190.9 1.6 198.4 0 17.1-3.6 31.1-17.7 34.7-34.7 1.6-7.6 1.6-371 0-378.4-3.7-17.3-18.2-31.6-35-34.8-8-1.5-193.1-1.2-199.4.4zm115.2 60.2c15 3.1 27.5 9.9 38.2 20.7 15 15.2 21.4 30.9 21.5 52.2.1 21.5-6.1 37.2-20.7 52.4-13.8 14.2-29.6 21.4-49.7 22.8-42.2 2.7-79-32.1-79-74.7 0-46.9 44-82.9 89.7-73.4zm0 180c15 3.1 27.5 9.9 38.2 20.7 15.1 15.4 21.5 30.9 21.5 52.7 0 21.5-6.3 37.1-21 52.2-41.8 43-114.6 21.5-126.8-37.5-10.7-51.8 36.2-98.8 88.1-88.1z"/><path d="M245.5 122.4c-8.3 2-14.6 5.6-21.1 12-17.7 17.8-17.7 45.5 0 63.1 26 25.9 69.6 11.8 75.8-24.4 5.3-31.2-23.8-58.2-54.7-50.7zM263 153c4.5 2.3 8 8 8 13 0 7.6-7.4 15-15.1 15-4.6 0-10.8-3.9-13-8.2-3.7-7.2-1.4-15.1 5.7-19.4 4.8-2.9 9.2-3 14.4-.4zm-17.5 149.4c-8.4 2.1-14.7 5.7-21.1 12.1-17.7 17.6-17.7 45.4 0 63 26 25.9 69.6 11.8 75.8-24.4 5.3-31.1-24-58.4-54.7-50.7zM263 333c4.5 2.3 8 8 8 13 0 7.6-7.4 15-15.1 15-4.6 0-10.8-3.9-13-8.2-3.7-7.2-1.4-15.1 5.7-19.4 4.8-2.9 9.2-3 14.4-.4zM24.4 188.4c-3.8 1.7-6.3 5.1-11.9 16.3-16.9 34.2-16.5 72.4 1.1 106.5 5 9.6 8.3 12.7 14.3 13.5 8.6 1.2 15.9-4.5 16.8-13 .4-3.7-.2-5.7-4.1-13.5-2.5-5-5.8-13.1-7.3-17.9-2.3-7.8-2.6-10.4-2.6-23.3s.3-15.5 2.6-23.3c1.5-4.8 5-13.3 7.8-18.9 4.4-8.7 5-10.8 4.6-14.4-1.1-10.4-11.6-16.2-21.3-12zm449.6.8c-4.1 2.7-7 7.9-7 12.4 0 1.7 2.2 7.9 5 13.6 7.6 15.9 9.3 23.4 9.3 40.8s-1.7 24.7-9.4 41.1c-4.5 9.3-5.1 11.4-4.6 15 1.1 8.2 7.6 13.3 15.8 12.6 6.8-.6 10.1-3.4 15.2-13.4 9.8-19.3 13.1-33 13.1-55.3 0-22.3-3.3-36-13.1-55.3-5.3-10.2-8.4-12.9-15.7-13.5-4.1-.3-5.8.1-8.6 2zM75.5 217c-4 2.6-10.1 12.8-12.8 21.5-1.7 5.4-2.2 9.5-2.2 17.5 0 12.4 2.3 21 8.2 30.8 4.8 7.8 8.2 10.2 14.8 10.2 6 0 10.7-2.6 13.1-7.2 2.8-5.4 2.3-9.9-2.1-18.4-3.6-7-4-8.4-4-15.4s.4-8.4 4-15.4c4.4-8.5 4.9-13 2.1-18.4-3.6-6.9-14.5-9.6-21.1-5.2zm344.7 0c-4.3 2.6-7.6 9.8-6.7 14.2.4 1.7 2.4 6.3 4.4 10.1 3.2 6.2 3.6 7.8 3.6 14.7 0 7-.4 8.3-4 15.4-4.4 8.5-4.9 13-2.1 18.4 2.4 4.6 7.1 7.2 13.1 7.2 6.6 0 10-2.4 14.8-10.2 5.9-9.8 8.2-18.4 8.2-30.8 0-8-.5-12.2-2.2-17.5-2.7-8.7-8.8-18.9-12.8-21.5-4.1-2.7-11.9-2.7-16.3 0z"/>
    </svg>
  );
}
