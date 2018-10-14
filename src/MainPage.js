

import React, { Component} from 'react' ;
import Book from './Book';
import { Link } from 'react-router-dom' ;

class MainPage extends Component {
  //creates each shelf and book marks for each book made
  render() {
    console.log(this.props.books);
    return (      
      <section className="list-books">
        <section className="list-books-title">
          <h1>MyReads</h1>
        </section>
        <section className="list-books-content">
          <section>
            <section className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <section className= "Bookshelf-line"></section>
              <section className="bookshelf-books">
                <ol className="books-grid">
                  {
                    this.props.books.filter(function (book) { return book.shelf ===
                    'currentlyReading'}).map( book =>
                    ( <li key={book.id} >
                      <Book book ={book}
                      moveBook={this.props.moveBook}
                      currentShelf="currentlyReadingBooksApp"
                      />
                    </li>))
                  }
                </ol>
              </section>
            </section>
            <section className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <section className= "Bookshelf-line"></section>
              <section className="bookshelf-books">
                <ol className="books-grid">
                  {
                    this.props.books.filter(function (book) {
                      return book.shelf ===
                    'wantToRead'}).map(book =>
                    ( <li key={book.id} >
                      <Book book ={book}
                      moveBook={this.props.moveBook}
                      currentShelf="wantToRead"
                      />
                    </li>))
                  }
                </ol>
              </section>
            </section>
            <section className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <section className= "Bookshelf-line"></section>
              <section className="bookshelf-books">
                <ol className="books-grid">
                  {
                    this.props.books.filter(function (book) {
                    return book.shelf ===
                    'read'}).map(book =>
                    ( <li key={book.id} >
                      <Book book ={book}
                      moveBook={this.props.moveBook}
                      currentShelf="read"
                      />
                    </li>))
                  }
                </ol>
              </section>
            </section>
          </section>
        </section>
        <section className="open-search">
          <Link to= "/search">Add a book</Link>
        </section>
      </section>
    );
  }
}

export default MainPage;









