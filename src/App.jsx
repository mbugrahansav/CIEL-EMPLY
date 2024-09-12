import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BottomTabNav from './components/BottomTabNavigator';
import HomeView from './views/HomeView';
import MenuView from './views/MenuView';
import SettingsView from './views/SettingsView';
import QRView from './views/QRView';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/menu" element={<MenuView />} /> 
        <Route path="/settings" element={<SettingsView />} />
        <Route path="/qr" element={<QRView />} />
      </Routes>
      <BottomTabNav />
    </Router>
  );
}

export default App;
