import React from 'react' ;
import { Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import MainPage from './MainPage';
import * as BooksAPI from './BooksAPI'
import './App.css'

//makes state book an array
class BooksApp extends React.Component {
  state = {
    books: []
  }
  //sets the state to book
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf); // this updates the books on change.
    BooksAPI.getAll().then( (books) => {
      this.setState({books : books})
    })    
  }
  // connects the pages together
  render() {
    return (
      <section className="app">
        <Route exact path="/" render={() => (
          <MainPage
            books={this.state.books}
            moveBook={this.moveBook}
          />
        )} />
        
        <Route path="/search" render={() => (
          <SearchPage
          moveBook={this.moveBook}
          books={this.state.books}
          />
        )} />
      </section>
    )
  }
}

export default BooksApp
