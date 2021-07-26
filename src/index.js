import React, { useEffect } from 'react';
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

const StyledWrapper = styled.div`
  display: block;
  top: ${({ fromTop }) => fromTop};
  position: fixed;
  z-index: ${({ zIncrement }) => zIncrement + 7};
`;
const StyledOverlay = styled.div`
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
  z-index: ${({ zIncrement }) => zIncrement + 8};
`;

const StyledSlideOut = styled.div`
  background: ${({ bg }) => bg};
  height: 100vh;
  max-width: ${({ maxWidth }) => maxWidth};
  ${({ padding }) => padding && `padding: ${padding};`}
  overflow-y: auto;
  position: fixed;
  transition: all ${({ speed }) => speed || '0.3s'};
  width: ${({ width }) => width};
  z-index: ${({ zIncrement }) => zIncrement + 9};
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
    bg,
    classNamePrefix,
    closeComponent,
    closeLabel,
    hideClose,
    isOpen,
    noOverlay,
    offsetTop = '64px',
    onClose,
    onCloseComponentKeyDown,
    onCloseComponentKeyPress,
    onCloseComponentKeyUp,
    onOverlayKeyPress,
    overflowShouldLock,
    overlayColor,
    overlayOpacity,
    padding,
    shouldCloseOnOverlayClick = true,
    slideFrom = 'left',
    speed,
    width = '350px',
    zIncrement = 0,
  } = props;

  useEffect(() => {
    if (overflowShouldLock && isOpen) document.body.style.overflowY = 'hidden';
    return () => {
      if (overflowShouldLock && !isOpen)
        document.body.style.overflowY = 'hidden';
      document.body.style.overflowY = 'auto';
    };
  }, [isOpen, overflowShouldLock]);

  return (
    <StyledWrapper
      className={`${classNamePrefix ? `${classNamePrefix}-` : ''}wrapper`}
      fromTop={offsetTop}
      tabIndex="-1"
      zIncrement={zIncrement}
    >
      <StyledSlideOut
        bg={bg}
        className={`${classNamePrefix ? `${classNamePrefix}-` : ''}body`}
        fromTop={offsetTop}
        isOpen={isOpen}
        slideFrom={slideFrom}
        padding={padding}
        speed={speed}
        width={width}
        zIncrement={zIncrement}
      >
        {(!hideClose && closeComponent && (
          <div
            className={`${
              classNamePrefix ? `${classNamePrefix}-` : ''
            }close-component`}
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
          (!hideClose && (
            <StyledCloseButton
              id="dismiss"
              className={`${
                classNamePrefix ? `${classNamePrefix}-` : ''
              }close-button`}
              onClick={onClose}
              onKeyDown={e => {
                a11yClick(e, onClose);
              }}
              type="button"
            >
              {closeLabel || 'Close Sidebar'}
            </StyledCloseButton>
          ))}

        {props.children}
      </StyledSlideOut>

      {!noOverlay && (
        <StyledOverlay
          className={`${
            classNamePrefix ? `${classNamePrefix}-` : ''
          }close-overlay`}
          isOpen={isOpen}
          fromTop={offsetTop}
          onClick={shouldCloseOnOverlayClick && onClose}
          onKeyPress={onOverlayKeyPress}
          overlayColor={overlayColor}
          overlayOpacity={overlayOpacity}
          role="button"
          tabIndex={isOpen ? '0' : '-1'}
          zIncrement={zIncrement}
        />
      )}
    </StyledWrapper>
  );
};

SlideOut.defaultProps = {
  maxWidth: '100%',
  overflowShouldLock: true,
};

export default SlideOut;
