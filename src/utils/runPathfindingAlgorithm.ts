import { aStar } from "../lib/algorithms/pathfinding/aStar";
import { bfs } from "../lib/algorithms/pathfinding/bfs";
import { dfs } from "../lib/algorithms/pathfinding/dfs";
import { dijkstra } from "../lib/algorithms/pathfinding/dijkstra";
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
    case "DIJKSTRA":
      return dijkstra(grid, startTile, endTile);
    case "A_STAR":
      return aStar(grid, startTile, endTile);
    default:
      return bfs(grid, startTile, endTile);
  }
};
