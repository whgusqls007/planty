import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Header from './layout/Header';
import IndexPage from './pages/IndexPage';
import DictionaryPage from './pages/dictionary/DictionaryPage';
import DictionaryDetailPage from './pages/dictionary/DictionaryDetailPage';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="" element={<IndexPage />} />
        <Route path="/dictionary" element={<Outlet />}>
          <Route path="" element={<DictionaryPage />} />
          <Route path=":plantId" element={<DictionaryDetailPage />} />
        </Route>
        <Route path="/b" element={<div>읽을 거리</div>}></Route>
        <Route path="/c" element={<div>나의 정원</div>}></Route>
        <Route path="/d" element={<div>남의 정원</div>}></Route>
      </Routes>
    </div>
  );
};

export default App;
