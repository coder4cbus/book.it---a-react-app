import React, { Component } from 'react';
import '../styling/App.css';
import Book from './Book.js';
import logo from '../images/logo.png'
import uniqueId from 'unique-id'

function ActiveBooks (props) {
      return (
          <div>
          <h2>Active Books</h2>
        <ul>
            {props.list.map((book) => (
              <li key={book.id}>
                <span>{book.id}</span>
                <button onClick={() => props.onRemoveBook(book.id)}>Remove</button>
                <button onClick={() => props.onToggleBook(book.id)}>Deactivate</button>
              </li>
            ))}
          </ul>
         </div>
      );
    }
    function InactiveBooks (props) {
      return (
        <div>
          <h2> Inactive Books </h2>
          <ul>
            {props.list.map((book) => (
              <li key={book.id}>
                <span>{book.id}</span>
                <button onClick={() => props.onToggleBook(book.id)}>Activate</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }

class App extends Component {
  constructor() {
    super();

    this.state = {
      books: [
        {
          title: 'One',
          active:false,
        },
        {
          title: 'Two',
          active:true,
        },
        {
          title: 'Three',
          active:false,
        },
        {
          title: 'Four',
          active:true,
        },
        {
          title: 'Five',
          active:false
        }
      ],
      input: '',
    }
    // this.handleRemoveBook = this.handleRemoveBook.bind(this)
    // this.updateInput = this.updateInput.bind(this)
    this.handleAddBook = this.handleAddBook.bind(this)
    this.handleToggleBook = this.handleToggleBook.bind(this)

    console.log('=====CONSTRUCTOR=====')
  }
    componentDidMount() {
        console.log('=====componentDidMount=====')
    }
    componentDidUpdate() {
        console.log('=====componentDidUpdate=====')
    }
    componentWillUnmount() {
        console.log('=====componentWillUnmount=====')
    }

  // componentDidMount() {
  //   API.fetchBooks()
  //   .then((books)) => {
  //     console.log('BOOKS', books)
  //   });
  // }

  handleAddBook() {
    // books: [...this.books,
    //             { id: uniqueId() }]

    this.setState((currentState) =>
    {
      return {
        books: currentState.books.concat([{
          id: uniqueId(),
          title: this.state.titleInput,
          body: this.state.InfoInput,
          active: true
        }]),
        input: ''
        }
      })
    }

  // Below does not appear to be replicated in other code
  load_Book(element) {
     alert(element.id);
   }
 // Above does not appear to be replicated in other code
  handleRemoveBook(id){
      this.setState((currentState) =>
      {
        return {
          books: currentState.books.filter((book)=> book.id !== id)}
      }
    );
  }
  handleToggleBook(id) {
          this.setState((currentState) => {
            const book = currentState.books.find((book) => book.id === id)
            console.log(book.id);
            return {
              books: currentState.books.filter((book) => book.id !== id)
                .concat([{
                  id: book.id,
                  active: !book.active
                }])
            }
          });
        }
// UpdateInput(e) {
//   const value = e.target.value
//   this.setState({
//     input: value
//   })
// }

  render() {
        console.log('=====RENDER=====')
    return (
      <div className="container-fluid">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The portable shelving solution. </h1>
        </header>
          <div className="div-board">
          <button className="btn btn-success add-button" onClick={this.handleAddBook.bind(this)}>Add</button>
            <div className="row">
          {
            this.state.books.map (book => {
              return <Book key={book.id} id={book.id} deleteHandler={this.handleRemoveBook.bind(this)} />
            })
          }
            </div>
          </div>
        <div>
            <button className="btn btn-success add-button" onClick={this.handleAddBook.bind(this)}>Add</button>
        </div>
      </div>
    );
  }
}
export default App;



        // <div className="div-board">
        // <div>
        // <button onClick={() => this.setState({
        //   books: []
        // })}>Erase Them All!</button>
        // </div>
        // <div>
        //
        // <ActiveBooks list={this.state.books.filter((books) => book.active === true)}
        // onToggleBook={this.handleToggleBook}
        // onRemoveBook={this.handleRemoveBook} />
        // <InactiveBooks list={this.state.books.filter((book) => book.active === false)}
        // onToggleBook ={this.handleToggleBook}
        // onRemoveBook={this.handleRemoveBook} />
        // </div>
          // <div className="col-sm-6">
          //   <div className="row">
