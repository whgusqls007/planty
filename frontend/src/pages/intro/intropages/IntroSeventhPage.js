import ListIndex from '../../../components/intro/ListIndex';

const IntroSeventhPage = ({ screenWidth, screenHeight, currentPage }) => {
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
            <h3>나의 반려식물들을 당신에게</h3>
            <p>식물 정원</p>
          </div>
          <div className="image-box">
            <img
              src={require('../css/feed.gif')}
              width="100%"
              height="100%"
            ></img>
          </div>
        </div>
        <ListIndex currentPage={currentPage} />
      </div>
    </div>
  );
};

export default IntroSeventhPage;
