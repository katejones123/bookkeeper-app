import React from 'react';

function Stats({ books }) {
  const total = books.length;
  const genres = [...new Set(books.map(book => book.genre))];

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Stats</h1>
      <p><strong>Total Books:</strong> {total}</p>
      <p><strong>Genres:</strong> {genres.join(', ')}</p>
    </div>
  );
}

export default Stats;