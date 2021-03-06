import axios from "axios";
const BASEURL = "https://openlibrary.org/search.json?title=";
//Author search
const BASEURL2 = "https://openlibrary.org/search.json?author=";

export default {
  //Title
  search: function (query) {
    return axios.get(BASEURL + query);
  },

  //Author
  searchAuthor: function (query) {
    return axios.get(BASEURL2 + query);
  },

  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets a specific user's books
  getUserBooks: function (email) {
    return axios.get("/api/books" + email);
  },
  // Gets the book with the given id
  getBook: function (email) {
    return axios.get("/api/books/" + email);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/delete/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};