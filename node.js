export default class Node {
  constructor([x , y]) {
    this.value = `[${x}, ${y}]`;
    this.prev = null;
  }
}