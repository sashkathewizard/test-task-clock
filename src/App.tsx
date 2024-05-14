import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from './pages/Main/Main';
import ClockPage from './pages/ClockPage/ClockPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className='bg-gray-800 min-h-screen'>
        <Routes>
          <Route path="/"  element={<Main/>} />
          <Route path="/clock" element={<ClockPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
