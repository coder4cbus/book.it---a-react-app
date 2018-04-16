import React, { Component } from 'react';
import '../styling/App.css';
import Book from './Book.js';
import logo from '../images/logo.png'


class App extends Component {
  constructor() {
    super();

    this.state = {
      books: []
    }
  }

  addBook() {
      this.setState(
      {
        books: [...this.state.books,
                        { id: Date.now() }]
      }
    );
  }

  deleteBook(id){
      this.setState(
      {
        books: this.state.books.filter((book)=>{return book.id !== id;})
      }
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The portable shelving solution. </h1>
        </header>
          <div className="div-board">
            <div className="col-sm-6">
              <div className="row">

            {
                this.state.books.map(book => {
                  return <Book key={book.id} id={book.id} deleteHandler={this.deleteBook.bind(this)} />
                })
              }
              </div>
            </div>
          </div>
        <div>
          <button className="btn btn-success add-button" onClick={this.addBook.bind(this)}>Add</button>
        </div>
      </div>
    );
  }
}

export default App;
