import {Text} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Comment = () => {
  return (
    <Container>
      <Text>Comment</Text>
    </Container>
  );
};

export default Comment;
