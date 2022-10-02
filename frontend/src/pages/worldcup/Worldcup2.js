import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { display } from '@mui/system';

const items = [
  {
    name: 'yellow',
  },
  {
    name: 'black',
  },
  {
    name: 'green',
  },
  {
    name: 'red',
  },
  {
    name: 'brown',
  },
  {
    name: 'blue',
  },
  {
    name: 'blueviolet',
  },
  {
    name: 'orange',
  },
  {
    name: 'antiquewhite',
  },
  {
    name: 'burlywood',
  },
  {
    name: 'crimson',
  },
  {
    name: 'cyan',
  },
  {
    name: 'darkcyan',
  },
  {
    name: 'darkorchid',
  },
  {
    name: 'forestgreen',
  },
  {
    name: 'greenyellow',
  },
];

const WorldCup2 = ({ modalOpen, closeModal }) => {
  const [plants, setPlants] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  const [count, setCount] = useState(0);
  const [stage, setStage] = useState('8강');

  useEffect(() => {
    AOS.init();
    items.sort(() => Math.random() - 0.5);
    setPlants(items);
    setDisplays([items[0], items[1]]);
  }, []);

  useEffect(() => {
    if (count < 8) {
      setStage('8강');
    } else if (8 <= count && count < 12) {
      setStage('4강');
    } else if (12 <= count && count < 14) {
      setStage('준결승');
    } else {
      setStage('결승');
    }
  }, [count]);

  const clickHandler = (plant) => () => {
    if (plants.length <= 2) {
      if (winners.length === 0) {
        setDisplays([plant]);
      } else {
        let updatePlants = [...winners, plant];
        setPlants(updatePlants);
        setDisplays([updatePlants[0], updatePlants[1]]);
        setWinners([]);
      }
    } else if (plants.length > 2) {
      setWinners([...winners, plant]);
      setDisplays([plants[2], plants[3]]);
      setPlants(plants.slice(2));
    }
    setCount(count + 1);
  };

  const closeModal2 = () => {
    closeModal();
    setCount(0);
    setStage('8강');
    setWinners([]);
    setPlants(items);
    setDisplays([items[0], items[1]]);
  };

  return (
    <Wrapper modalOpen={modalOpen}>
      <div className="close-modal" onClick={closeModal2} />
      <div className="modal-div">
        <CloseIcon className="close-btn" onClick={closeModal2} />
        <Content>
          <div className="title">
            <h1>Favorite Worldcup {stage}</h1>
          </div>
          <div className="images-wrapper">
            {displays.map((e, i) => {
              return (
                <div
                  className={(i + 1) % 2 === 0 ? 'second' : 'first'}
                  style={
                    displays.length === 1
                      ? {
                          backgroundColor: e.name,
                          width: '80%',
                          height: '400px',
                        }
                      : { backgroundColor: e.name }
                  }
                  key={e.name}
                  onClick={clickHandler(e)}
                  data-aos="flip-up"
                  data-aos-easing="linear"
                  data-aos-duration="200"
                >
                  <img className="image"></img>
                  <div className="name">{e.name}</div>
                </div>
              );
            })}
          </div>
          <button
            style={
              displays.length === 1 ? { display: 'flex' } : { display: 'none' }
            }
          >
            <span>식물 보러 가기</span>
          </button>
        </Content>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  ${({ modalOpen }) =>
    modalOpen &&
    css`
      display: flex;
      align-items: center;
      animation: modal-bg-show 0.4s;
    `}
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.85);
  overflow-y: initial !important;

  & .close-modal {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  & .modal-div {
    max-width: 90%;
    overflow-y: initial !important;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    padding: 50px;
    left: 50%;
    transform: translateX(-50%);
    animation: modal-show 0.4s;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    height: 600px;
    width: 80%;

    & .close-btn {
      position: absolute;
      right: 30px;
      top: 30px;
      opacity: 0.5;
      &:hover {
        opacity: 1;
        cursor: pointer;
      }
    }
  }

  @keyframes modal-show {
    from {
      margin-top: -50px;
    }
    to {
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  & button {
    width: 30%;
    margin-left: 35%;
    justify-content: center;
    margin-top: 1%;
    border: 1px solid ${({ theme }) => theme.themeColor[5]};
    border-radius: 6px;

    &:hover {
      background-color: ${({ theme }) => theme.themeColor[5]};
    }
  }

  & .title {
    display: flex;
    justify-content: center;

    @media (max-width: 850px) {
      position: absolute;
      left: 0;
      width: 100%;
    }

    & h1 {
      margin: 0;
      font-weight: 600;

      @media (max-width: 850px) {
        font-size: 30px;
      }

      @media (max-width: 650px) {
        font-size: 20px;
      }

      @media (max-width: 470px) {
        font-size: 15px;
      }
    }
  }

  & .images-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (max-width: 850px) {
      flex-direction: column;
      align-items: center;
    }
  }

  & .first {
    width: 50%;
    height: 450px;
    border-radius: 10px;
    margin-top: 20px;

    &:hover {
      transition: transform 0.3s;
      transform: scale3d(1.05, 1.05, 1.05);
      z-index: 999;
    }

    @media (max-width: 850px) {
      width: 90%;
      height: 200px;
      margin-bottom: 50px;
      margin-top: 0;
    }

    @media (max-width: 650px) {
      height: 230px;
      margin-bottom: 20px;
      margin-top: 0;
    }
  }

  & .second {
    width: 50%;
    height: 450px;
    border-radius: 10px;
    margin-top: 20px;

    &:hover {
      transition: transform 0.3s;
      transform: scale3d(1.05, 1.05, 1.05);
      z-index: 999;
    }

    @media (max-width: 850px) {
      width: 90%;
      height: 200px;
      margin-top: 50px;
    }

    @media (max-width: 650px) {
      height: 230px;
      margin-top: 20px;
    }
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  height: 500px;
  position: relative;

  &:hover {
    transition: transform 0.3s;
    transform: scale3d(1.05, 1.05, 1.05);
    z-index: 999;
  }

  .image {
    background-color: black;
    z-index: 2;
  }

  .name {
    position: absolute;
    z-index: 3;
    color: white;
    bottom: 10%;
    font-size: 90px;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 768px) {
      font-size: 50px;
    }

    @media (max-width: 576px) {
      font-size: 30px;
    }
  }
`;

export default WorldCup2;
