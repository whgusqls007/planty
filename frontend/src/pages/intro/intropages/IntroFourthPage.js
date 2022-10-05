const IntroFourthPage = ({ screenWidth, screenHeight, currentPage }) => {
  return (
    <div
      className="full-height first-page fourth-page"
      style={{
        background: 'url(' + require('../css/Fourth.gif') + ') no-repeat',
        backgroundSize: `${screenWidth * 1.02}px ${screenHeight * 1.02}px`,
      }}
    >
      <p className={currentPage === 3 ? 'fourth-page-ani-1' : ''}>
        나의 정원에서
      </p>
      <p className={currentPage === 3 ? 'fourth-page-ani-2' : ''}>
        나의 식물을
      </p>
      <p className={currentPage === 3 ? 'fourth-page-ani-3' : ''}>
        관리해 보세요
      </p>
      <div className="first-line"></div>
      <div className="second-line"></div>
      <div className="third-line"></div>
    </div>
  );
};

export default IntroFourthPage;
