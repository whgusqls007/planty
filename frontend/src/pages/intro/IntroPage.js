import React, { useEffect, useState } from 'react';
import { Wrapper } from './css/IntroPageCss';
import Aos from 'aos';
import { FullPage, Slide } from 'react-full-page';
import 'aos/dist/aos.css';
import './css/IntroPageCss.css';
import IntroFirstPage from './intropages/IntroFirstPage';
import IntroSecondPage from './intropages/IntroSecondPage';
import IntroThirdPage from './intropages/IntroThirdPage';
import IntroFourthPage from './intropages/IntroFourthPage';
import IntroFifthPage from './intropages/IntroFifthPage';
import IntroSixthPage from './intropages/IntroSixthPage';
import IntroLastPage from './intropages/IntroLastPage';

const IntroPage = () => {
  const [section, setSection] = useState(1);
  const [isMoving, setIsMoving] = useState(false);
  const [screenWidth, setScreenWidht] = useState(1920);
  const [screenHeight, setScreenHeight] = useState(1080);

  const handleResize = () => {
    setScreenWidht(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
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
    <Wrapper>
      <div className="contents">
        <div
          className="back full-height"
          style={{
            background: 'url(' + require('./css/Last.gif') + ') no-repeat',
            backgroundSize: `${screenWidth}px ${screenHeight}px`,
          }}
        ></div>
        <FullPage duration={50} afterChange={scrollMoveHandler}>
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
            <IntroLastPage
              screenHeight={screenHeight}
              screenWidth={screenWidth}
              currentPage={section.to}
            />
          </Slide>
        </FullPage>
        {/* <div className="side-nav">
          <ul>
            <li
              className={
                section === 0
                  ? isMoving
                    ? 'nav-moving'
                    : 'nav-active'
                  : 'nav-deactive'
              }
            >
              식물 추천
            </li>
            <li
              className={
                section === 1
                  ? isMoving
                    ? 'nav-moving'
                    : 'nav-active'
                  : 'nav-deactive'
              }
            >
              식물 검색
            </li>
            <li
              className={
                section === 2
                  ? isMoving
                    ? 'nav-moving'
                    : 'nav-active'
                  : 'nav-deactive'
              }
            >
              매거진
            </li>
          </ul>
        </div>
        <div className="contents">
          <FullPage
            controls
            duration="500"
            controlsProps={{ className: 'full-page-class' }}
            beforeChange={scrollMoveHandler}
            afterChange={() => {
              setIsMoving(false);
            }}
          >
            <Slide>
              <div className={section === 0 ? 'fade-in' : 'fade-out'}>
                <h1>어떤 글씨 1</h1>
                <h1>sdafdfassdfa</h1>
                <h1>fsaasdfdfas</h1>
              </div>
            </Slide>
            <Slide>
              <div className={section === 1 ? 'fade-in' : 'fade-out'}>
                <h1>어떤 글씨 2</h1>
                <h1>sdafdfassdfa</h1>
                <h1>fsaasdfdfas</h1>
              </div>
            </Slide>
            <Slide>
              <div className={section === 2 ? 'fade-in' : 'fade-out'}>
                <h1>어떤 글씨 3</h1>
                <h1>sdafdfassdfa</h1>
                <h1>fsaasdfdfas</h1>
              </div>
            </Slide>
            <Slide>
              <div className="blue"></div>
            </Slide>
            <Slide className="red"></Slide>
          </FullPage>
        </div> */}
      </div>
    </Wrapper>
  );
};

export default IntroPage;
