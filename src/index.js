import React from 'react';

const SlideOut = props => {
  const {
    closeComponent,
    header,
    isOpen,
    onClose,
    offsetTop,
    onCloseComponentKeyDown,
    onCloseComponentKeyPress,
    onCloseComponentKeyUp,
    onOverlayKeyPress,
    noCloseComponent,
    shouldCloseOnOverlayClick = true,
    width = '350px'
  } = props;

  const fromTop = offsetTop || '64px';

  const wrapperStyles = {
    display: 'block',
    position: 'fixed',
    top: fromTop,
    zIndex: '997'
  };

  const sidebarStyles = {
    background: 'white',
    transition: 'all 0.3s',
    height: '100vh',
    width,
    transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)',
    position: 'fixed',
    top: fromTop,
    left: '0',
    zIndex: '999'
  };

  const closeButtonStyles = {
    position: 'absolute',
    top: '10px',
    appearance: 'none',
    right: '10px'
  };

  const overlayStyles = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: '998',
    opacity: isOpen ? '1' : '0',
    transition: 'all 0.5s ease-in-out'
  };

  return (
    <div style={wrapperStyles}>
      <nav className="slideout-sidebar" style={sidebarStyles}>
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
            <button
              id="dismiss"
              className="slideout-button-close"
              style={closeButtonStyles}
              onClick={onClose}
              type="button"
            >
              CLOSE
            </button>
          ))}

        {header && <div className="sidebar-header">{header}</div>}

        {props.children}
      </nav>

      <div
        aria-label="close-overlay"
        className="overlay"
        onClick={shouldCloseOnOverlayClick && onClose}
        style={overlayStyles}
        onKeyPress={onOverlayKeyPress}
        role="button"
        tabIndex="0"
      />
    </div>
  );
};

export default SlideOut;
