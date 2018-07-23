'use strict';

angular.module('readingList', [])
  .controller('ReadingListController', function(){
    this.books = books;
    this.genres = genres;

    this.addBook = function() {
      this.books.push(this.book);

      this.book = {};
    }
  })
  .directive('bookCover', function() {
    return {
      restrict: 'E', 
      templateUrl: 'book-cover.html'
    };
  })
  .directive('bookGenres', function() {
    return {
      restrict: 'E',
      templateUrl: 'book-genres.html'
    };
  })
;

var genres = ['fiction', 'non-fiction', 'fantasy'];

var books = [
  {
    title: 'Pragmatic Thinking & Learning',
    authors: ['Ashish Patel'],
    isbn: '1934356050',
    review: 'undefined',
    rating: '4',
    genres: ['non-fiction']
  },
  {
    title: 'The Age of Spritual Machines',
    authors: ['XYZ Ray'],
    isbn: '0140282025',
    review: 'undefined',
    rating: '2',
    genres: ['non-fiction']
  },
  {
    title: 'Era of Big Data',
    authors: ['Richard P', 'Ashish Patel'],
    isbn: '9351199312',
    review: 'undefined',
    rating: '3',
    genres: ['fiction', 'fantasy']
  }
];