### SEBR0916

# JavaScript Arrays

![Arrays](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fcleverbeagle-uploads%2FWhat-are-JavaScript-arrays-BPH.png&f=1&nofb=1)

## Lesson Overview

## Objectives
 - Learn about JavaScript Arrays
 - Do some practice with JavaScript Arrays

## Lesson Instructions

### Arrays

Unfortunately, strings and numbers are not enough for most programming purposes.
What is needed are collections of data that we can use efficiently: **Arrays**.

Arrays are great for:
 * Storing data
 * Enumerating data, i.e. using an index to find them
 * Quickly reordering data

Arrays, ultimately, are a data structure that is similar in concept to a list. Each item in an array is called an element, and the collection can contain data of the same or different types. In JavaScript, they can dynamically grow and shrink in size.

```javascript
let friends = ['Moe', 'Larry', 'Curly'];
=> ['Moe', 'Larry', 'Curly']
```

Items in an array are stored in sequential order, and indexed starting at `0` and ending at `length - 1`.

```javascript
// First friend
let firstFriend = friends[0];
 => 'Moe'
// Get the last friend
let lastFriend = friends[2]
=> 'Curly'
```


![Ray](https://c.tenor.com/lK9WCmPFfUIAAAAC/finding-nemo-sting-ray.gif)

### Working with Arrays



![Length](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F3o7btOtfwq4iFqCxb2%2Fgiphy.gif&f=1&nofb=1)

### Length method

The `length` method works in an interesting way in Javascript. It is always one more than the highest index in the array.

So `array.length` isn't necessarily the number of items in the array. Consider the following:

```javascript
let a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
a.length; // 101
```

**Remember**: the length of the array is one more than the highest index.

### Getting data from an array

If you query a non-existent array index, you get `undefined`:

```javascript
let a = ['dog', 'cat', 'hen'];

a[90];
=> undefined
```


### Matrixes

We can also nest Arrays within Arrays. These are called Matrixes. They are annoying, confusing, and largely unpopular in our current paradigm. We'll learn about Spread Operators and how to bypass these when we cover ES6 Syntax in week 2. For now, just know that they exist, how we can access them, and that if you see one, it means you're probably working with some kind of outdated or order code.

```js
const annoyingArray = [0, 1, [2,3], [4, [5,6]], 7, [8,9, 10]] 
```
We target our values by nesting our square brackets together. For example, if we wanted to log our value '2', we would do:

```js
console.log(annoyingArray[2][0]
```

Because it is the first element ('zero-ith') in the third ('two-ith') item

How would target "7"?
How about "1"?
How about "5"?

Matrixes are an interesting peice of JS code, but as you can see, its not something you'll want to have too much of in your code.
Much like the 2nd and 3rd Matrix movies, we'll acknowledge that they exist, but we won't talk about them too much any more




### Array Helper Methods

Arrays come with a number of methods. Here's a list of some popular helpers:

> Note: You might want to demonstrate a few of these.

- `a.toString()` - Returns a string with the `toString()` of each element separated by commas.

- `a.pop()` - Removes and returns the last item.

- `a.push(item1, ..., itemN)` - `Push` adds one or more items to the end.

- `a.reverse()` - Reverse the array.

- `a.shift()` - Removes and returns the first item.

- `a.unshift(item)` - Prepends items to the start of the array.

![Shift](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2Fo5BzNDDFQnepi%2Fgiphy.gif&f=1&nofb=1)


Like scales on the guitar, or spices in a kitchen, the more Array Methods you are familiar with, the more you will be able to do with your code. Don't give yourself a headache trying to memorize all of them. With practice and repetition you will see the uses and abilities of each, and how best to find them to use.

## Lesson Recap
In this lesson, we learned all about JavaScript arrays and how they are used to store data.  We also touched on array methods and how they can be used to affect that data!

## Resources
 - [Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
