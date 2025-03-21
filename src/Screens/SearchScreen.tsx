import {Text} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.mainBg};
  justify-content: center;
  align-items: center;
`;

const SearchScreen = () => {
  return (
    <Container>
      <Text>Search</Text>
    </Container>
  );
};

export default SearchScreen;
