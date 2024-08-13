import styled from 'styled-components/native';

const Container = styled.View`
  padding: 0 10px;
`;

const ContentContainer = styled.View``;
const Content = styled.Text`
  font-size: 15px;
`;
const Id = styled.Text`
  font-size: 15px;
  font-weight: 600;
`;
const MoreBtn = styled.TouchableOpacity`
  margin: 0;
  padding: 0;
`;
const MoreText = styled.Text`
  font-size: 15px;
`;
const Body = () => {
  return (
    <Container>
      <ContentContainer>
        <Content>
          <Id>Manchester.City </Id>
          Manchester City Football Club is an English football club based in
          Manchester that competes in the Premier League...
          <MoreBtn>
            <MoreText>더 보기</MoreText>
          </MoreBtn>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default Body;
