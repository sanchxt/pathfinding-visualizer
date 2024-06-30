import { ReactNode, createContext, useState } from "react";
import { AlgorithmType, GridType, MazeType } from "../utils/types";
import { createGrid } from "../utils/helpers";
import { END_TILE_CONFIG, START_TILE_CONFIG } from "../utils/constants";

interface PathfindingContextInterface {
  algorithm: AlgorithmType;
  setAlgorithm: (algorithm: AlgorithmType) => void;
  maze: MazeType;
  setMaze: (maze: MazeType) => void;
  grid: GridType;
  setGrid: (grid: GridType) => void;
  isGraphVisualised: boolean;
  setIsGraphVisualised: (isGraphVisualised: boolean) => void;
}

export const PathfindingContext = createContext<
  PathfindingContextInterface | undefined
>(undefined);

export const PathfindingProvider = ({ children }: { children: ReactNode }) => {
  const [algorithm, setAlgorithm] = useState<AlgorithmType>("BFS");
  const [maze, setMaze] = useState<MazeType>("NONE");
  const [grid, setGrid] = useState<GridType>(
    createGrid(START_TILE_CONFIG, END_TILE_CONFIG)
  );
  const [isGraphVisualised, setIsGraphVisualised] = useState<boolean>(false);

  return (
    <PathfindingContext.Provider
      value={{
        algorithm,
        setAlgorithm,
        maze,
        setMaze,
        grid,
        setGrid,
        isGraphVisualised,
        setIsGraphVisualised,
      }}
    >
      {children}
    </PathfindingContext.Provider>
  );
};
