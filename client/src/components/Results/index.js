import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import DeleteBtn from "../components/DeleteBtn";

function Results() {

  // Setting our component's initial state
  const [books, setBooks] = useState([])


  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
              <List>
                {books.results.map(book => {
                  return (
                    <ListItem key={book.id}>
                    <Row>
                    <Col size="md-10">
                      <a href={book.link}>
                        <h2><strong>
                          {book.title}
                        </strong></h2>
                      </a>
                      </Col>
                      <Col size="md-2">
                    <button className="button" onClick={() => {}}>Delete</button>
                      </Col>
                      </Row>
                      <Row>
                      <Col size="md-2">
                      <img src={book.image} alt="cover" />
                      </Col>
                      <Col size="md-10">
                      <p>{book.description}</p>
                      </Col>
                      
                      </Row>
                    </ListItem>
                  );
                })}
              </List>
          </Col>
        </Row>
      </Container>
    );
}

export default Results;