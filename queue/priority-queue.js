const { createQueue } = require("./queue.js");

function createPriorityQueue() {
  const lowPriorityQueue = createQueue();
  const highPriorityQueue = createQueue();
  return {
    enqueue(item, isHighPriority = false) {
      isHighPriority
        ? highPriorityQueue.enqueue(item)
        : lowPriorityQueue.enqueue(item);
    },
    dequeue() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue();
      }
      return lowPriorityQueue.dequeue();
    },
    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek();
      }
      return lowPriorityQueue.peek();
    },
    length() {
      return lowPriorityQueue.length + highPriorityQueue.length;
    },
    isEmpty() {
      return lowPriorityQueue.isEmpty() && highPriorityQueue.isEmpty();
    },
  };
}

const q = createPriorityQueue();

q.enqueue("A fix here");
q.enqueue("A bug there");
q.enqueue("A new feature");

console.log(q.peek());
console.log(q.dequeue());
console.log(q.peek());
