import {Text} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.mainBg};
  justify-content: center;
  align-items: center;
`;

const ReelsScreen = () => {
  return (
    <Container>
      <Text>Reels</Text>
    </Container>
  );
};

export default ReelsScreen;
