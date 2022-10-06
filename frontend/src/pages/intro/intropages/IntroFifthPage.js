import ListIndex from '../../../components/intro/ListIndex';

const IntroFifthPage = ({ screenWidth, screenHeight, currentPage }) => {
  return (
    <div
      className="full-height page second-page fifth-page"
      style={{
        background: 'white',
        backgroundSize: `${screenWidth}px ${screenHeight}px`,
      }}
    >
      <div className="page-content-wrapper">
        <div
          className={
            currentPage === 4 ? 'page-text fifth-page-ani' : 'page-text'
          }
        >
          <h3>식물박사가 식물초보에게</h3>
          <p>읽을 거리</p>
        </div>
        <div className="image-box">
          <img
            src={require('../css/magazine.gif')}
            width="100%"
            height="100%"
          ></img>
        </div>
        <ListIndex currentPage={currentPage} />
      </div>
    </div>
  );
};

export default IntroFifthPage;
