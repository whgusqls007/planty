import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { display } from '@mui/system';
import {
  Wrapper,
  Content,
  ImageContainer,
} from '../../styles/worldCup/WorldCupStyle.js';

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

export default WorldCup2;