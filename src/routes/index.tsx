import {Routes, Route, Navigate } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home_screen" element={<p>Home Screen</p>} />
      <Route path="*" element={<Navigate to="home_screen"/>} />
    </Routes>
  );
}