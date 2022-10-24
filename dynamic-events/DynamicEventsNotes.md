# ***Dynamic Events and How to Handle Them***

## Contents
1. [Parent-child Data Flow](#parent-child-data-flow)
     - Examples
        - [Parent Component](#parent-component)
        - [Child Component](#child-component)
        - [Grandchild Component](#grandchild-component)
2. [Children and Data](#children-and-data)
3. [Hooks](#hooks)
# ***Data Flow in React***

We will be learning how to detail the flow of data from parent to child and will also be exploring data flow in greater detail by looking at examples.

## ***Parent-Child Data Flow***

In `React`, data flow is a one-way street. The data in `React` flows from a parent component to a child component. The data starts at the root and can flow to multiple levels of nesting, from the root (`parent component`) to the child component, then the grandchild component, and further down the hierachy.

Here is an example:

### **Parent Component:**

```js
function Dog() {
    return (
        <Puppy name="Max" bowlShape="square" bowlStatus="full" />
    );
};
```

### **Child Component:**

```js
function Puppy(props) {
    return (
        <div>
            {props.name} has <Bowl bowlShape="square" bowlStatus="full" />
        </div>
    );
};
```

### **Grandchild Component:**

```js
function Bowl(props) {
    return (
        <span>
            {props.bowlShape}-shaped bowl, and it's currently {props.bowlStatus}
        </span>
    );
};
```

## ***Children and Data***

In `React`, data is passed down from parent components to a child component via `props`. A Child component can't mutate or change its props. It can only read them and re-render. This means that the data comes from the parents and its just consumed in the child components. 

`States data`, on the other hand, is data inside the components that it controls and can mutate. 

## ***Hooks***

Hooks can solve the problem of unnecessary code reuse across components. 

```js
importReact, {useState} from 'react';

const [state, setState] = useState(initialState); //Base Code Structure

const [showMenu, setShowMenu] = useState(false); //Example with Array Destructuring

/*Example without Array Destructuring*/
var menuState = useState(false);
var showMenu = menuState[0]; // Access first item in array
var setShowMenu = menuState[1]; // Access second item in array
```

*Example*: We have a component with an input text field and want to keep track of what the user types into the text field. As the user keeps typing, the local state that holds the string needs to get updated with the latest text.

```js
import { useState } from 'react';

export default function InputComponent() { 
  const [inputText, setText] = useState('hello'); 

  function handleChange(e) { 
    setText(e.target.value); 
  } 

  return ( 
    <> 
      <input value={inputText} onChange={handleChange} /> 
      <p>You typed: {inputText}</p> 
      <button onClick={() => setText('hello')}> 
        Reset 
      </button> 
    </> 
  ); 
} 
```

The state variable `inputText` and `setText` method are used to set the current text that is typed. The `useState` hook is initialized at the beginning of the component. 

By default, the `inputText` will be set to "hello":
```js 
const [inputText, setText] = useState('hello');
```

As the user types, the `handleChanges` function reads the latest input value from the browser's input DOM element, and calls the `setText` function to update the local state of `inputText`:

```js
function handleChange(e) {
    setText(e.target.value);
};
```

Then, clicking the reset button will update the `inputText` button to "hello".

- `inputText' is local state