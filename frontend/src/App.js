import React, { useEffect, useState } from 'react';
import { Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
import ProfilePage from './pages/user/ProfilePage';
import ProfileUpdatePage from './pages/user/ProfileUpdatePage';
// 식이월
import WorldCup from './pages/worldcup/Worldcup';
import IntroPage from './pages/intro/IntroPage';

// 피드 모달
import { useSearchParams, useNavigate } from 'react-router-dom';
import FeedModal from './components/feed/FeedModal';
import { fetchFeed } from './features/feed/feedAction';
import Layout from './layout/Layout';

const App = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [feedId, setFeedId] = useState(false);
  useEffect(() => {
    const feed = parseInt(searchParams.get('feed'))
      ? parseInt(searchParams.get('feed'))
      : false;
    if (feed) dispatch(fetchFeed(feed));
    setFeedId(feed);
  }, [searchParams]);

  return (
    <>
      <FeedModal
        modalOpen={feedId}
        closeModal={() => {
          navigate(-1);
        }}
      />
      {/* <Header /> */}
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="" element={<Layout />}>
          <Route path="" element={<IntroPage />} />
          <Route path="index" element={<IndexPage />} />
          <Route path="profile/:username" element={<ProfilePage />} />
          <Route path="profile/update" element={<ProfileUpdatePage />} />

          <Route path="/dictionary" element={<Outlet />}>
            <Route path="" element={<DictionaryPage />} />
            <Route path=":plantId" element={<DictionaryDetailPage />} />
          </Route>

          <Route path="/magazine" element={<Outlet />}>
            <Route path="" element={<MagazinePage />} />
            <Route path="magazineinput" element={<MagazineInputPage />} />
            <Route path=":articleId" element={<MagazineDetailPage />} />
          </Route>

          <Route path="/garden" element={<Outlet />}>
            <Route path=":userName" element={<GardenPage />} />
            <Route path=":userName/:gardenId" element={<GardenDetailPage />} />
          </Route>

          <Route path="/feed" element={<FeedListPage />} />
          <Route path="/feed/:feedId" element={<FeedListPage />} />
          <Route path="/worldcup" element={<WorldCup />} />

          <Route path="/intro" element={<IntroPage />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
