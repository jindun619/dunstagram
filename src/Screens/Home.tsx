import {Text} from 'react-native';
import styled from 'styled-components/native';
import Post from '../components/Post/Post';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.mainBg};
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const author = {
    id: 'Manchester.City',
    profileImage: 'https://banner2.cleanpng.com/20180602/uxx/avod1og6q.webp',
  };
  const images = [
    'https://media.gq.com/photos/63c045b287b2608f9262ff28/16:9/w_1280,c_limit/halland-16x9.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10UHlxK5SIpX6uRnBpHscu6EBLe0sUKxhSA&s',
    'https://www.mancity.com/features/phil-foden-one-of-our-own/assets/VNxkiCqskG/phil-foden-one-of-our-own-750x422.jpg',
  ];
  const actions = {
    likes: [
      {
        id: '1',
        profileImage:
          'https://banner2.cleanpng.com/20180602/uxx/avod1og6q.webp',
      },
      {
        id: '2',
        profileImage:
          'https://banner2.cleanpng.com/20180602/uxx/avod1og6q.webp',
      },
    ],
    comments: [
      {
        author: {
          id: '3',
          profileImage:
            'https://banner2.cleanpng.com/20180602/uxx/avod1og6q.webp',
        },

        content: "Manchester City's Phil Foden has been named the 2021 Golden",
        date: '7월 9일',
        likes: 1,
      },
    ],
    shares: 10,
  };
  const content =
    '펩시티가 새로운 역사를 썼다. 반면 아스날은 다시 한 번 2위로 시즌을 마무리했다. 맨체스터 시티는 20일(한국시간) 영국 맨체스터 에티하드 스타디움에서 열린 2023-2024 잉글랜드 프리미어리그(PL) 38라운드 최종전 웨스트햄과 경기에서 3-1로 승리하면서 다시 한 번 리그 선두로 시즌을 마무리하는데 성공했다. 반면 시즌 초반 리그 선두를 질주하던 아스날은 같은 시간 홈인 영국 런던 에미레이츠 스타디움에서 열린 에버튼과 경기에서 2-1 역전승을 거뒀다. 37라운드까지 2점차인 아스날은 무조건 승리하고 맨시티의 패배를 기다려야 했으나 펩의 맨시티는무너지지 않았다. 이날 승리로 우승을 차지하면서 맨시티는 전무후무한 리그 4연패를 달성했다. 1992-1993시즌 EPL 출범 이후 3연패 한 구단은 역대 맨유와 맨시티뿐이다. EPL 출범 전에도, 후에도 리그 4연패를 달성한 구단은 없었다.';
  const date = '7월 9일';

  return (
    <Container>
      <Post
        author={author}
        images={images}
        actions={actions}
        content={content}
        date={date}
      />
    </Container>
  );
};

export default Home;
