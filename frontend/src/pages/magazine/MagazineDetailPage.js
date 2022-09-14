import Container from 'react-bootstrap/esm/Container';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 5%;
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Date = styled.div`
  display: flex;
  justify-content: center;
  opacity: 0.7;
`;

const Writer = styled.div`
  display: flex;
  justify-content: end;
  opacity: 0.7;
  margin: 2% 10% 0 0;
`;

const Image = styled.div`
  display: flex;
  margin-top: 5%;
  width: 80%;
  height: 300px;
  background-color: ${({ theme }) => theme.themeColor[5]};
  border-radius: 10px;
  margin-left: 10%;
`;

const Content = styled.div`
  margin: 5% 0 0 10%;
  width: 80%;
`;

const MagazineDetailPage = (props) => {
  const dummyData = {
    title: '반려식물을 처음 들이는 당신을 위한 글',
    writer: '드루이드',
    date: '22.09.05',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu arcu ultricies, commodo dolor et, iaculis quam. Donec nec rhoncus metus. Suspendisse ut est nisl. Mauris in tellus feugiat, vehicula purus a, vestibulum nisi. Integer quis vestibulum felis. Fusce et augue ac urna sagittis tempus. Nunc tincidunt quis elit a semper. Cras id orci nisl. Proin nec vestibulum nulla, vitae ullamcorper odio. Donec ut pellentesque ligula. Proin pharetra nulla elit, at consectetur orci molestie non. Nam a condimentum libero. Fusce elementum quam iaculis lorem viverra fermentum. Cras lobortis neque a convallis ultrices. Vivamus facilisis diam a libero pulvinar, ac ultricies nulla bibendum.

    Morbi ullamcorper velit ut ex tempus auctor. In suscipit, magna vitae semper consequat, nunc lorem facilisis neque, et vehicula nunc urna non urna. Mauris pretium eget velit eu dictum. Proin feugiat leo sit amet mauris fringilla rutrum. Curabitur fermentum augue convallis consequat scelerisque. Duis egestas magna in molestie molestie. Duis sem tortor, aliquam eget dui auctor, luctus pretium ex. Phasellus pretium leo at vulputate suscipit. Nam consequat egestas convallis. Sed consectetur dapibus ligula, molestie varius ligula sollicitudin et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis rutrum congue. Vestibulum et dolor tempor, tincidunt est ac, facilisis diam. Cras nibh lorem, sagittis ut sollicitudin eu, volutpat id nisl. Ut metus tortor, pharetra non fermentum et, convallis vel neque. Nullam tristique augue nulla, a aliquam lectus ullamcorper eu.
    
    Sed eu dui arcu. Sed non quam non quam malesuada ultricies. Curabitur volutpat, neque at feugiat pharetra, arcu risus porta libero, quis laoreet justo ex id urna. Curabitur maximus eu arcu in fermentum. Fusce hendrerit tempus imperdiet. Sed ornare ligula a lectus dignissim tempus. Ut et finibus felis. Aliquam dignissim dolor ut imperdiet eleifend. Etiam sit amet ipsum mattis, ultrices purus a, elementum massa. Phasellus dignissim, libero nec gravida suscipit, enim ante feugiat dolor, non ultricies neque justo ut sapien.
    
    Donec id sagittis orci. Sed ut neque nisl. Nulla odio est, lacinia et neque sed, sollicitudin dignissim nibh. Vivamus at purus lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum non eleifend dolor. Proin in elit vestibulum tellus commodo varius id in libero. Donec aliquam convallis ipsum. Phasellus eu nisi diam. Maecenas cursus, felis pretium semper cursus, tortor nunc interdum urna, at dignissim enim diam ut quam. Maecenas vitae orci in purus interdum rutrum quis non purus. Mauris in vehicula augue. Etiam et est vel justo auctor pulvinar.
    
    Aenean aliquet et orci eu sollicitudin. Aenean eget vestibulum urna, at elementum tellus. Aliquam commodo erat mollis, euismod justo non, iaculis quam. Sed pharetra pellentesque lectus, nec volutpat ipsum scelerisque a. Nunc vel augue eros. Nulla volutpat urna at nisl pharetra, id finibus dui ornare. Donec maximus vitae lorem non laoreet. Morbi consectetur porta tempus. Nam ut neque et eros maximus condimentum. Nunc ornare lorem vel nisi euismod, ac placerat sem euismod. Curabitur sit amet iaculis mi. Nam lobortis tellus nulla, a aliquet erat cursus sed. Suspendisse potenti.
    
    Generated 5 paragraphs, 492 words, 3283 bytes of Lorem Ipsum`,
  };
  return (
    <Container>
      <Wrapper>
        <Title>{dummyData.title}</Title>
        <Writer>글쓴이 | {dummyData.writer}</Writer>
        <Date>{dummyData.date} 작성</Date>
        <Image />
        <Content>{dummyData.content}</Content>
      </Wrapper>
    </Container>
  );
};

export default MagazineDetailPage;
