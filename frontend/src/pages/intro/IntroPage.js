import React, { useEffect, useState } from 'react';
import { Wrapper } from '../../styles/intro/IntroPageCss';
import Aos from 'aos';
import { FullPage, Slide } from 'react-full-page';
import 'aos/dist/aos.css';
import '../../styles/intro/IntroPageCss.css';
import IntroFirstPage from './intropages/IntroFirstPage';
import IntroSecondPage from './intropages/IntroSecondPage';
import IntroThirdPage from './intropages/IntroThirdPage';
import IntroFourthPage from './intropages/IntroFourthPage';
import IntroFifthPage from './intropages/IntroFifthPage';
import IntroSixthPage from './intropages/IntroSixthPage';
import IntroSeventhPage from './intropages/IntroSeventhPage';
import IntroLastPage from './intropages/IntroLastPage';
import { useNavigate } from 'react-router-dom';
import Header from '../../layout/Header';

const IntroPage = () => {
  const [section, setSection] = useState(1);
  const [isMoving, setIsMoving] = useState(false);
  const [screenWidth, setScreenWidht] = useState(1920);
  const [screenHeight, setScreenHeight] = useState(1080);
  const navigate = useNavigate();

  const handleResize = () => {
    setScreenWidht(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    if (localStorage.getItem('skip')) {
      navigate('./index', { replace: true });
    }
    Aos.init({
      once: true,
    });

    setScreenWidht(window.innerWidth);
    setScreenHeight(window.innerHeight);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollMoveHandler = ({ from, to }) => {
    setIsMoving(true);
    setSection({ from, to });
  };

  return (
    <Wrapper className="scroll">
      <div className="contents">
        <div
          className="back full-height"
          style={{
            background: 'url(' + require('./css/Last.gif') + ') no-repeat',
            backgroundSize: `${screenWidth}px ${screenHeight}px`,
          }}
        ></div>
        <FullPage duration={200} afterChange={scrollMoveHandler}>
          <Slide>
            <IntroFirstPage
              screenHeight={screenHeight}
              screenWidth={screenWidth}
              currentPage={section.to}
            />
          </Slide>
          <Slide>
            <IntroSecondPage
              screenHeight={screenHeight}
              screenWidth={screenWidth}
              currentPage={section.to}
            />
          </Slide>
          <Slide>
            <IntroThirdPage
              screenHeight={screenHeight}
              screenWidth={screenWidth}
              currentPage={section.to}
            />
          </Slide>
          <Slide>
            <IntroFourthPage
              screenHeight={screenHeight}
              screenWidth={screenWidth}
              currentPage={section.to}
            />
          </Slide>
          <Slide>
            <IntroFifthPage
              screenHeight={screenHeight}
              screenWidth={screenWidth}
              currentPage={section.to}
            />
          </Slide>
          <Slide>
            <IntroSixthPage
              screenHeight={screenHeight}
              screenWidth={screenWidth}
              currentPage={section.to}
            />
          </Slide>
          <Slide>
            <IntroSeventhPage
              screenHeight={screenHeight}
              screenWidth={screenWidth}
              currentPage={section.to}
            />
          </Slide>
          <Slide>
            <IntroLastPage
              screenHeight={screenHeight}
              screenWidth={screenWidth}
              currentPage={section.to}
            />
          </Slide>
        </FullPage>
      </div>
    </Wrapper>
  );
};

export default IntroPage;
