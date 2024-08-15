import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './Tabs';
import Comment from '../Screens/Comment';

export type RootNavParamList = {
  Tabs: undefined;
  Comment: undefined;
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
