# Event Handling and Embedded Expressions

We will be learning the different ways to embed expressions in event handlers in React:

- [With an inline anonymous ES5 function](#handling-events-using-inline-anonymous-es5-functions)
- [With an inline, anonymous ES6 function (Arrow Functions)](#handling-events-using-inline-anonymous-es6-functions-arrow-function)
- [Using a separate function declaration](#handling-event-using-separate-function-declaration)
- [Using a separate function expression](#event-handling-and-embedded-expressions)

## Handling Events Using Inline Anonymous ES5 Functions

This approach allows us to directly pass in an ES5 functions declaration as the ```onClick``` event-handling attribute's value:

```js
<button onClick={function() {console.log('first example')}}>
    An inline anonymous ES5 function event handler
</button>
```

## Handling Events Using Inline Anonymous ES6 Functions (Arrow Function)

With this approach, you can directly pass in an ES6 function declaration as the ```onClick``` event-handling attribute's value:

```js
<button onClick={() => console.log('second example')}>
    An inline anonymous ES6 function event handler
</button>
```

## Handling Event Using Separate Function Declaration

With this approach, you declare a separate ES5 function declaration, and then you reference its name in the event-handling ```onClick``` attribute:

```js
function App() {
    function thirdExample() {
        console.log('third example');
    };
    return (
        <div className="thirdExample">
            <button onClick={thirdExample}>
                using a separate function declaration
            </button>
        </div>
    );
};
export default App;
```

## Handling Events Using Separate Function Expressions
**Tip**: A way to determine if a function is defined as an expression or a declaration is: if it does not start the line with the keyword ```fuction```, then it's an expression

In the following code, we are assigning an anonymous ES6 arrow function to a ```const``` variable and then using the ```const``` variable's name to handle the ```onClick``` event:

```js
function App() {
    const fourthExample = () => console.log('fourth example');

    return (
        <div className="fourthExample">
            <button onClick={fourthExample}>
                using a separate function expression
            </button>
        </div>
  );
};
export default App;
```