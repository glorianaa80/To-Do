import React from 'react';
import '../css/modal.css'

const modal = (props) => {
  return (
    <div className="modal-wrapper" style={{
      transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
      opacity: props.show ? '1' : '0'
    }}>
      <div className="modal-header">
        <h3>Create Task</h3>
        <span className="close-modal-btn" onClick={props.close}>×</span>
      </div>
      <div className="modal-body">
        <p>your homework has been added</p>
      </div>
      <div className="modal-footer">
        <button className="btn-cancel" onClick={props.close}>add other task</button>
        <button className="btn-save">show tasks</button>
      </div>
    </div>
  )
}

export default modal;
