import React from 'react';

function Milestones({ totalBooks }) {
  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Milestones</h1>
      <p>You’ve cataloged {totalBooks} books!</p>
    </div>
  );
}

export default Milestones;