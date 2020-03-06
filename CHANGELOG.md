# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


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