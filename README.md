<p align="center">
  <img width="256" src="https://raw.githubusercontent.com/ijsto/react-slideout/master/assets/img/react-slideout-logo-512.png">
</p>

# react-slideout

Accessible SlideOut component for React.JS

## 📖 Table of Contents

- [Installation](#-installation)
- [Examples](#-how-to-use)
- [API documentation](#-api-documentation)
  -- [Available props](#props)
  -- [Styling guide](#styling)
- [Demos](#-demos)
- [Roadmap](#%EF%B8%8F-roadmap)
- [Contribution](#%EF%B8%8F-contributions)

## 📦 Installation

To install, you can use [npm](https://npmjs.org/):

    $ npm install @ijsto/react-slideout

## 🔨 How to Use

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

## 📜 API documentation

### Props

The following propertiess are available:

| Property name             | Type                                                       | Default               | Description                                                                             |
| ------------------------- | ---------------------------------------------------------- | --------------------- | --------------------------------------------------------------------------------------- |
| children                  | A React component                                          | -                     | Any React component - this will appear in the slideout                                  |
| closeComponent            | React Component                                            | -                     | Custom close button component                                                           |
| isOpen                    | boolean                                                    | -                     | Controls whether the slideout is visible                                                |
| noCloseComponent          | boolean                                                    | false                 | Use this to hide close button. You can use parent component to handle state and toggle  |
| onClose                   | function                                                   | internal state toggle | A function that will close the Slideout                                                 |
| offsetTop                 | [CSS unit](https://www.w3schools.com/cssref/css_units.asp  | 64px                  | Offset slideout from top. Useful if to account for headers etc.                         |
| onCloseComponentKeyDown   | function                                                   | -                     | Accessibility handler                                                                   |
| onCloseComponentKeyPress  | function                                                   | -                     | Accessibility handler                                                                   |
| onCloseComponentKeyUp     | function                                                   | -                     | Accessibility handler                                                                   |
| onOverlayKeyPress         | function                                                   | -                     | Accessibility handler                                                                   |
| overlayColor              | HEX Color code                                             | #000000 (black)       | Changes overlay color must be in HEX format (example: "#ffffff")                        |
| overlayOpacity            | integer from 0 to 1                                        | 0.5                   | Changes default opacity of the overlay                                                  |
| padding                   | [CSS unit](https://www.w3schools.com/cssref/css_units.asp) | -                     | Applied to the inner SlideOut container                                                 |
| shouldCloseOnOverlayClick | boolean                                                    | true                  | To disable closing, when user clicks on overlay set `shouldCloseOnOverlayClick={false}` |
| speed                     | integer                                                    | 0.3s                  | controls the speed of the slideout animation                                            |
| width                     | [CSS unit](https://www.w3schools.com/cssref/css_units.asp) | 350px                 | Custom width of the the Slideout                                                        |

### Styling

Currently you can apply CSS styles by modifying the CSS classNames.
The following classes are currently available:

- slideout-sidebar // sidebar itself
- slideout-button-close // styles default close button (you can also use `closeComponent`prop to supply custom component)
- sidebar-header // if you provide a component via `header` props you can use this class to style its wrapper
- close-overlay // style overlay `background`, `opacity`, `z-index` etc.

## 🎬 Demos

Coming soon.

## 🗺️ Roadmap

- Add entry from other sides
- Add focus management system
- Improve accessibility

## 🙆‍♂️ Contributions

Please feel free to submit PRs for the above (Roadmap) goals or otherwise
