<p align="center">
  <img width="256" src="https://raw.githubusercontent.com/ijsto/react-slideout/master/assets/img/react-slideout-logo-512.png">
</p>

<hr />

# **react-slideout**

Accessible SlideOut component for React.JS

<hr />

## **📖 Table of Contents**

- [Installation](#-installation)
- [Examples](#-how-to-use)
- [API documentation](#-api-documentation)
  -- [Available props](#props)
  -- [Styling guide](#styling)
- [Demos](#-demos)
- [Roadmap](#%EF%B8%8F-roadmap)
- [Contribution](#%EF%B8%8F-contributions)

<hr />

## **📦 Installation**

To install, you can use [npm](https://npmjs.org/):

    $ npm install @ijsto/react-slideout

or [yarn](https://yarnpkg.com/):

    $ yarn add @ijsto/react-slideout

<hr />

## **🔨 How to Use**

Here is a simple example of react-modal being used in an app with some custom
styles and focusable input elements within the modal content:

```jsx
import React, { useState } from "react";
import SlideOut from "@ijsto/react-slideout";

const MySlideOut = () => {
  const [slideOutIsOpen, setSlideOutIsOpen] = useState(false);

  const openSlideOut = () => {
    setSlideOutIsOpen(true);
  };

  const closeSlideOut = () => {
    setSlideOutIsOpen(false);
  };

  return (
    <div>
      <button onClick={openSlideOut}>Open Modal</button>
      <SlideOut isOpen={slideOutIsOpen} onClose={closeSlideOut}>
        <h2>My Slide Out</h2>

        <div>This is the content inside React Slide Out component.</div>
        <button onClick={closeSlideOut}>Close slide-out</button>
      </SlideOut>
    </div>
  );
};
```

More examples are coming soon.

<hr />

## **📜 API documentation**

<hr/>

### **Props**

The following propertiess are available:

| Property name             | Type                                                               | Default               | Description                                                                             |
| ------------------------- | ------------------------------------------------------------------ | --------------------- | --------------------------------------------------------------------------------------- |
| bg                        | [CSS Color](https://www.w3schools.com/cssref/css_colors_legal.asp) | `"white"`             | Any legal CSS color value component                                                     |
| children                  | A React component                                                  | -                     | Any React component - this will appear in the slideout                                  |
| classNamePrefix           | string                                                             | -                     | Namespace - will be applied to all SlideOut components                                  |
| closeComponent            | React Component or html element                                    | -                     | Custom close button component                                                           |
| hideClose                 | boolean                                                            | `false`               | Use this to hide close button. You can use parent component to handle state and toggle  |
| isOpen                    | boolean                                                            | -                     | Controls whether the slideout is visible                                                |
| maxWidth                     | [CSS unit](https://www.w3schools.com/cssref/css_units.asp)         | `100%`               | Custom max-width of the the Slideout container. |
offsetTop                 | [CSS Unit](https://www.w3schools.com/cssref/css_units.asp)         | `0`                   | Offset slideout from top. Useful to account for the header height.                      |
| onClose                   | function                                                           | internal state toggle | A function that will close the Slideout                                                 |
| onCloseComponentKeyDown   | function                                                           | -                     | Accessibility handler                                                                   |
| onCloseComponentKeyPress  | function                                                           | -                     | Accessibility handler                                                                   |
| onCloseComponentKeyUp     | function                                                           | -                     | Accessibility handler                                                                   |
| onOverlayKeyPress         | function                                                           | -                     | Accessibility handler                                                                   |
| overflowShouldLock        | Boolean                                                            | `true`                | Locks the document body `overflow-y`                                                    |
| overlayColor              | HEX Color code                                                     | `"#000000"` (black)   | Changes overlay color must be in HEX format (example: "#ffffff")                        |
| overlayOpacity            | integer from 0 to 1                                                | `0.5`                 | Changes default opacity of the overlay                                                  |
| padding                   | [CSS unit](https://www.w3schools.com/cssref/css_units.asp)         | -                     | Applied to the inner SlideOut container                                                 |
| shouldCloseOnOverlayClick | boolean                                                            | `true`                | To disable closing, when user clicks on overlay set `shouldCloseOnOverlayClick={false}` |
| slideFrom                 | string                                                             | `"left"`              | Determines the location from where slideout will appear                                 |
| speed                     | integer                                                            | `0.3s`                | Controls the speed of the slideout animation                                            |
| width                     | [CSS unit](https://www.w3schools.com/cssref/css_units.asp)         | `350px`               | Custom width of the the Slideout |
| zIndexIncrement           | integer                                                            | `0`                   | Increments all zIndexes by the provided value. See default zIndexes below.              |

<hr/>

### **Stacking (zIndexes)**

By default Slideout components have the following zIndexes:

Here are the available `className`s:

- wrapper // 7
- close-overlay // 8
- body // 9

<hr/>

### **Styling**

We provide more fine-grained control over all React-Slideout components via CSS class names.

Here are the available `className`s:

- wrapper // the top-level Slideout component
- body // the Slideout component content
- close-button //
- close-component // wrapper that wrapper your custom close component
- close-overlay // style overlay `background`, `opacity`, `z-index` etc.

<hr />

## **🎬 Demos**

Coming soon.

<hr />

## **🗺️ Roadmap**

- Add entry from other sides
- Add focus management system
- Improve accessibility

<hr />

## **🙆‍♂️ Contributions**

Please feel free to submit PRs for the above (Roadmap) goals or otherwise

[iJS.to](https://ijs.to)
