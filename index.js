"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var StyledWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: block;\n  top: ", ";\n  position: fixed;\n  z-index: ", ";\n"])), function (_ref) {
  var fromTop = _ref.fromTop;
  return fromTop;
}, function (_ref2) {
  var zIncrement = _ref2.zIncrement;
  return zIncrement + 7;
});

var StyledOverlay = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background: rgba(\n    ", ",\n    ", "\n  );\n  display: ", ";\n  height: 100vh;\n  left: 0;\n  opacity: ", ";\n  position: fixed;\n  top: ", ";\n  transition: all 0.5s ease-in-out;\n  width: 100vw;\n  z-index: ", ";\n"])), function (_ref3) {
  var overlayColor = _ref3.overlayColor;
  return overlayColor ? hexToRgb(overlayColor) : '0,0,0';
}, function (_ref4) {
  var overlayOpacity = _ref4.overlayOpacity;
  return overlayOpacity || '0.5';
}, function (_ref5) {
  var isOpen = _ref5.isOpen;
  return isOpen ? 'block' : 'none';
}, function (_ref6) {
  var isOpen = _ref6.isOpen;
  return isOpen ? '1' : '0';
}, function (_ref7) {
  var fromTop = _ref7.fromTop;
  return fromTop;
}, function (_ref8) {
  var zIncrement = _ref8.zIncrement;
  return zIncrement + 8;
});

var StyledSlideOut = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background: ", ";\n  height: 100vh;\n  ", "\n  overflow-y: auto;\n  position: fixed;\n  transition: all ", ";\n  width: ", ";\n  z-index: ", ";\n  ", ";\n"])), function (_ref9) {
  var bg = _ref9.bg;
  return bg;
}, function (_ref10) {
  var padding = _ref10.padding;
  return padding && "padding: ".concat(padding, ";");
}, function (_ref11) {
  var speed = _ref11.speed;
  return speed || '0.3s';
}, function (_ref12) {
  var width = _ref12.width;
  return width;
}, function (_ref13) {
  var zIncrement = _ref13.zIncrement;
  return zIncrement + 9;
}, function (_ref14) {
  var fromTop = _ref14.fromTop,
      slideFrom = _ref14.slideFrom,
      isOpen = _ref14.isOpen;
  return slideFrom === 'left' ? "transform: ".concat(isOpen ? 'translateX(0%)' : 'translateX(-100%)', ";\n          left: 0") : slideFrom === 'right' ? "transform: ".concat(isOpen ? 'translateX(0%)' : 'translateX(100%)', ";\n          right: 0") : slideFrom === 'top' ? "transform: ".concat(isOpen ? 'translateY(0%)' : 'translateY(-100%)', ";\n          top: ").concat(fromTop, "; left: 0; bottom:0;right: 0;") : "transform: ".concat(isOpen ? 'translateY(0%)' : 'translateY(100%)', ";\n      top: ").concat(fromTop, "; left: 0; bottom:0;right: 0;");
});

var StyledCloseButton = _styledComponents["default"].button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  appearance: none;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n"])));

var SlideOut = function SlideOut(props) {
  var bg = props.bg,
      classNamePrefix = props.classNamePrefix,
      closeComponent = props.closeComponent,
      closeLabel = props.closeLabel,
      hideClose = props.hideClose,
      isOpen = props.isOpen,
      noOverlay = props.noOverlay,
      _props$offsetTop = props.offsetTop,
      offsetTop = _props$offsetTop === void 0 ? '64px' : _props$offsetTop,
      onClose = props.onClose,
      onCloseComponentKeyDown = props.onCloseComponentKeyDown,
      onCloseComponentKeyPress = props.onCloseComponentKeyPress,
      onCloseComponentKeyUp = props.onCloseComponentKeyUp,
      onOverlayKeyPress = props.onOverlayKeyPress,
      overflowShouldLock = props.overflowShouldLock,
      overlayColor = props.overlayColor,
      overlayOpacity = props.overlayOpacity,
      padding = props.padding,
      _props$shouldCloseOnO = props.shouldCloseOnOverlayClick,
      shouldCloseOnOverlayClick = _props$shouldCloseOnO === void 0 ? true : _props$shouldCloseOnO,
      _props$slideFrom = props.slideFrom,
      slideFrom = _props$slideFrom === void 0 ? 'left' : _props$slideFrom,
      speed = props.speed,
      _props$width = props.width,
      width = _props$width === void 0 ? '350px' : _props$width,
      _props$zIncrement = props.zIncrement,
      zIncrement = _props$zIncrement === void 0 ? 0 : _props$zIncrement;
  (0, _react.useEffect)(function () {
    if (overflowShouldLock && isOpen) document.body.style.overflowY = 'hidden';
    return function () {
      if (overflowShouldLock && !isOpen) document.body.style.overflowY = 'hidden';
      document.body.style.overflowY = 'auto';
    };
  }, [isOpen, overflowShouldLock]);
  return /*#__PURE__*/_react["default"].createElement(StyledWrapper, {
    className: "".concat(classNamePrefix ? "".concat(classNamePrefix, "-") : '', "wrapper"),
    fromTop: offsetTop,
    tabIndex: "-1",
    zIncrement: zIncrement
  }, /*#__PURE__*/_react["default"].createElement(StyledSlideOut, {
    bg: bg,
    className: "".concat(classNamePrefix ? "".concat(classNamePrefix, "-") : '', "body"),
    fromTop: offsetTop,
    isOpen: isOpen,
    slideFrom: slideFrom,
    padding: padding,
    speed: speed,
    width: width,
    zIncrement: zIncrement
  }, !hideClose && closeComponent && /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(classNamePrefix ? "".concat(classNamePrefix, "-") : '', "close-component"),
    onClick: onClose,
    onKeyDown: onCloseComponentKeyDown,
    onKeyUp: onCloseComponentKeyPress,
    onKeyPress: onCloseComponentKeyUp,
    role: "button",
    tabIndex: isOpen ? '0' : '-1'
  }, closeComponent) || !hideClose && /*#__PURE__*/_react["default"].createElement(StyledCloseButton, {
    id: "dismiss",
    className: "".concat(classNamePrefix ? "".concat(classNamePrefix, "-") : '', "close-button"),
    onClick: onClose,
    onKeyDown: function onKeyDown(e) {
      a11yClick(e, onClose);
    },
    type: "button"
  }, closeLabel || 'Close Sidebar'), props.children), !noOverlay && /*#__PURE__*/_react["default"].createElement(StyledOverlay, {
    className: "".concat(classNamePrefix ? "".concat(classNamePrefix, "-") : '', "close-overlay"),
    isOpen: isOpen,
    fromTop: offsetTop,
    onClick: shouldCloseOnOverlayClick && onClose,
    onKeyPress: onOverlayKeyPress,
    overlayColor: overlayColor,
    overlayOpacity: overlayOpacity,
    role: "button",
    tabIndex: isOpen ? '0' : '-1',
    zIncrement: zIncrement
  }));
};

SlideOut.defaultProps = {
  overflowShouldLock: true
};
var _default = SlideOut;
exports["default"] = _default;
