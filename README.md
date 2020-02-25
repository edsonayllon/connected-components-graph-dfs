---
author: Edson Ayllon
category: algorithm
tags: 
- mathematics
- graph theory
- grid problem
- depth first search
twitter: https://twitter.com/relativeread
---

## Algo 4-2020


# connected components graph dfs

Tests graph theory with 2 dimensional grids. 

## 1. Significance

Useful maybe for maps, and geolographical based data analysis. 

## 2. Algorithm

### 2.1—Definitions

- *Graph*—A collection of connected nodes
- *Node, vertex*—A point, typically of some interest
- *Edge*—The connection of one node to another node, forming a pathway

### 2.2—Structure

Takes a 2 dimensional grid, containing nodes and empty spaces, defined by the integers 1 and 0 respectively. Identifies how many graphs exist in the grid, and how many nodes each of those graphs contains. 

### 2.3—Procedure

Finds graphs in a grid, where a node is of value 1, and edges are defined by touching nodes in 8 directions (cardinal and diagonal).

Iterates through graph to find a node. Once a node is found, it's marked as visited, and uses Depth-First-Search. Neighbors are searched for in 45 degree angles. Once an edge is found, the new node is visted and marked as visited, continuing search recursively until the end of a path is found, whereby new paths are searched for in previous nodes, until the entire graph is counted. 

The visited graph is passed up, as well as the number of nodes found in the graph found. Continues iterating through grid, ignoring all values that are not nodes as well as nodes of graphs already discovered. 
 
## 3. Running

Run `app.js`.

```
node app.js
```
