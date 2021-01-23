import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import SearchForm from "../components/Form";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [googleSearch, setGoogleSearch] = useState("");


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

  // Handles updating component state when the user types into the input field
  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setGoogleSearch(value);
  };

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, search books and update the books state
    event.preventDefault();
    API.searchBooks(googleSearch)
      .then(res => setBooks(res.data.items))
      .catch(err => console.log(err));
  };

  const handleSave = book => {

    console.log(book);
    API.saveBook({
      _id: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };



  return (
    <div>
      <Container fluid>
        <Row>

          <SearchForm
            onClick={handleFormSubmit}
            onChange={handleInputChange}
            value={googleSearch}
          />

        </Row>
        <Row>
          <Col size="md-12"><h1 className="card-title text-center">My Search Results</h1></Col>
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
                          <a href={book.volumeInfo.infoLink}>
                            <h2><strong>
                              {book.volumeInfo.title} by {book.volumeInfo.authors}
                            </strong></h2>
                          </a>
                        </Col>
                        <Col size="md-2">

                          <a href={book.volumeInfo.infoLink} className="btn btn-secondary" target="_blank">View</a>
                          <button className="btn btn-secondary ml-3" onClick={() => { handleSave(book) }}>Save</button>
                        
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
    </div>
  );
}


export default Search;