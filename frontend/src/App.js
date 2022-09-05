import React from 'react';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import DictionaryPage from './pages/DictionaryPage';
import Header from './layout/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="" element={<IndexPage />}></Route>
        <Route path="/dictionary" element={<DictionaryPage />}></Route>
        <Route path="/b" element={<div>읽을 거리</div>}></Route>
        <Route path="/c" element={<div>나의 정원</div>}></Route>
        <Route path="/d" element={<div>남의 정원</div>}></Route>
      </Routes>
    </div>
  );
};

export default App;
