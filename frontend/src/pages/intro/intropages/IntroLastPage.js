import { Link, useNavigate } from 'react-router-dom';

const IntroLastPage = ({
  screenWidth,
  screenHeight,
  currentPage,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="full-height last-page"
      style={{
        background: 'rgba(0, 0, 0, 0)',
        backgroundSize: `${screenWidth}px ${screenHeight}px`,
      }}
    >
      <div className="content-wrapper">
        <p className={currentPage === 6 ? 'last-page-ani-1' : ''}>여</p>
        <p className={currentPage === 6 ? 'last-page-ani-2' : ''}>기</p>
        <p className={currentPage === 6 ? 'last-page-ani-3' : ''}>,</p>
        <p className={currentPage === 6 ? 'last-page-ani-4' : ''}>&nbsp;</p>
        <Link to="/">
          <p className={currentPage === 6 ? 'last-page-ani-5' : ''}>플</p>
          <p className={currentPage === 6 ? 'last-page-ani-6' : ''}>랜</p>
          <p className={currentPage === 6 ? 'last-page-ani-7' : ''}>티</p>
        </Link>
        <p className={currentPage === 6 ? 'last-page-ani-8' : ''}>에</p>
        <p className={currentPage === 6 ? 'last-page-ani-9' : ''}>서</p>
      </div>
      <div
        className="check-box-form"
        onClick={() => {
          localStorage.setItem('skip', true);
          navigate('/index', { replace: true });
        }}
      >
        다시 보지 않기
      </div>
    </div>
  );
};

export default IntroLastPage;
