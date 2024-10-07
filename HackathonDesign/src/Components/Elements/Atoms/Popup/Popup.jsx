import React, { useEffect } from 'react';
import './Popup.css'

const Popup = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      // Auto-hide the toast after 3 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 6000);

      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [show, onClose]);

  if (!show) return null; // Don't render if not showing

  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <strong className="me-auto">Notification</strong>
          <small>Just now</small>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>
        <div className="toast-body toastMessage">{message}</div>
      </div>
    </div>
  );
};

export default Popup;
