import React, { useEffect } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUserInfo } from './features/user/userActions';
import Header from './layout/Header';
import IndexPage from './pages/IndexPage';
// 식물 사전
import DictionaryPage from './pages/dictionary/DictionaryPage';
import DictionaryDetailPage from './pages/dictionary/DictionaryDetailPage';
// 읽을거리
import MagazinePage from './pages/magazine/MagazinePage';
import MagazineDetailPage from './pages/magazine/MagazineDetailPage';
import MagazineInputPage from './pages/magazine/MagazineInputPage';
// 나의 정원
import GardenPage from './pages/garden/GardenPage';
import GardenDetailPage from './pages/garden/GardenDetailPage';
// 남의 정원
import FeedListPage from './pages/feed/FeedListPage';
// 계정 관련
import LoginPage from './pages/user/LoginPage';
import RegisterPage from './pages/user/RegisterPage';
import WorldCup from './pages/worldcup/Worldcup';
import ProfilePage from './pages/user/ProfilePage';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<IndexPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="profile/:userId" element={<ProfilePage />} />

        <Route path="/dictionary" element={<Outlet />}>
          <Route path="" element={<DictionaryPage />} />
          <Route path=":plantId" element={<DictionaryDetailPage />} />
        </Route>

        <Route path="/magazine" element={<Outlet />}>
          <Route path="" element={<MagazinePage />} />
          <Route path=":articleId" element={<MagazineDetailPage />} />
          <Route path="magazineinput" element={<MagazineInputPage />} />
        </Route>

        <Route path="/garden" element={<Outlet />}>
          <Route path="" element={<GardenPage />} />
          <Route path=":gardenId" element={<GardenDetailPage />} />
        </Route>

        <Route path="/feed" element={<FeedListPage />} />
        <Route path="/worldcup" element={<WorldCup />} />
      </Routes>
    </>
  );
};

export default App;
