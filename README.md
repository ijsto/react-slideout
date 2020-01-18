
# react-slideout

Accessible SlideOut component for React.JS

## 📖 Table of Contents

* [Installation](#installation)
* [API documentation](#api-documentation)
* [Examples](#examples)
* [Demos](#demos)

## 📦 Installation

To install, you can use [npm](https://npmjs.org/):

    $ npm install react-slideout

## 📜 API documentation

### Props

The following props are available:

- closeComponent // custom close button component
- noCloseComponent // hide/disable default close button
- isOpen // open state, control should be within parent component, or state store
- onClose // close Slideout callback for close button
- offsetTop // offset sidebar from top, default is 64px
- onCloseComponentKeyDown // custom keyboard logic for close button
- onCloseComponentKeyPress // custom keyboard logic for close button
- onCloseComponentKeyUp // custom keyboard logic for close button
- onOverlayKeyPress // add custom logic for keyboard interaction with layout
- shouldCloseOnOverlayClick = true // to disable closing the Slideout on overlay click use `shouldCloseOnOverlayClick={false}`
- width // provide custom width to the Slideout, default is 350px

### Styling

Currently you can apply CSS styles by modifying the CSS classNames.
The following classes are currently available:
- slideout-sidebar // sidebar itself
- slideout-button-close // styles default close button (you can also use `closeComponent`prop to supply custom component)
- sidebar-header // if you provide a component via `header` props you can use this class to style its wrapper
- close-overlay // style overlay `background`, `opacity`, `z-index` etc.

## 🔨 How to Use

Here is a simple example of react-modal being used in an app with some custom
styles and focusable input elements within the modal content:

```jsx
import React, { useState } from 'react';
import SlideOut from 'react-slideout';

const MySlideOut = () => {
  const [slideOutIsOpen, setSlideOutIsOpen] = useState(false);

  const openSlideOut = () => {
    setSlideOutIsOpen(true);
  }

  const closeSlideOut = () => {
    setSlideOutIsOpen(false);
  }

    return (
      <div>
        <button onClick={openSlideOut}>Open Modal</button>
        <SlideOut
          isOpen={slideOutIsOpen}
          onClose={closeSlideOut}
        >
          <h2>My Slide Out</h2>

          <div>This is the content inside React Slide Out component.</div>
          <button onClick={closeSlideOut}>Close slide-out</button>
          
        </SlideOut>
      </div>
    );
}

```

More examples are coming soon.

## 🎬 Demos

Coming soon.

## 🗺️ Roadmap

- Add entry from other sides
- Add focus management system
- Improve accessibility

## 🙆‍♂️ Contributions

Please feel free to submit PRs for the above (Roadmap) goals or otherwise