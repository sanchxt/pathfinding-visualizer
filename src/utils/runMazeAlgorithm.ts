import { binaryTree } from "../lib/algorithms/maze/binaryTree";
import { GridType, MazeType, SpeedType, TileType } from "./types";

interface RunMazeProps {
  maze: MazeType;
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
  setIsDisabled: (isDisabled: boolean) => void;
  speed: SpeedType;
}

export const runMazeAlgorithm = async ({
  maze,
  grid,
  startTile,
  endTile,
  setIsDisabled,
  speed,
}: RunMazeProps) => {
  if (maze === "BINARY_TREE") {
    await binaryTree(grid, startTile, endTile, setIsDisabled, speed);
  }
};
