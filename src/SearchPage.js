import React, { Component} from 'react' ;
import { Link } from 'react-router-dom' ;
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class SearchPage extends Component {
  state =  {
    query: '',
    searchBooks: []
  }
  // takes a query changes the state
  updateQuery = function (query)   {
    this.setState({
      query: query
    })
    this.UpdateSearchedBooks(query);
  }
  // searches for query if you start typing
  UpdateSearchedBooks = function (query) {
    if (query) {
      BooksAPI.search(query).then((searchBooks) => {
        if (searchBooks.error) {
          this.setState({ searchBooks :[]});
        } else {
        this.setState({searchBooks : searchBooks});
        }
      })
    } else {
      this.setState({ searchBooks :[]});
    }
  }
  //renders the search page
  render (){    
    return (
      <section className="search-books">
        <section className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <section className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value )}
            />
          </section>
        </section>
        <section className="search-books-results">
          <ol className="books-grid">
            {
              this.state.searchBooks.map(searchBooks => {
                let bookShelf = "none";
                // shows the book state of the current shelfBooksApp
                this.props.books.map(book => (
                  book.id === searchBooks.id ?
                  bookShelf = book.shelf :''
                ));
                return (
                <li key = {searchBooks.id}>
                  <Book
                  book={searchBooks}
                  moveBook={this.props.moveBook}
                  currentShelf={bookShelf}
                  />
                </li>
                )
              })
            }
          </ol>
        </section>
      </section>
    );
  }
}

export default SearchPage;