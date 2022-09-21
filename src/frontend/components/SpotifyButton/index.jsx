import { SpotifyIcon } from "../icons/SpotifyIcon";
import { useDenon } from "../../api/DenonClient";

export function SpotifyButton(props) {
  const [state, {send}] = useDenon();
  const isOn = () => (state[props.zone]?.source === 'NET' 
    && state[props.zone]?.power === 'ON');
  const sendCommand = () => {
    const command = {
      zone: props.zone,
      parameter: 'source',
      value: 'NET',
    };
    send(command);
  };

  return (
    <button    
      type="button"
      class="flex items-center justify-center w-8 h-8 p-0 border-0 rounded-full"
      onClick={() => sendCommand()}
      disabled={isOn()}
    >
      <SpotifyIcon class="w-full" style={{fill: isOn() ? '1ED760' : ''}} />
    </button>
  )
}