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
  var data = _taggedTemplateLiteral(["\n  background: white;\n  height: 100vh;\n  ", "\n  overflow-y: auto;\n  position: fixed;\n  transition: all ", ";\n  width: ", ";\n  z-index: 999;\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: rgba(\n    ", ",\n    ", "\n  );\n  display: ", ";\n  height: 100vh;\n  left: 0;\n  opacity: ", ";\n  position: fixed;\n  top: ", ";\n  transition: all 0.5s ease-in-out;\n  width: 100vw;\n  z-index: 998;\n"]);

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

function a11yClick(event, action) {
  if (event.type === 'click') {
    action();
    return true;
  }

  var code = event.charCode || event.keyCode;

  if (code === 32 || code === 13) {
    action();
    return true;
  }

  return false;
}

function hexToRgb(hex) {
  var result = /^#?([a-fd]{2})([a-fd]{2})([a-fd]{2})$/i.exec(hex);

  if (result) {
    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);
    return "".concat(r, ",").concat(g, ",").concat(b);
  }

  return null;
}

var StyledWrapper = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var fromTop = _ref.fromTop;
  return fromTop;
});

var StyledOverlay = _styledComponents["default"].div(_templateObject2(), function (_ref2) {
  var overlayColor = _ref2.overlayColor;
  return overlayColor ? hexToRgb(overlayColor) : '0,0,0';
}, function (_ref3) {
  var overlayOpacity = _ref3.overlayOpacity;
  return overlayOpacity || '0.5';
}, function (_ref4) {
  var isOpen = _ref4.isOpen;
  return isOpen ? 'block' : 'none';
}, function (_ref5) {
  var isOpen = _ref5.isOpen;
  return isOpen ? '1' : '0';
}, function (_ref6) {
  var fromTop = _ref6.fromTop;
  return fromTop;
});

var StyledSlideOut = _styledComponents["default"].div(_templateObject3(), function (_ref7) {
  var padding = _ref7.padding;
  return padding && "padding: ".concat(padding, ";");
}, function (_ref8) {
  var speed = _ref8.speed;
  return speed || '0.3s';
}, function (_ref9) {
  var width = _ref9.width;
  return width;
}, function (_ref10) {
  var fromTop = _ref10.fromTop,
      slideFrom = _ref10.slideFrom,
      isOpen = _ref10.isOpen;
  return slideFrom === 'left' ? "transform: ".concat(isOpen ? 'translateX(0%)' : 'translateX(-100%)', ";\n          left: 0") : slideFrom === 'right' ? "transform: ".concat(isOpen ? 'translateX(0%)' : 'translateX(100%)', ";\n          right: 0") : slideFrom === 'top' ? "transform: ".concat(isOpen ? 'translateY(0%)' : 'translateY(-100%)', ";\n          top: ").concat(fromTop, "; left: 0; bottom:0;right: 0;") : "transform: ".concat(isOpen ? 'translateY(0%)' : 'translateY(100%)', ";\n      top: ").concat(fromTop, "; left: 0; bottom:0;right: 0;");
});

var StyledCloseButton = _styledComponents["default"].button(_templateObject4());

var SlideOut = function SlideOut(props, ref) {
  var closeComponent = props.closeComponent,
      header = props.header,
      isOpen = props.isOpen,
      left = props.left,
      noCloseComponent = props.noCloseComponent,
      noOverlay = props.noOverlay,
      _props$offsetTop = props.offsetTop,
      offsetTop = _props$offsetTop === void 0 ? '64px' : _props$offsetTop,
      onClose = props.onClose,
      onCloseComponentKeyDown = props.onCloseComponentKeyDown,
      onCloseComponentKeyPress = props.onCloseComponentKeyPress,
      onCloseComponentKeyUp = props.onCloseComponentKeyUp,
      onOverlayKeyPress = props.onOverlayKeyPress,
      overlayColor = props.overlayColor,
      overlayOpacity = props.overlayOpacity,
      padding = props.padding,
      _props$shouldCloseOnO = props.shouldCloseOnOverlayClick,
      shouldCloseOnOverlayClick = _props$shouldCloseOnO === void 0 ? true : _props$shouldCloseOnO,
      _props$slideFrom = props.slideFrom,
      slideFrom = _props$slideFrom === void 0 ? 'left' : _props$slideFrom,
      speed = props.speed,
      style = props.style,
      _props$width = props.width,
      width = _props$width === void 0 ? '350px' : _props$width;
  return /*#__PURE__*/_react["default"].createElement(StyledWrapper, {
    fromTop: offsetTop,
    tabIndex: "-1"
  }, /*#__PURE__*/_react["default"].createElement(StyledSlideOut, {
    className: "slideout-sidebar",
    fromTop: offsetTop,
    isOpen: isOpen,
    left: left,
    slideFrom: slideFrom,
    padding: padding,
    ref: ref,
    speed: speed,
    style: style,
    width: width
  }, !noCloseComponent && closeComponent && /*#__PURE__*/_react["default"].createElement("div", {
    onClick: onClose,
    onKeyDown: onCloseComponentKeyDown,
    onKeyUp: onCloseComponentKeyPress,
    onKeyPress: onCloseComponentKeyUp,
    role: "button",
    tabIndex: isOpen ? '0' : '-1'
  }, closeComponent) || !noCloseComponent && /*#__PURE__*/_react["default"].createElement(StyledCloseButton, {
    id: "dismiss",
    className: "slideout-button-close",
    onClick: onClose,
    onKeyDown: function onKeyDown(e) {
      a11yClick(e, onClose);
    },
    type: "button"
  }, "CLOSE"), header && /*#__PURE__*/_react["default"].createElement("div", {
    className: "sidebar-header"
  }, header), props.children), !noOverlay && /*#__PURE__*/_react["default"].createElement(StyledOverlay, {
    "aria-label": "close-overlay",
    className: "overlay",
    isOpen: isOpen,
    fromTop: offsetTop,
    onClick: shouldCloseOnOverlayClick && onClose,
    onKeyPress: onOverlayKeyPress,
    overlayColor: overlayColor,
    overlayOpacity: overlayOpacity,
    role: "button",
    tabIndex: isOpen ? '0' : '-1'
  }));
};

var _default = SlideOut;
exports["default"] = _default;
