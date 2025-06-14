import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddBook from './AddBook';
import BookDetail from './BookDetail';
import Milestones from './Milestones';
import Stats from './Stats';
import ExportPage from './ExportPage';

function Home() {
  return (
    <div className="bg-[#1b1919] text-white font-[Century_Gothic] min-h-screen p-6">
      <div className="text-center mb-8">
        <img src="https://i.imgur.com/UYRmBvC.png" alt="Book/Keeper Logo" className="mx-auto w-60" />
      </div>
      <div className="grid gap-4 max-w-md mx-auto">
        <Link to="/add" className="bg-[#2a2a2a] text-[#6ad5de] py-4 px-6 rounded-lg hover:bg-[#333] text-center font-bold tracking-widest">
          ADD A BOOK
        </Link>
        <Link to="/detail" className="bg-[#2a2a2a] text-[#6ad5de] py-4 px-6 rounded-lg hover:bg-[#333] text-center font-bold tracking-widest">
          BOOK DETAIL
        </Link>
        <Link to="/milestones" className="bg-[#2a2a2a] text-[#6ad5de] py-4 px-6 rounded-lg hover:bg-[#333] text-center font-bold tracking-widest">
          MILESTONES
        </Link>
        <Link to="/stats" className="bg-[#2a2a2a] text-[#6ad5de] py-4 px-6 rounded-lg hover:bg-[#333] text-center font-bold tracking-widest">
          STATS
        </Link>
        <Link to="/export" className="bg-[#2a2a2a] text-[#6ad5de] py-4 px-6 rounded-lg hover:bg-[#333] text-center font-bold tracking-widest">
          EXPORT
        </Link>
      </div>
    </div>
  );
}

function App() {
  const sampleBooks = [
    { title: 'Book One', author: 'Author A', genre: 'Fantasy', rating: '5', shelf: 'Top' },
    { title: 'Book Two', author: 'Author B', genre: 'Romance', rating: '4', shelf: 'Middle' },
    { title: 'Book Three', author: 'Author C', genre: 'Thriller', rating: '3', shelf: 'Bottom' }
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/detail" element={<BookDetail book={sampleBooks[0]} />} />
        <Route path="/milestones" element={<Milestones totalBooks={1234} />} />
        <Route path="/stats" element={<Stats books={sampleBooks} />} />
        <Route path="/export" element={<ExportPage books={sampleBooks} />} />
      </Routes>
    </Router>
  );
}

export default App;