import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the searched books by query params
  searchBooks: function(query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },

  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  // Gets saved books from the database
  savedBooks: function() {
    return axios.get("/api/books");
  },

  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
};
