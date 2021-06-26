import copyImg from "../assets/images/copy.svg";

import { useTheme } from "../hooks/useTheme";

import "../styles/room-code.scss";

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  const { theme } = useTheme();

  return (
    <button className={`room-code ${theme}`} onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copiar código da sala" />
      </div>
      <span>Sala #{props.code} </span>
    </button>
  );
}
