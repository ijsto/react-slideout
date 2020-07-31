import React from 'react';
import styled from 'styled-components';

function a11yClick(event, action) {
  if (event.type === 'click') {
    action();
    return true;
  }

  const code = event.charCode || event.keyCode;
  if (code === 32 || code === 13) {
    action();
    return true;
  }

  return false;
}

function hexToRgb(hex) {
  const result = /^#?([a-fd]{2})([a-fd]{2})([a-fd]{2})$/i.exec(hex);
  if (result) {
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return `${r},${g},${b}`;
  }
  return null;
}

const StyledWrapper = styled.nav`
  display: block;
  top: ${({ fromTop }) => fromTop};
  position: fixed;
  z-index: 997;
`;
const StyledOverlay = styled.nav`
  background: rgba(
    ${({ overlayColor }) => (overlayColor ? hexToRgb(overlayColor) : '0,0,0')},
    ${({ overlayOpacity }) => overlayOpacity || '0.5'}
  );
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  height: 100vh;
  left: 0;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  position: fixed;
  top: ${({ fromTop }) => fromTop};
  transition: all 0.5s ease-in-out;
  width: 100vw;
  z-index: 998;
`;
const StyledSlideOut = styled.nav`
  background: white;
  height: 100vh;
  ${({ padding }) => padding && `padding: ${padding};`}
  overflow-y: auto;
  position: fixed;
  transition: all ${({ speed }) => speed || '0.3s'};
  width: ${({ width }) => width};
  z-index: 999;
  ${({ fromTop, slideFrom, isOpen }) =>
    slideFrom === 'left'
      ? `transform: ${isOpen ? 'translateX(0%)' : 'translateX(-100%)'};
          left: 0`
      : slideFrom === 'right'
      ? `transform: ${isOpen ? 'translateX(0%)' : 'translateX(100%)'};
          right: 0`
      : slideFrom === 'top'
      ? `transform: ${isOpen ? 'translateY(0%)' : 'translateY(-100%)'};
          top: ${fromTop}; left: 0; bottom:0;right: 0;`
      : `transform: ${isOpen ? 'translateY(0%)' : 'translateY(100%)'};
      top: ${fromTop}; left: 0; bottom:0;right: 0;`};
`;
const StyledCloseButton = styled.button`
  appearance: none;
  position: absolute;
  right: 10px;
  top: 10px;
`;

const SlideOut = props => {
  const {
    closeComponent,
    header,
    isOpen,
    left,
    noCloseComponent,
    noOverlay,
    offsetTop = '64px',
    onClose,
    onCloseComponentKeyDown,
    onCloseComponentKeyPress,
    onCloseComponentKeyUp,
    onOverlayKeyPress,
    overlayColor,
    overlayOpacity,
    padding,
    shouldCloseOnOverlayClick = true,
    slideFrom = 'left',
    speed,
    style,
    width = '350px'
  } = props;

  return (
    <StyledWrapper fromTop={offsetTop} tabIndex="-1">
      <StyledSlideOut
        className="slideout-sidebar"
        fromTop={offsetTop}
        isOpen={isOpen}
        left={left}
        slideFrom={slideFrom}
        padding={padding}
        speed={speed}
        style={style}
        width={width}
      >
        {(!noCloseComponent && closeComponent && (
          <div
            onClick={onClose}
            onKeyDown={onCloseComponentKeyDown}
            onKeyUp={onCloseComponentKeyPress}
            onKeyPress={onCloseComponentKeyUp}
            role="button"
            tabIndex={isOpen ? '0' : '-1'}
          >
            {closeComponent}
          </div>
        )) ||
          (!noCloseComponent && (
            <StyledCloseButton
              id="dismiss"
              className="slideout-button-close"
              onClick={onClose}
              onKeyDown={e => {
                a11yClick(e, onClose);
              }}
              type="button"
            >
              CLOSE
            </StyledCloseButton>
          ))}

        {header && <div className="sidebar-header">{header}</div>}

        {props.children}
      </StyledSlideOut>

      {!noOverlay && (
        <StyledOverlay
          aria-label="close-overlay"
          className="overlay"
          isOpen={isOpen}
          fromTop={offsetTop}
          onClick={shouldCloseOnOverlayClick && onClose}
          onKeyPress={onOverlayKeyPress}
          overlayColor={overlayColor}
          overlayOpacity={overlayOpacity}
          role="button"
          tabIndex={isOpen ? '0' : '-1'}
        />
      )}
    </StyledWrapper>
  );
};

export default SlideOut;
