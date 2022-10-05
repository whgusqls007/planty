import ListIndex from '../../../components/intro/ListIndex';

const IntroSecondPage = ({ screenWidth, screenHeight, currentPage }) => {
  return (
    <div
      className="full-height page second-page"
      style={{
        background: 'white',
        backgroundSize: `${screenWidth}px ${screenHeight}px`,
      }}
    >
      <div className="page-content-wrapper">
        <div
          className={
            currentPage === 1 ? 'page-text second-page-ani' : 'page-text'
          }
        >
          <h3>우리가 아는 모든 식물</h3>
          <p>식물 사전</p>
        </div>
        <div
          className={
            currentPage === 1 ? 'image-box second-page-ani' : 'image-box'
          }
        >
          <img
            src={require('../css/Dictionary.gif')}
            width="100%"
            height="100%"
          ></img>
        </div>
        <ListIndex currentPage={currentPage} />
      </div>
    </div>
  );
};

export default IntroSecondPage;
