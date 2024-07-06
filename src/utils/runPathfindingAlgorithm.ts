import { bfs } from "../lib/algorithms/pathfinding/bfs";
import { dfs } from "../lib/algorithms/pathfinding/dfs";
import { AlgorithmType, GridType, TileType } from "./types";

interface RunPathfindingProps {
  algorithm: AlgorithmType;
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
}

export const runPathfindingAlgorithm = ({
  algorithm,
  grid,
  startTile,
  endTile,
}: RunPathfindingProps) => {
  switch (algorithm) {
    case "BFS":
      return bfs(grid, startTile, endTile);
    case "DFS":
      return dfs(grid, startTile, endTile);
    default:
      return bfs(grid, startTile, endTile);
  }
};
