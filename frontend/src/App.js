import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Header from './layout/Header';
import IndexPage from './pages/IndexPage';
import DictionaryPage from './pages/dictionary/DictionaryPage';
import DictionaryDetailPage from './pages/dictionary/DictionaryDetailPage';
import FeedListPage from './pages/feed/FeedListPage';
import MagazinePage from './pages/magazine/MagazinePage';
import MagazineDetailPage from './pages/magazine/MagazineDetailPage';
import GardenPage from './pages/garden/GardenPage';
import GardenDetailPage from './pages/garden/GardenDetailPage';

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

        <Route path="/magazine" element={<Outlet />}>
          <Route path="" element={<MagazinePage />} />
          <Route path=":articleId" element={<MagazineDetailPage />} />
        </Route>

        <Route path="/garden" element={<Outlet />}>
          <Route path="" element={<GardenPage />} />
          <Route path="gardenId" element={<GardenDetailPage />} />
        </Route>
        <Route path="/feed" element={<FeedListPage />} />
      </Routes>
    </div>
  );
};

export default App;
