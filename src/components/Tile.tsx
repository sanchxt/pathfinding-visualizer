import { twMerge } from "tailwind-merge";
import {
  END_TILE_STYLE,
  MAX_ROWS,
  PATH_TILE_STYLE,
  START_TILE_STYLE,
  TILE_STYLE,
  TRAVERSED_TILE_STYLE,
  WALL_TILE_STYLE,
} from "../utils/constants";

interface TypeProps {
  row: number;
  col: number;
  isStart: boolean;
  isEnd: boolean;
  isTraversed: boolean;
  isWall: boolean;
  isPath: boolean;
}

export function Tile({
  row,
  col,
  isStart,
  isEnd,
  isTraversed,
  isWall,
  isPath,
}: TypeProps) {
  const tileStyleConditions: [boolean, string][] = [
    [isStart, START_TILE_STYLE],
    [isEnd, END_TILE_STYLE],
    [isWall, WALL_TILE_STYLE],
    [isPath, PATH_TILE_STYLE],
    [isTraversed, TRAVERSED_TILE_STYLE],
  ];

  const tileTypeStyle =
    tileStyleConditions.find(([condition]) => condition)?.[1] || TILE_STYLE;

  const borderStyle =
    row === MAX_ROWS - 1 ? "border-b" : col === 0 ? "border-l" : "";
  const edgeStyle = row === MAX_ROWS - 1 && col === 0 ? "border-l" : "";

  return (
    <div
      className={twMerge(tileTypeStyle, borderStyle, edgeStyle)}
      id={`${row}-${col}`}
    />
  );
}
