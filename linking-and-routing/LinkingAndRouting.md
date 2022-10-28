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

## ***Assets in React***

Assets are things such as:
- Images
- Style Sheets
- Fonts
- Media Files
- Or any sort of file that's needed by your app at runtime

They are the files that your React app needs to have access to in order to work as intended. 

A common way to keep assets easily and readily available to your components is by creating an assets folder inside of a source folder and keep all your apps assets there. Some assets can also be placed inside the public folder. 


You will need to import the file onto the component before you are able to use it:
```js
import cat from './assets/images/cat.jpg'

function showAnimal() {
    return (
        <div>
            <img 
                src={cat}  
                alt="A picture of a cat" 
            />
        </div>
    )
}

export default showAnimal;
```

**Require Method**:
```js
import cat from './assets/images/cat.jpg'

function showAnimal() {
    return(
        <div>
            <img
                src={require("./assets/images/cat.jpg")}
                alt="A picture of a cat"
            />
        </div>
    )
}
```

**Random Image from Internet**:
```js
const randomImageUrl = "";
<img
    src={randomImageUrl}
/>
```
### ***Bundling Assets***

Bundling is the process that takes all the imported files in an app and joins them into a single file. Using `create-react-app`, we can take advantage of webpacks, which is the built-in tool.

`Webpack` is a module bundler. It will take various kinds of files and bundle them together so that a browser can understand that bundle and work with it.

Webpacks can also do the following:

- converts modern JS code into older versions of JS so that older browsers can understand your code. This process is called `transpiling`.
- optimizes your code to load as quickly as possible when a user visits your web page
- can process you SCSS code into the regular CSS, which browsers can understand
- Can build source maps of the bundle's building blocks
- can produce various kinds of files based on rules and templates. 

In **development** mode, webpacks bundles  your files and optimizes your bundles for updates. It also builds source maps so you can inspect the original file included in the bundled code.

In **production** mode, webpack bundles your files so that they are optimized for speed. This means the files are minified and organized to take up the least amount of memory. 

Once all the source files of your app have been bundled into a single bundle file, then that single bundle file gets served to a visitor browsing the live version of your app online, and the entire app's contents get served at once.

This works great for smaller apps, but if you have a more extensive app, this approach is likely to affect your site's speed. The longer it take for a web app to load, the more likely the visitor will leave and move on to another unrealted website.

`Code-splitting` is a practice where a module bundler like webpack splits the single bundle file into multiple bundles, which are then loaded on an as-needed basis. With this, you can **lazy load** only the parts that the visitor to the app needs to have at any given time. This approach significantly reduces the download times and allows React-powered apps to get much better speeds.

*Alternate*: `SSR (Server-side Rendering)`

With SSR, React components are rendered to HTML on the server, and the visitor downloads the finished HTML code. An alternate to SSR is client-side rendering, which downloads the index.html file and then lets React inject its own code into a dedicated HTML element. 

Sometimes, you can combine client-side rendering and server-side rendering, resulting in ***isomorphic apps***.

## ***Audio and Video***

```js
import ReactPlayer from "react-player";
import ReactPlayer from "react-player/youtube"; // if you are only planning on using videos from youtube

<video src={myVid} width={375} height={250} controls />
```

To install the package for react-player:

```
npm install react-player
```

Example of using the react-player:

```js
import React from "react";
import ReactPlayer from "react-player/youtube";

const App = () => {
  return (
    <div>
      <MyVideo />
    </div>
  );
};

const MyVideo = () => {
  return (
    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
  );
};

export default App;
```