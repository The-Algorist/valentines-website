// App.tsx (corrected)
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />}/>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
