import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './Tabs';
import Comment from '../Screens/CommentScreen';
import {CommentsDataType} from '../utils/types';

export type RootNavParamList = {
  Tabs: undefined;
  Comment: {comments: CommentsDataType[]};
};
const RootNav = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Comment"
        component={Comment}
        options={{
          headerShown: false,
          presentation: 'modal',
          cardStyle: {
            height: '50%',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNav;
