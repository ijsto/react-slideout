import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.nav`
  display: block;
  top: ${({ fromTop }) => fromTop};
  position: fixed;
  z-index: 997;
`;
const StyledOverlay = styled.nav`
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  height: 100vh;
  left: 0;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  position: fixed;
  top: 0;
  transition: all 0.5s ease-in-out;
  width: 100vw;
  z-index: 998;
`;
const StyledSlideOut = styled.nav`
  background: white;
  height: 100vh;
  position: fixed;
  transition: all ${({ speed }) => speed || '0.3s'};
  width: ${({ width }) => width};
  z-index: 999;
  ${({ left, isOpen, right }) =>
    left || !right
      ? `transform: ${isOpen ? 'translateX(0%)' : 'translateX(-100%)'};
          left: 0`
      : `transform: ${isOpen ? 'translateX(0%)' : 'translateX(100%)'};
          right: 0`};
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
    offsetTop,
    onClose,
    onCloseComponentKeyDown,
    onCloseComponentKeyPress,
    onCloseComponentKeyUp,
    onOverlayKeyPress,
    right,
    shouldCloseOnOverlayClick = true,
    speed,
    width = '350px'
  } = props;

  const fromTop = offsetTop || '64px';

  return (
    <StyledWrapper fromTop={fromTop}>
      <StyledSlideOut
        className="slideout-sidebar"
        isOpen={isOpen}
        left={left}
        right={right}
        speed={speed}
        width={width}
      >
        {(!noCloseComponent && closeComponent && (
          <div
            onClick={onClose}
            onKeyDown={onCloseComponentKeyDown}
            onKeyUp={onCloseComponentKeyPress}
            onKeyPress={onCloseComponentKeyUp}
            role="button"
            tabIndex="0"
          >
            {closeComponent}
          </div>
        )) ||
          (!noCloseComponent && (
            <StyledCloseButton
              id="dismiss"
              className="slideout-button-close"
              onClick={onClose}
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
          onClick={shouldCloseOnOverlayClick && onClose}
          onKeyPress={onOverlayKeyPress}
          role="button"
          tabIndex="0"
        />
      )}
    </StyledWrapper>
  );
};

export default SlideOut;
