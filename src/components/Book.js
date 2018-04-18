import React, { Component } from 'react';
import '../styling/Book.css';
import PropTypes from 'prop-types';


const GENERIC_BOOK_TITLE = "New Book Title", GENERIC_BOOK_INFO = "New Book Info / Summary";

class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: GENERIC_BOOK_TITLE,
      titleInput: GENERIC_BOOK_TITLE,
      info: GENERIC_BOOK_INFO,
      infoInput: GENERIC_BOOK_INFO,
      // activeMode: true,
      editMode: false
    }
  }

  handleEdit() {
     this.setState({
       editMode: true
     });
   }

   handleDelete() {
    this.props.deleteHandler(this.props.id);
   }
   _handleTitleChange(e) {
     console.log(e.target.value);
     this.setState({titleInput: e.target.value});
   }

   _handleInfoChange(e) {
     console.log(e.target.value);
     this.setState({infoInput: e.target.value});
   }

  handleSave() {
     this.setState({
     title: this.state.titleInput,
     info: this.state.infoInput,
     // activeMode: true,
     editMode: false
     });
   }

  render() {
    let titleElement, infoElement,buttonArea;
    if (this.state.editMode) {
      titleElement = <textarea value={this.state.titleInput} onChange={this._handleTitleChange.bind(this)} className="title-textarea" defaultValue={this.state.title}></textarea>;
      infoElement = <textarea value={this.state.infoInput} onChange={this._handleInfoChange.bind(this)} className="body-textarea" defaultValue={this.state.info}></textarea>;
      buttonArea = <div><button className="btn btn-primary" onClick={this.handleSave.bind(this)}>Save</button></div>;
    } else {
      titleElement = <h5>{this.state.title}</h5>;
      infoElement = <p>{this.state.info}</p>;
      buttonArea =
      (<div>
        <button className="btn btn-info" onClick={this.handleEdit.bind(this)}>Edit
        </button>
        <button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button>
      </div> );
    }

    return (
      <div className="col-sm-4">
        <div className="card card-view">
          <div className="card-body">
            {titleElement}
            {infoElement}
            {buttonArea}
          </div>
        </div>
      </div>
    );
  }

}

Book.defaultProps = {
  title: "A cool title",
  info: "Info About Book",
  // activeMode: true,
};

Book.propTypes = {
  title: PropTypes.string
};

export default Book;
