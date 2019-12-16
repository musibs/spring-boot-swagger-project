'use strict';


/**
 * createBook
 *
 * book Book book
 * returns Book
 **/
exports.createBookUsingPOST = function(book) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * deleteBook
 *
 * bookId Long bookId
 * no response value expected for this operation
 **/
exports.deleteBookUsingDELETE = function(bookId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * getBook
 *
 * bookId Long bookId
 * returns Book
 **/
exports.getBookUsingGET = function(bookId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "bookId" : "A456-098-456",
      "bookTitle" : "Spring for All",
      "bookAuthor" : "Code Fountain",
      "bookPublisher" : "Medium",
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * getBooks
 *
 * returns Iterable«Book»
 **/
exports.getBooksUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

