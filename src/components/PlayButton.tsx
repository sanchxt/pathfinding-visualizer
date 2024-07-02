import { MouseEventHandler } from "react";
import { GrPowerReset } from "react-icons/gr";
import { BsFillPlayFill } from "react-icons/bs";

interface PlaceProps {
  handlerRunVisualizer: MouseEventHandler<HTMLButtonElement>;
  isDisabled: boolean;
  isGraphVisualized: boolean;
}

export function PlayButton({
  handlerRunVisualizer,
  isDisabled,
  isGraphVisualized,
}: PlaceProps) {
  return (
    <button
      disabled={isDisabled}
      onClick={handlerRunVisualizer}
      className="disabled:pointer-events-none disabled:opacity-50 transition ease-in rounded-full p-2.5 shadow-md bg-green-500 hover:bg-green-600 border-none active:ring-green-300 focus:outline-none focus:ring-green-300 focus:ring-opacity-30"
    >
      {isGraphVisualized ? (
        <GrPowerReset className="w-5 h-5" />
      ) : (
        <BsFillPlayFill className="w-5 h-5" />
      )}
    </button>
  );
}
