# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.1] - 2020-11-08

### Added

- @ijsto/eslint-config (@scottagirs / Montreal)

### Changed

- Reverted 0.1.0

## [0.1.0] - 2020-11-08

### Added

- Updated container element tags (@scottagirs / Montreal)

## [0.0.15] - 2020-07-31

### Added

- build of version 0.0.14

## [0.0.14] - 2020-07-31

### Fixed

- vertical overflow issue which prevented content from being scrollable

## [0.0.13] - 2020-04-10

### Added

- `style` // prop - Passes CSS style object to Slideout wrapper
- a11y click // handles accessibility interaction

## [0.0.12] - 2020-03-28

### Push latest build

## [0.0.11] - 2020-03-28

### Bugfix

- import React

## [0.0.10] - 2020-03-28

### Added

- `slideFrom` // prop - Determines the location from where slideout will appear

### Update

- API README docs related to available props

### Removed

- `right` prop in favour of `slideFrom`

## [0.0.9] - 2020-03-11

### Added

- `padding` prop // padding is applied to the inner SlideOut container
- `overlayColor` prop // change default color to overlay takes in HEX color code (example: "#ffffff")
- `overlayOpacity` prop // change defauly opacity to overlay

### Fixed

- `noOverlay`

## [0.0.8] - 2020-03-10

### Added

- `speed` prop // controls the speed of the slideout animation

## [0.0.7] - 2020-03-05

### Added

- noOverlay // disable overlay, when slideout is open
- `styled-components` to manage styles
- keywords to package.json

### Fix

- width and offsetTop

## [0.0.6] - 2020-01-21

### Fix

- default overlay position

## [0.0.5] - 2020-01-20

### Added

- `.npmignore` file to ignore assets

## [0.0.4] - 2020-01-20

### Refactored

- logo file was added to repository and referenced in README

## [0.0.3] - 2020-01-20

No changes

## [0.0.2] - 2020-01-20

### Added

- Branding/Logo

## [0.0.1] - 2020-01-18

### Initial Commit

The following props/functionality is already available:

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

-
- ignore no-array-index-key
- ignore require-default-props
- ignore no-unescaped-entities
