# ***Linking and Routing***

## Contents
1. [Basic Types of Navigation](#basic-types-of-navigation)
    - [Single-Page Apps](#single-page-apps)

## ***Basic Types of Navigation***

Website navigation is the parts of any website that allows you to browse through various pages or links on that website from a single component. The most common naviation components are:
- Vertical Navigation Menu (Sidebar Nav)
- Horizontal Navigation Bar (navbar)
- Menu hiding behind a button (burger icon)
- Footer navigation menu 

```js
import {BrowserRouter} from 'react-router-dom';
```

Many web developers develop their web applications as Single Page Application

### ***Single-Page Apps***

A Single Page Application allows the user to interact with the website without downloading entire new webpages. Instead, it rewrites the current webpage as the user interacts with it. 

There are two approaches to serving code and resources in Single Page Applications:

1. When the browser requests the application, return and load all necessary HTML, CSS and Javascript immediately. This is known as *bundling*.
2. When the browser request the application, return only the minimum HTML, CSS and JavaScript needed to load the application. Additional resourses are downloaded as required by the application, for example, when a user navigates to a specific section of the application. This is known as *lazy loading* or *code splitting*.

### ***Anchor Tag Elements in Single-Page Elements***

A single-page application can't have regular anchor tag elements as a traditional web app can.

Instead, SPA comes with its own special implementation of anchor tags and links, which only gives an illusion of loading different pages to the end user in fact, they simply load different components into a single element of the real DOM into which the virtual DOM tree gets mounted and updated. 

### ***Conditional Rendering***

State is all the data your app is currently working with. With this in mind, we can decide to conditionally render specific components in our app based on whether specific state data has specific values.

***Example App:***

Takes the client computer's current datetime and displays one of two messages

- For workdays, the message is: "Get it done"
- For weekends, the message is: "Get some rest"

***Approch 1***:

Have two components, one named `Workdays` and one named `Weekends`

Have a `CurrentMessages` component which would render the correct component based on the value returned from the `getDay()` function call

```js
function CurrentMessage() {
    const day = new Date().getDay();
    if (day >= 1 && day <= 5) {
        return <Workdays />
    }
    return <Weekends />
}
```

***Approach 2: Conditional Rendering With The Help of Element Variables***

We could further improve the `CurrentMessage` component by using element variables. 

```js
function CurrentMessage({day}) {
    const weekday = (day >= 1 && day <= 5);
    const weekend = (day >= 6 && day <= 7);
    let message;

    if (weekday) {
        message = <Workdays />
    } else if (weekend) {
        message = <Weekends />
    } else {
        message = <ErrorComponent />
    }

    return (
        <div>
            {message}
        </div>
    )
}
```
***Approach 3: Conditional Rendering Using The Logical AND Operator***
```js
function LogicalAndExample() {
    const val = prompt('Anything but a 0')

    return (
        <div>
            <h1>Please don't type in a zero</h1>
            {val &&
                <h2>Yay, no 0 was typed in!</h2>
            }
        </div>
    )
}
```

1. First, you ask the user to type into the prompt, specifying that you require anything other than a zero character; and you save the input into the val value.

2. In the return statement, an h1 heading is wrapped inside a div element, and then curly braces are used to include a JSX expression. Inside this JSX expression is a single && operator, which is surrounded by some code both on its left and on its right sides; on the left side, the val value is provided, and on the right, a piece of JSX is provided. 

With conditional rendering, you can return different child components. This is done using the props that are passed into the parent component, but can also be done based on component state.

- We have two child components, `LoginButton` and `LogoutButton`
- There is a parent component, `LogInOutButton`, that checks the props passed into the parent component and return a different child component based on the value of the props.

```js
function LogInOutButton(props) {
const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <LogoutButton />;
  } else {
  return <LoginButton />;
}
```