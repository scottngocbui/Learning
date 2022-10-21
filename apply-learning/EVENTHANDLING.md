# Event Handling and Embedded Expressions

We will be learning the different ways to embed expressions in event handlers in React:

- [With an inline anonymous ES5 function](#handling-events-using-inline-anonymous-es5-functions)
- [With an inline, anonymous ES6 function (Arrow Functions)](#handling-events-using-inline-anonymous-es6-functions-arrow-function)
- Using a separate function declaration
- Using a separate function expression

## Handling Events Using Inline Anonymous ES5 Functions

This approach allows us to directly pass in an ES5 functions declaration as the onClick event-handling attribute's value:

```
<button onClick={function() {console.log('first example')}}>
    An inline anonymous ES5 function event handler
</button>
```

## Handling Events Using Inline Anonymous ES6 Functions (Arrow Function)

With this approach, you can directly pass in an ES6 function declaration as the onClick event-handling attribute's value:

```
<button onClick={() => console.log('second example')}>
    An inline anonymous ES6 function event handler
</button>
```

## Handling Event Using Separate Function Declaration