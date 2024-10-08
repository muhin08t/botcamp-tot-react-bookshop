import React from "react";

const Faq = () => {
  return (
    <div className="py-10 px-32">
        <h1 className="mx-auto text-center font-bold text-3xl pb-3">FAQ Section</h1>
      <div className="collapse collapse-plus">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
        1. What is React.js and Explain the concept of "components" in React
        </div>
        <div className="collapse-content pr-4">
          <p><span className="font-bold"> React.js</span> is a JavaScript library for building user interfaces, developed 
            and maintained by Facebook. It's primarily used for creating dynamic, 
            single-page applications (SPAs), where content is updated without requiring 
            a full page reload. React allows developers to create reusable UI components,
             manage application state, and efficiently update the DOM using 
             a virtual DOM for optimal performance.</p>

             <p className="pt-3"> <span className="font-bold">A component </span> in React is a reusable, independent block of code that
                 represents a part of the UI. Components allow you to break down 
                 the UI into smaller, manageable pieces, each handling a specific function
                  or area of the interface. These components can then be combined to
                   build complex user interfaces.</p>
        </div>
      </div>
      <div className="collapse collapse-plus">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        2. What is JSX in React, and how does it work?
        </div>
        <div className="collapse-content pr-4">
          <p><span className="font-bold">JSX (JavaScript XML) </span> is a syntax extension for JavaScript
             used in React to describe what the UI should look like.
              It looks similar to HTML but can be used directly within JavaScript. 
              JSX is not required in React, but it is commonly used because it
               makes it easier to write and visualize the structure of a React component.</p>
            <p className="pt-3"> JSX allows developers to write HTML-like code that is later transformed 
                into JavaScript by a tool called Babel. Behind the scenes, JSX elements
                 are converted into regular JavaScript objects that React 
                 can render efficiently into the DOM. </p>
        </div>
      </div>
      <div className="collapse collapse-plus">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        3. What is the Virtual DOM, and how does React use it to optimize performance?
        </div>
        <div className="collapse-content pr-4">
          <p><span className="font-bold mr-4">The Virtual DOM </span> allows React to batch multiple updates
             and apply them all at once. Without this, every
              change to the real DOM would be slow and expensive, as
               the browser would need to recalculate styles, layout,
                and re-render content for every update.</p>
        </div>
      </div>

      <div className="collapse collapse-plus">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        4. Explain the concept of "props" in React and how they are used.
        </div>
        <div className="collapse-content">
          <p> <span className="font-bold"> Props (short for "properties") </span> are a core concept in React that
             allow you to pass data from one component to another, typically
              from a parent component to a child component. Props are read-only,
               meaning that a component cannot modify the props it receives — they 
               are intended to make components reusable and dynamic by allowing data
                to flow into the component from an external source.</p>
        </div>
      </div>

      <div className="collapse collapse-plus">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        5. What is "state" in React, and how does it differ from props?
        </div>
        <div className="collapse-content">
          <p>In React, <span className="font-bold">state </span> is an object that represents the dynamic data 
            of a component. It is used to store and manage information that may
             change over time, usually as a result of user interaction, API calls,
              or other events. State allows components to react to changes, 
              re-render themselves, and update the UI accordingly.</p>
        </div>
      </div>

      <div className="collapse collapse-plus">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        6. Explain the useState hook and provide an example of how it is used
        </div>
        <div className="collapse-content">
          <p> <span className="font-bold">The useState hook </span> is one of the most commonly used React hooks.
             It allows you to add state to functional components,
              which wasn't possible before React introduced hooks in 
              version 16.8. With useState, you can create a piece of state
               and have React automatically update the component when that state changes.</p>
        </div>
      </div>

      <div className="collapse collapse-plus">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        7. What is the purpose of the useEffect hook in React, and when would you use it?
        </div>
        <div className="collapse-content">
          <p> <span className="font-bold">The useEffect </span> hook in React allows you to perform side effects
             in function components. Side effects are tasks that affect
              something outside the function, such as fetching data,
               setting up subscriptions, manually changing the DOM, 
               or starting timers. These tasks can’t be done during the
                rendering phase because they need to happen after the
                 component has been mounted and updated.</p>
        </div>
      </div>

    </div>
  );
};

export default Faq;
