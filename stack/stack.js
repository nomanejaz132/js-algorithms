// Stack is an ordered list that obeys the First-In/Last-Out or Last-In/First-Out principle.
// Stack is used for function calls in JavaScript, that why it's called a Call Stack.
// In Stacks insertion and deletion is only done at one end.
// Stack has sevral methods and properties.
// 1. Push (Add element to end of stack)
// 2. Pop (Remove element from top of stack)
// 3. Peek (Determine the last item in the stack)
// 4. Length (Returns the length of the stack)
// 5. isEmpty (Check if the stack is empty  )

function createStack() {
  const array = [];

  return {
    push(item) {
      array.push(item);
    },
    pop() {
      return array.pop();
    },
    peek() {
      return array[array.length - 1];
    },
    get length() {
      return array.length;
    },
    isEmpty() {
      return array.length == 0;
    },
  };
}

const lowerBodyStack = createStack();

lowerBodyStack.push("shirts");
lowerBodyStack.push("pants");
lowerBodyStack.push("socks");

console.log(lowerBodyStack.peek());

lowerBodyStack.push("shoes");

lowerBodyStack.pop();
lowerBodyStack.pop();

console.log(lowerBodyStack.peek());
console.log(lowerBodyStack.length);
