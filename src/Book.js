import React, { Component} from 'react' ;
class Book extends Component {
  // renders the info of each book to the bookmark in the main page
  render() {
    let  dislayedThumbnail = this.props.book.imageLinks ?
    this.props.book.imageLinks.thumbnail :  '';

    return (
      <section className="book">
        <section className="book-top">
          <section className="book-cover" 
          style={{ width: 128, height: 193, backgroundImage: `url("${dislayedThumbnail}")` }}>
          </section>
          <section className="book-shelf-changer">
            <select
            onChange= {(event) => this.props.moveBook(
            this.props.book, event.target.value
            )}
            value={this.props.currentShelf}
            >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </section>
        </section>
        <section className="book-title">{this.props.book.title} </section>
        <section className="book-authors">{this.props.book.authors} </section>
      </section>     
    );
  }
}
export default Book;