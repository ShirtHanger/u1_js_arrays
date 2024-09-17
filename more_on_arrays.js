// More on arrays

let friends = ['moe', 'larry', 'curly', 'brittany', 'ashley', 'aisha']

console.log(friends[0]) // Prints the first item in array by reaching its index
console.log(friends[1]) // Prints the second item...
console.log(friends[2]) // Prints the third...
console.log(friends[3]) // fourth...

console.log(friends.length) // prints length of array, 6
// The INDEX starts at 0, so max index = length - 1

// Matrixes: you can nest an array INSIDE of an array
// It's annoying and unpopular

const annoyingArray = [0, 1, [2,3], [4, [5,6]], 7, [8,9, 10]] 

// Target an item in a nested array by chaining block notations

console.log(annoyingArray[2][0]) // Prints 2



/*  Some Array helper methods

array.toString() - toString converts an array to a single string

array.pop() - Pop removes and returns the last item in array.
array.push(item1, ..., itemN) - Push adds one or more items to the end. (Opposite of pop)

array.shift() - Shift removes and returns the first item in Array (similar to pop).
array.unshift(item) - Adds item to the front of the array (Opposite of shift).

array.reverse() - Reverse will reverse order the array. */

const fruits = ['apple', 'orange', 'kiwi', 'banana', 'mangos', 'papapya', 'pineapple']

console.log(fruits.length) // Prints 7
console.log(`I'm hungry, I think I'll have a ${fruits[2]}`) // Prints kiwi

console.log(fruits.toString()) // Turns array to list then prints it

fruits.push('peach') // Adds Peach to END of the array
fruits.push('pitaya') // Adds pitaya to START of the array