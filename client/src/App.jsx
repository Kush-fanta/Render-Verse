import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo, logo1 } from './assets';
import { Home, CreatePost } from './page';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <div className="flex items-center gap-2">
        <Link to="/">
          <img src={logo1} alt="logo" className="w-20 object-contain" />
        </Link>
        <h1 className="font-extrabold text-[#222328] text-[24px]">Render Verse</h1>
      </div>

      <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
