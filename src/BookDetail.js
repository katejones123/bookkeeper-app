import React from 'react';

function BookDetail({ book }) {
  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Book Detail</h1>
      <p><strong>Title:</strong> {book.title}</p>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <p><strong>Shelf:</strong> {book.shelf}</p>
    </div>
  );
}

export default BookDetail;