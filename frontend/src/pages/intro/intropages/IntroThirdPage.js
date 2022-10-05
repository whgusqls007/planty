import ListIndex from '../../../components/intro/ListIndex';

const IntroThirdPage = ({ screenWidth, screenHeight, currentPage }) => {
  return (
    <div
      className="full-height page third-page "
      style={{
        background: 'white',
        backgroundSize: `${screenWidth}px ${screenHeight}px`,
      }}
    >
      <div className="page-content-wrapper">
        <div className="page-content">
          <div
            className={
              currentPage === 2 ? 'page-text third-page-ani' : 'page-text'
            }
          >
            <h3>당신만을 위해 준비한</h3>
            <p>식물 추천</p>
          </div>
          <div className="image-box"></div>
        </div>
        <ListIndex currentPage={currentPage} />
      </div>
    </div>
  );
};

export default IntroThirdPage;
