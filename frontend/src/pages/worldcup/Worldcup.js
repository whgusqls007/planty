import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 5% 0% 5% 0%;

  h1 {
    font-weight: 600;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 576px) {
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  height: 500px;
  position: relative;

  @media (max-width: 768px) {
    height: 25rem;
    width: 100%;
  }

  @media (max-width: 576px) {
    height: 18rem;
    width: 100%;
  }

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

const WorldCup = () => {
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
  return (
    <Container>
      <Title>
        <h1>Favorite Worldcup {stage}</h1>
      </Title>
      <Wrapper>
        {displays.map((e) => {
          return (
            <ImageContainer
              style={{ backgroundColor: e.name }}
              key={e.name}
              onClick={clickHandler(e)}
              data-aos="flip-up"
              data-aos-easing="linear"
              data-aos-duration="200"
            >
              <img className="image"></img>
              <div className="name">{e.name}</div>
            </ImageContainer>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default WorldCup;
