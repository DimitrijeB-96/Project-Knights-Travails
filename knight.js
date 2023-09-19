import Board from "./board.js";
import Node from "./node.js";

export default class Knight {
  constructor() {
    this.q = [];
    this.visited = [];
  }

  knightCanMove([x, y]) {
    const board = new Board();

    for (let i = 0; board.length; i++) {
      board[i] = board[i].filter((move) =>
        move === `[${x - 2}, ${y - 1}]` ||
        move === `[${x - 1}, ${y - 2}]` ||
        move === `[${x + 1}, ${y - 2}]` ||
        move === `[${x + 2}, ${y - 1}]` ||
        move === `[${x + 2}, ${y + 1}]` ||
        move === `[${x + 1}, ${y + 2}]` ||
        move === `[${x - 1}, ${y + 2}]` ||
        move === `[${x - 2}, ${y + 1}]`
      );
    }
    board.board.flat();
  }

  bfs(node, end) {
    this.visited.push(this.q.shift());
    let children = knightCanMove(JSON.parse(node.value));
    children.forEach(child => {
      child = { value: child, prev: node};
      if (!this.visited.some((element) => element.value === child.value)) {
        this.q.push(child);
      }
    });
    if (node.value === Node(end).value) {
      return node;
    } else {
      return this.bfs(q[0], end);
    }
  }

  knightMoves(start, end) {
    if (end[0] > 7 || end[0] < 0 || end[1] > 7 || end[1] < 0) {
      return "Out of range, please enter start and end points between [0, 0] and [7, 7]";
    }
    this.q.push(Node(start));
    let path = bfs(q[0], end);
    const output = [];
    output.push(path.value);
    while (path.prev !== null) {
      output.unshift(path.prev.value);
      path = path.prev;
    }
    console.log("Here is your path from " + start + " to " + end);
    output.forEach((move) => console.log(move));
  }
}