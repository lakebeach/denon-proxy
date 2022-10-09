import { useDenon } from "../../api/DenonClient";

export function Button(props) {
  const [state] = useDenon();
  const isOn = () => state[props.zone]?.power === 'ON';

  return (
    <button 
      type="button"
      class="button-icon-only"
      children={props.children}
      classList={{
        [props.class]: !!props.class,
        ...(props.classList || {})
      }}
      disabled={!isOn()}
      onClick={props.onClick}
      style={props.style}
    />
  );
}
