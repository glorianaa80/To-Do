import React from 'react';
import '../css/form.css'
import '../css/modal.css'
import Modal from './modal';

class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: {
        task: '',
        deadline: '',
        time: '',
        des: ''
      },
      isShowing: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;    
    this.setState({
      newTodo: Object.assign({}, this.state.newTodo, {
        [name]: value
      })
    });

  }


  handleSubmit(e) {
    e.preventDefault();
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  }

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  }

  updateInputValue(e) {
    this.setState({
      value: e.target.value
    })
    console.log('hola')
  }
  render() {
    const { task, deadline, time, des } = this.state.newTodo
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name"> Task Name: </label>
        <input className="to-do__input" id="name" type="text" name="task" value={task} onChange={this.handleChange} />
        <label htmlFor="deadline"> Deadline: </label>
        <input className="to-do__input" id="deadline" type="date" name="deadline" value={deadline} onChange={this.handleChange} />
        <label htmlFor="time"> Time / Hour: </label>
        <input className="to-do__input" id="time" type="time" name="time" value={time} onChange={this.handleChange} />
        <label htmlFor="des"> Task Description: </label>
        <textarea className="to-do__input to-do__input--ht" id="des" name="des" value={des} onChange={this.handleChange} />
        {this.state.isShowing ? <div onClick={this.closeModalHandler}></div> : null}
        <button type="submit" className="submit-btn btn-2 open-modal-btn" onClick={this.openModalHandler}>Create Task</button>
        <Modal
          className="modal"
          show={this.state.isShowing}
          close={this.closeModalHandler}>
        </Modal>
      </form>
    );
  }


}

export default NameForm;