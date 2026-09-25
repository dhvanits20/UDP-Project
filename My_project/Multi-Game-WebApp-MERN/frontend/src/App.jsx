import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Games from './pages/Games';
import TicTacToe from './pages/games/TicTacToe';
import ChessGame from './pages/games/ChessGame';
import PlayGame from './pages/games/PlayGame';
import Reviews from './pages/Reviews';
import News from './pages/News';
import Contact from './pages/Contact';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import UserDashboard from './pages/dashboards/UserDashboard';
import DeveloperDashboard from './pages/dashboards/DeveloperDashboard';
import AdminDashboard from './pages/dashboards/AdminDashboard';
import SubmitGame from './pages/dashboards/SubmitGame';
import AdminGames from './pages/dashboards/AdminGames';
import AdminRequests from './pages/dashboards/AdminRequests';
import AdminUsers from './pages/dashboards/AdminUsers';
import AdminReviews from './pages/dashboards/AdminReviews';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/chess" element={<ChessGame />} />
        <Route path="/play/:id" element={<PlayGame />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        
        <Route path="/developer/dashboard" element={<DeveloperDashboard />} />
        <Route path="/developer/submit-game" element={<SubmitGame />} />
        
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/games" element={<AdminGames />} />
        <Route path="/admin/requests" element={<AdminRequests />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/reviews" element={<AdminReviews />} />
      </Routes>
    </Router>
  );
}

export default App;
