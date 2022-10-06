import ListIndex from '../../../components/intro/ListIndex';

const IntroSixthPage = ({ screenWidth, screenHeight, currentPage }) => {
  return (
    <div
      className="full-height first-page sixth-page"
      style={{
        background: 'url(' + require('../css/Sixth.webp') + ') no-repeat',
        backgroundSize: `${screenWidth}px ${screenHeight}px`,
      }}
    >
      <div className="first-line">
        <p className={currentPage === 5 ? 'sixth-page-ani-1' : ''}>당</p>
        <p className={currentPage === 5 ? 'sixth-page-ani-2' : ''}>신</p>
        <p className={currentPage === 5 ? 'sixth-page-ani-3' : ''}>의</p>
        <p className={currentPage === 5 ? 'sixth-page-ani-4' : ''}>&nbsp;</p>
        <p className={currentPage === 5 ? 'sixth-page-ani-5' : ''}>식</p>
        <p className={currentPage === 5 ? 'sixth-page-ani-6' : ''}>물</p>
        <p className={currentPage === 5 ? 'sixth-page-ani-7' : ''}>을</p>
        <p className={currentPage === 5 ? 'sixth-page-ani-8' : ''}>&nbsp;</p>
        <p className={currentPage === 5 ? 'sixth-page-ani-9' : ''}>공</p>
        <p className={currentPage === 5 ? 'sixth-page-ani-10' : ''}>유</p>
        <p className={currentPage === 5 ? 'sixth-page-ani-11' : ''}>하</p>
        <p className={currentPage === 5 ? 'sixth-page-ani-12' : ''}>세</p>
        <p className={currentPage === 5 ? 'sixth-page-ani-13' : ''}>요</p>
        <p className={currentPage === 5 ? 'sixth-page-ani-14' : ''}>.</p>
      </div>
    </div>
  );
};

export default IntroSixthPage;
