import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])


  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    let query = "Nesbo"
    API.searchBooks(query)
      .then(res => 
        setBooks(res.data.items)
        // console.log(res.data.items)
      )
      .catch(err => console.log(err));
     
  };


    return (
      <Container fluid>
        <Row>
        <Col size="md-12"><h1 className="card-title">My Saved Books</h1></Col>
        </Row>
        <Row>
          <Col size="md-12 sm-12">
      
            {books.length ? (
              <List>
                {books.map(book => {
                  return (
                    <ListItem key={book.id}>
                    <Row>
                    <Col size="md-10">
                      <a href={book.volumeInfo.previewLink}>
                        <h2><strong>
                          {book.volumeInfo.title} by {book.volumeInfo.authors}
                        </strong></h2>
                      </a>
                      </Col>
                      <Col size="md-2">
                      <button className="button btn" onClick={() =>{}}>Delete</button>
                      </Col>
                      </Row>
                      <Row>
                      <Col size="md-2">
                      <img src={book.volumeInfo.imageLinks.thumbnail} alt="cover" />
                      </Col>
                      <Col size="md-10">
                      <p>{book.volumeInfo.description}</p>
                      </Col>
                      
                      </Row>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Search;