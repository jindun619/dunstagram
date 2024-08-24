import {useState} from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: 0 10px;
`;
const Content = styled.Text`
  font-size: 15px;
  line-height: 20px;
  color: ${props => props.theme.mainText};
  font-weight: 400;
`;
const Id = styled.Text`
  font-size: 15px;
  font-weight: 600;
`;
const MoreBtn = styled.TouchableOpacity`
  height: 15px;
`;
const MoreText = styled.Text`
  font-size: 15px;
  color: ${props => props.theme.neutralText};
`;

interface BodyProps {
  name: string;
  content: string;
}
const Body = ({name, content}: BodyProps) => {
  const [hasMoreBtn, setHasMoreBtn] = useState(content.length >= 100);

  return (
    <Container>
      <Content>
        <Id>{name} </Id>
        {hasMoreBtn ? (
          <>
            {content.slice(0, 100)}
            <MoreBtn onPress={() => setHasMoreBtn(false)}>
              <MoreText> 더 보기</MoreText>
            </MoreBtn>
          </>
        ) : (
          content
        )}
      </Content>
    </Container>
  );
};

export default Body;
