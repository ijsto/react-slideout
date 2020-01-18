"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SlideOut = function SlideOut(props) {
  var closeComponent = props.closeComponent,
      header = props.header,
      isOpen = props.isOpen,
      onClose = props.onClose,
      offsetTop = props.offsetTop,
      onCloseComponentKeyDown = props.onCloseComponentKeyDown,
      onCloseComponentKeyPress = props.onCloseComponentKeyPress,
      onCloseComponentKeyUp = props.onCloseComponentKeyUp,
      onOverlayKeyPress = props.onOverlayKeyPress,
      noCloseComponent = props.noCloseComponent,
      _props$shouldCloseOnO = props.shouldCloseOnOverlayClick,
      shouldCloseOnOverlayClick = _props$shouldCloseOnO === void 0 ? true : _props$shouldCloseOnO,
      _props$width = props.width,
      width = _props$width === void 0 ? '350px' : _props$width;
  var fromTop = offsetTop || '64px';
  var wrapperStyles = {
    display: 'block',
    position: 'fixed',
    top: fromTop,
    zIndex: '997'
  };
  var sidebarStyles = {
    background: 'white',
    transition: 'all 0.3s',
    height: '100vh',
    width: width,
    transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)',
    position: 'fixed',
    top: fromTop,
    left: '0',
    zIndex: '999'
  };
  var closeButtonStyles = {
    position: 'absolute',
    top: '10px',
    appearance: 'none',
    right: '10px'
  };
  var overlayStyles = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: '998',
    opacity: isOpen ? '1' : '0',
    transition: 'all 0.5s ease-in-out'
  };
  return _react["default"].createElement("div", {
    style: wrapperStyles
  }, _react["default"].createElement("nav", {
    className: "slideout-sidebar",
    style: sidebarStyles
  }, !noCloseComponent && closeComponent && _react["default"].createElement("div", {
    onClick: onClose,
    onKeyDown: onCloseComponentKeyDown,
    onKeyUp: onCloseComponentKeyPress,
    onKeyPress: onCloseComponentKeyUp,
    role: "button",
    tabIndex: "0"
  }, closeComponent) || !noCloseComponent && _react["default"].createElement("button", {
    id: "dismiss",
    className: "slideout-button-close",
    style: closeButtonStyles,
    onClick: onClose,
    type: "button"
  }, "CLOSE"), header && _react["default"].createElement("div", {
    className: "sidebar-header"
  }, header), props.children), _react["default"].createElement("div", {
    "aria-label": "close-overlay",
    className: "overlay",
    onClick: shouldCloseOnOverlayClick && onClose,
    style: overlayStyles,
    onKeyPress: onOverlayKeyPress,
    role: "button",
    tabIndex: "0"
  }));
};

var _default = SlideOut;
exports["default"] = _default;
