import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10px;
  margin-bottom: 10px;
`;
const Profile = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
const AvatarBtn = styled.TouchableOpacity``;
const Avatar = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 5px;
`;
const IdBtn = styled.TouchableOpacity``;
const Id = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.theme.mainText};
`;
const ConfigBtn = styled.TouchableOpacity``;
const ConfigIcon = styled(Icon)`
  color: ${props => props.theme.mainText};
  font-size: 20px;
`;

interface HeaderProps {
  image: string;
  name: string;
}
const Header = ({image, name}: HeaderProps) => {
  return (
    <Container>
      <Profile>
        <AvatarBtn>
          <Avatar
            source={{
              uri: image,
            }}
          />
        </AvatarBtn>
        <IdBtn>
          <Id>{name}</Id>
        </IdBtn>
      </Profile>
      <ConfigBtn>
        <ConfigIcon name="ellipsis-horizontal" />
      </ConfigBtn>
    </Container>
  );
};

export default Header;
