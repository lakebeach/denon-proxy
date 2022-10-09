export function SourceIcon(props) {
  return (
    <svg
      aria-labelledby={props.label}
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      viewBox={props.viewBox || '3 3 26 26'}
      class={props.class}
      classList={props.classList}
      style={props.style}
    >
      {!!props.label && <title>{props.label}</title>}
      <path fill="currentcolor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16 9.913 5 16 5zm0 2c-4.959 0-9 4.041-9 9s4.041 9 9 9 9-4.041 9-9-4.041-9-9-9zm0 2c3.878 0 7 3.122 7 7s-3.122 7-7 7-7-3.122-7-7 3.122-7 7-7z" />
    </svg>
  );
}
