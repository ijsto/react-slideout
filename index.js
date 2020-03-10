"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  appearance: none;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: white;\n  height: 100vh;\n  position: fixed;\n  transition: all ", ";\n  width: ", ";\n  z-index: 999;\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: rgba(0, 0, 0, 0.5);\n  display: ", ";\n  height: 100vh;\n  left: 0;\n  opacity: ", ";\n  position: fixed;\n  top: 0;\n  transition: all 0.5s ease-in-out;\n  width: 100vw;\n  z-index: 998;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  top: ", ";\n  position: fixed;\n  z-index: 997;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledWrapper = _styledComponents["default"].nav(_templateObject(), function (_ref) {
  var fromTop = _ref.fromTop;
  return fromTop;
});

var StyledOverlay = _styledComponents["default"].nav(_templateObject2(), function (_ref2) {
  var isOpen = _ref2.isOpen;
  return isOpen ? 'block' : 'none';
}, function (_ref3) {
  var isOpen = _ref3.isOpen;
  return isOpen ? '1' : '0';
});

var StyledSlideOut = _styledComponents["default"].nav(_templateObject3(), function (_ref4) {
  var speed = _ref4.speed;
  return speed || '0.3s';
}, function (_ref5) {
  var width = _ref5.width;
  return width;
}, function (_ref6) {
  var left = _ref6.left,
      isOpen = _ref6.isOpen,
      right = _ref6.right;
  return left || !right ? "transform: ".concat(isOpen ? 'translateX(0%)' : 'translateX(-100%)', ";\n          left: 0") : "transform: ".concat(isOpen ? 'translateX(0%)' : 'translateX(100%)', ";\n          right: 0");
});

var StyledCloseButton = _styledComponents["default"].button(_templateObject4());

var SlideOut = function SlideOut(props) {
  var closeComponent = props.closeComponent,
      header = props.header,
      isOpen = props.isOpen,
      left = props.left,
      noCloseComponent = props.noCloseComponent,
      noOverlay = props.noOverlay,
      offsetTop = props.offsetTop,
      onClose = props.onClose,
      onCloseComponentKeyDown = props.onCloseComponentKeyDown,
      onCloseComponentKeyPress = props.onCloseComponentKeyPress,
      onCloseComponentKeyUp = props.onCloseComponentKeyUp,
      onOverlayKeyPress = props.onOverlayKeyPress,
      right = props.right,
      _props$shouldCloseOnO = props.shouldCloseOnOverlayClick,
      shouldCloseOnOverlayClick = _props$shouldCloseOnO === void 0 ? true : _props$shouldCloseOnO,
      speed = props.speed,
      _props$width = props.width,
      width = _props$width === void 0 ? '350px' : _props$width;
  var fromTop = offsetTop || '64px';
  return _react["default"].createElement(StyledWrapper, {
    fromTop: fromTop
  }, _react["default"].createElement(StyledSlideOut, {
    className: "slideout-sidebar",
    isOpen: isOpen,
    left: left,
    right: right,
    speed: speed,
    width: width
  }, !noCloseComponent && closeComponent && _react["default"].createElement("div", {
    onClick: onClose,
    onKeyDown: onCloseComponentKeyDown,
    onKeyUp: onCloseComponentKeyPress,
    onKeyPress: onCloseComponentKeyUp,
    role: "button",
    tabIndex: "0"
  }, closeComponent) || !noCloseComponent && _react["default"].createElement(StyledCloseButton, {
    id: "dismiss",
    className: "slideout-button-close",
    onClick: onClose,
    type: "button"
  }, "CLOSE"), header && _react["default"].createElement("div", {
    className: "sidebar-header"
  }, header), props.children), !noOverlay && _react["default"].createElement(StyledOverlay, {
    "aria-label": "close-overlay",
    className: "overlay",
    onClick: shouldCloseOnOverlayClick && onClose,
    onKeyPress: onOverlayKeyPress,
    role: "button",
    tabIndex: "0"
  }));
};

var _default = SlideOut;
exports["default"] = _default;
