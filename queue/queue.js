// Queue is a collection of items that obeys the principle of First-In/First-Out.
// Queue is a linear data structure that opens at its both ends.
// Queue has sevral methods and properties.
// 1. Add or Enqueue (Add an element to the end of the queue)
// 2. Remove or Dequeue (Remove an element from the front of the queue)
// 3. isEmpty (Check if the queue is empty)
// 4. isFull (Check if the queue is full)
// 5. Peek ( Get the value of the front of the queue without removing it)R
// 6. Length (Returns the length of the queue)

function createQueue() {
  const queue = [];

  return {
    enqueue(item) {
      queue.unshift(item);
    },
    dequeue() {
      return queue.pop();
    },
    isEmpty() {
      return queue.length === 0;
    },
    peek() {
      return queue[queue.length - 1];
    },
    get length() {
      return queue.length;
    },
  };
}

const q = createQueue();
console.log(q.isEmpty());

q.enqueue("Learn JavaScript");
q.enqueue("Learn TypeScript");
q.enqueue("Than learn React and its ecosystem");

console.log(q.peek());

q.dequeue();

console.log(q.peek());

console.log(q.isEmpty());

console.log(q.length);

// All operations in the queue must be of O(1) time complexity.
